import { CategoryModel } from "./CategoryModel";

type MediaType = {
  id: number;
  name: string;
  alternativeText: string;
  url: string;
  formats: {
    thumbnail: {
      url: string;
    };
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
  };
};

export type RecordModel = {
  id: number;
  name: string;
  description: string;
  text: string;
  media: MediaType[];
  categories: CategoryModel[];
};
