import { Featured } from "@enums/works";

export type Works = {
  id: number;
  title: string;
  description: string;
  featured: Featured;
  status: string;
  creationYear: string;
  thumbnail: string;
  url: string;
};
