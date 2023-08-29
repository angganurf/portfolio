import { Client } from "@notionhq/client";

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
