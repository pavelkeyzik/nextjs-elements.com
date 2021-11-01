import { RecordModel } from "./RecordModel";

export type CategoryModel = {
  id: number;
  name: string;
  records: RecordModel[];
};
