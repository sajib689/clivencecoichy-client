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

export interface TBlogPost {
  authorId: string | null; // authorId can be null or a string representing the author
  banner: string; // URL to the banner image
  category: string; // The category of the blog post (e.g., Technology)
  content: string; // The actual content or body of the blog post
  createdAt: string; // The date when the post was created, in ISO 8601 format
  title: string; // The title of the blog post
  updatedAt: string; // The date when the post was last updated, in ISO 8601 format
  __v: number; // Version key, typically used in MongoDB
  _id: string; // Unique identifier for the blog post (MongoDB ObjectId)
}
