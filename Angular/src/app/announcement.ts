import { Category } from "./category";

export interface Announcement {

  id: String;
  message:String;
  title: String;
  author: String;
  category: Category;
  imageUrl: String;
  categoryId: String;
  description: String;
}
