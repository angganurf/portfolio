import { Featured } from "@enums/works";

export type Works = {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  id: number;
  title: string;
  description: string;
  featured: Featured;
  status: string;
  creationYear: string;
  thumbnail: string;
  url: string;
};
