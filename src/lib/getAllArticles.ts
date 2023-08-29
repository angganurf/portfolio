import { Client } from "@notionhq/client";
import React from "react";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

export default async function getAllArticles() {
  const myPost = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });
  return myPost;
}
