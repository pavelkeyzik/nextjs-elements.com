import { CategoryDTO, CategoryWithRecordsDTO } from "../dto/CategoryDTO";
import { getRecordsByCategory } from "./records";

const categoryNames: CategoryDTO[] = ["blog"];

function getAllCategories() {
  return categoryNames.map(getCategoryByName);
}

function getCategoryByName(categoryName: string): CategoryWithRecordsDTO {
  return {
    name: categoryName,
    records: getRecordsByCategory(categoryName),
  };
}

export { getAllCategories, getCategoryByName };
