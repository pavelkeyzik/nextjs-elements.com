import { CategoryModel } from "./CategoryModel";

export type RecordModel = {
  _id: string;
  __v: number;
  name: string;
  coverURL: string;
  description: string;
  categories: CategoryModel[];
};
