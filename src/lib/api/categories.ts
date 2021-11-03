import { CategoryDTO, CategoryWithRecordsDTO } from "../dto/CategoryDTO";
import { formatCategoryName } from "../formatters";
import { getAllRecords, getRecordsByCategory } from "./records";

function uniq(a: string[]) {
  var seen: { [key: string]: boolean } = {};
  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

function getCategoryNames(): CategoryDTO[] {
  return getAllRecords()
    .map((record) => record.categories)
    .reduce((previousValue, currentValue) => {
      return uniq([...previousValue, ...currentValue]);
    }, []);
}

function getAllCategories() {
  return getCategoryNames().map(getCategoryByName);
}

function getCategoryByName(categoryName: string): CategoryWithRecordsDTO {
  return {
    name: categoryName,
    nameFormatted: formatCategoryName(categoryName),
    records: getRecordsByCategory(categoryName),
  };
}

export { getAllCategories, getCategoryByName };
