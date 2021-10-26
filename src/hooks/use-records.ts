import { records } from "./mocks/records";

function useRecords() {
  return records;
}

function useLastRecords() {
  return records.slice(0, 4);
}

function useRecordById(id: string) {
  return records.find((record) => record._id === id);
}

function useRecordsByCategoryId(categoryId: string) {
  return records.filter((record) => {
    return record.categories
      .map((category) => category._id)
      .includes(categoryId);
  });
}

export { useRecords, useLastRecords, useRecordById, useRecordsByCategoryId };
