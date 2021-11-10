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

type QueryOptions = {
  limit?: number;
};

function getAllCategories(query: QueryOptions = {}) {
  const categories = getCategoryNames()
    .map(getCategoryByName)
    .sort((a, b) => b.records.length - a.records.length);

  if (query.limit) {
    return categories.slice(0, query.limit);
  }

  return categories;
}

function getCategoryByName(categoryName: string): CategoryWithRecordsDTO {
  return {
    name: categoryName,
    nameFormatted: formatCategoryName(categoryName),
    records: getRecordsByCategory(categoryName),
  };
}

export { getAllCategories, getCategoryByName };
