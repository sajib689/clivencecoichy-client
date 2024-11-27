/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";




export type TBlog = {
  _id: string;
  imageSrc: string | StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
};

export interface TService {
  image: string | StaticImageData;
  title: string;
  description: string;
}
