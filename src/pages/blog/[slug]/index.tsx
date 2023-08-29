import { AnchorLink } from "@components/AnchorLink";
import CustomLink from "@components/CustomLink";
import React, { Fragment, useEffect } from "react";
import Image from "next/legacy/image";
import { Callout } from "@components/Callout";
import { YoutubeEmbed } from "@components/YoutubeEmbed";
import siteMetadata from "@data/siteMetadata";
import { ArticlesPage } from "@lib/types";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllArticles,
  getArticlePage,
  getMoreArticlesToSuggest,
} from "@lib/notion";
import slugify from "slugify";
import { Client } from "@notionhq/client";
import { NextSeo } from "next-seo";
import PageTitle from "@components/PageTitle";
import ImageSpan from "@components/ImageSpan";

export const Text = ({ text }: { text: any[] }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? "font-bold" : null,
          italic ? "font-fancy text-black dark:text-white" : null,
          code
            ? "bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base font-mono"
            : null,
          strikethrough ? "line-through" : null,
          underline ? "underline" : null,
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? (
          <CustomLink href={text.link.url}>{text.content}</CustomLink>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export function renderBlocks(block: any) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label
            htmlFor={id}
            className="flex items-center justify-start space-x-3"
          >
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption =
        value.caption.length >= 1 ? value.caption[0].plain_text : "";
      return (
        <figure
          className="mt-0 aspect-video"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            className="rounded-xl"
            layout="fill"
            sizes="100vw"
            objectFit="cover"
            alt={
              caption
                ? caption
                : "A visual depiction of what is being written about"
            }
            src={src}
          />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <Callout>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.text} />
          </div>
        </Callout>
      );
    case "embed":
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf("/") + 1);
      return (
        <div>
          <iframe
            height="600"
            className="w-full"
            scrolling="no"
            title="Postage from Bag End"
            src={`https://codepen.io/braydoncoyer/embed/preview/${codePenEmbedKey}?default-tab=result`}
            frameBorder="no"
            loading="lazy"
            allowFullScreen={true}
          >
            See the Pen <a href={value.url}>Postage from Bag End</a> by Braydon
            Coyer (<a href="https://codepen.io/braydoncoyer">@braydoncoyer</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      );
    case "table_of_contents":
      return <div>TOC</div>;
    case "video":
      return <YoutubeEmbed url={value.external.url} />;
    case "quote":
      return (
        <blockquote className="p-4 rounded-r-lg">
          <Text text={value.text} />
        </blockquote>
      );
    case "divider":
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
}

const ArticlePage = ({
  content,
  title,
  coverImage,
  slug,
  publishedDate,
  lastEditedAt,
  sponsoredArticleUrl,
  summary,
  moreArticles,
}: ArticlesPage) => {
  const { push } = useRouter();
  const updateMeta = {
    title: `${title}`,
    description: `${summary}`,
  };
  const publishedOn = new Date(publishedDate).toLocaleDateString(
    siteMetadata.locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const modifiedDate = new Date(lastEditedAt).toLocaleDateString(
    siteMetadata.locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: "POST",
    });
  }, [slug]);
  return (
    <>
      <NextSeo {...updateMeta} />
      <div className="py-3 px-0 mt-10 max-md:mt-4">
        <PageTitle
          title={updateMeta.title}
          description={updateMeta.description}
        />
        <div>
          <div className="gap-3 relative inline-grid pt-3 pb-10 leading-[0] max-md:p-4">
            <Image
              src={`${coverImage}`}
              width={708}
              height={424}
              alt={`${title}`}
              blurDataURL={coverImage}
              placeholder="blur"
              className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
            />
          </div>
        </div>
        <div className="max-w-[500px] m-auto">
          <p
            className={`text-[16px] my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px]`}
          >
            {summary}
          </p>
        </div>
      </div>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: any } }[] = [];
  const data: any = await getAllArticles(process.env.NOTION_DATABASE);

  data.forEach(
    (result: {
      object: string;
      properties: { Name: { title: { plain_text: any }[] } };
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

  //   const moreArticles: any = await getMoreArticlesToSuggest(
  //     process.env.NOTION_DATABASE,
  //     articleTitle
  //   );

  let blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: `${blocks.next_cursor}`,
    });

    content = [...content, ...blocks.results];
    console.log(content);
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
      sponsoredArticleUrl,
    },
    revalidate: 30,
  };
};

export default ArticlePage;
