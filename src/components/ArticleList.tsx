import { ArticleCard } from "@/components/ArticleCard";
import { Article } from "@lib/types";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </>
  );
}
