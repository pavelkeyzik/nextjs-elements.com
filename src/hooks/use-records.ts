import { records } from "./mocks/records";

function useRecords() {
  return records;
}

function useRecordById(id: string) {
  return records.find((record) => record._id === id);
}

export { useRecords, useRecordById };
