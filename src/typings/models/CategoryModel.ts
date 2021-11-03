import { RecordModel } from "./RecordModel";

export type CategoryModel = {
  _id: string;
  name: string;
  records: RecordModel[];
};
