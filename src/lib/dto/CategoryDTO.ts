import { RecordDTO } from "./RecordDTO";

export type CategoryDTO = string;

export type CategoryWithRecordsDTO = {
  name: CategoryDTO;
  records: RecordDTO[];
};
