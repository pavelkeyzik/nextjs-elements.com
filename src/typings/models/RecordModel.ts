import { CategoryModel } from "./CategoryModel";
import { MediaModel } from "./MediaModel";

export type RecordModel = {
  _id: string;
  name: string;
  description: string;
  text: string;
  media: MediaModel[];
  cover: MediaModel;
  categories: CategoryModel[];
};
