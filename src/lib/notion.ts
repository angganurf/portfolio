import { Client } from "@notionhq/client";
import { GetStaticPaths } from "next";
import slugify from "slugify";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getAllArticles = async (databaseId: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "Status",
          select: {
            equals: "✅ Published",
          },
        },
        {
          property: "Status",
          select: {
            equals: "✏️ Draft",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

export const convertToArticleList = (tableData: any) => {
  let tags: string[] = [];
  const articles = tableData.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      tags: article.properties.tags.multi_select.map(
        (tag: { name: string; id: any }) => {
          if (!tags.includes(tag.name)) {
            const newList = [...tags, tag.name];
            tags = newList;
          }
          return { name: tag.name, id: tag.id };
        }
      ),
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        "https://via.placeholder.com/600x400.png",
      publishedDate: article.properties.Published?.date?.start,
      summary:
        article.properties?.Summary.rich_text[0]?.plain_text ??
        "Placeholder summary",
      isPublic: article.properties?.Public.checkbox,
    };
  });

  return { articles, tags };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string } }[] = [];
  const data: any = await getAllArticles(process.env.NOTION_DATABASE);

  data.forEach(
    (result: {
      object: string;
      properties: { Name: { title: { plain_text: string }[] } };
    }) => {
      if (result.object === "page") {
        paths.push({
          params: {
            slug: slugify(
              result.properties.Name.title[0].plain_text
            ).toLowerCase(),
          },
        });
      }
    }
  );

  return {
    paths,
    fallback: "blocking",
  };
};

//@ts-ignore
export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  let content = [];
  let articleTitle = "";
  let publishedDate = null;
  let lastEditedAt = null;
  let coverImage = null;
  let sponsoredArticleUrl = null;
  let summary = null;

  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });

  const data: any = await getAllArticles(process.env.NOTION_DATABASE);

  const page: any = getArticlePage(data, slug);

  articleTitle = page.properties.Name.title[0].plain_text;
  publishedDate = page.properties.Published.date.start;
  lastEditedAt = page.properties.LastEdited.last_edited_time;
  sponsoredArticleUrl = page.properties.canonicalUrl?.url;
  summary = page.properties.Summary?.rich_text[0]?.plain_text;
  coverImage =
    page.properties?.coverImage?.files[0]?.file?.url ||
    page.properties.coverImage?.files[0]?.external?.url ||
    "https://via.placeholder.com/600x400.png";

  const moreArticles: any = await getMoreArticlesToSuggest(
    process.env.NOTION_DATABASE,
    articleTitle
  );

  let blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: blocks.next_cursor || undefined,
    });

    content = [...content, ...blocks.results];
  }

  return {
    props: {
      content,
      title: articleTitle,
      publishedDate,
      lastEditedAt,
      slug,
      coverImage,
      summary,
      moreArticles,
      sponsoredArticleUrl,
    },
    revalidate: 30,
  };
};

export const getBlocks = async (blockId: any) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });

  return response.results;
};

export const getMoreArticlesToSuggest = async (
  //@ts-ignore
  databaseId,
  //@ts-ignore
  currentArticleTitle
) => {
  let moreArticles;

  const response = await notion.databases.query({
    //@ts-ignore
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "✅ Published",
          },
        },
        {
          property: "Name",
          //@ts-ignore
          text: {
            does_not_equal: currentArticleTitle,
          },
        },
      ],
    },
  });

  moreArticles = response.results.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        "https://via.placeholder.com/600x400.png",
      publishedDate: article.properties.Published.date.start,
      summary: article.properties?.Summary.rich_text[0]?.plain_text,
    };
  });

  shuffleArray(moreArticles);

  return moreArticles.slice(0, 3);
};

export const getArticlePage = (data: any[], slug: string) => {
  const response = data.find((result) => {
    if (result.object === "page") {
      const resultSlug = slugify(
        result.properties.Name.title[0].plain_text
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
};

export function shuffleArray(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    // Pick a random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function turnIntoChangelogItem(item: any, array: any[]) {
  const updatedChangelogList = [
    ...array,
    {
      title: item.properties.Name.title[0].plain_text,
      description: item.properties.Description.rich_text[0].plain_text,
      date: item.properties.Date?.date?.start,
    },
  ];
  return updatedChangelogList;
}
