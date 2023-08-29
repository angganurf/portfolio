// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { prisma } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method !== "POST") {
    const { limit = 1 } = req.query;

    const page = await prisma.pages.findMany({
      select: {
        view_count: true,
      },
      where: {
        slug: `${req.query.slug}`,
      },
    });
    if (page) {
      return res.status(200).json({
        total: page[0]?.view_count || null,
      });
    }
    return res.status(200).json({ page });
  }
}
