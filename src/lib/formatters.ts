function formatCategoryName(category: string) {
  if (!category) {
    return "";
  }

  const firstLetter = category[0];
  const restLetters = category.split("").slice(1).join("");

  return firstLetter.toUpperCase() + restLetters;
}

function formatRecordDate(value: string, type: "short" | "long" = "short") {
  return new Date(value).toLocaleDateString("en", {
    day: "2-digit",
    month: type,
    year: "numeric",
  });
}

export { formatCategoryName, formatRecordDate };
