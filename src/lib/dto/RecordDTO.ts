import { CategoryDTO } from "./CategoryDTO";
import { MediaDTO } from "./MediaDTO";

export type RecordDTO = {
  slug: string;
  title: string;
  cover_url: string;
  media: MediaDTO[];
  description: string;
  content: string;
  date: string;
  categories: CategoryDTO[];
};
