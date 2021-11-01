import { CategoryModel } from "./CategoryModel";

export type RecordModel = {
  id: number;
  name: string;
  cover_url: string;
  description: string;
  text: string;
  categories: CategoryModel[];
};
