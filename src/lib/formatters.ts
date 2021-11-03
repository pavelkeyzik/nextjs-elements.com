function formatCategoryName(category: string) {
  if (!category) {
    return "";
  }

  const firstLetter = category[0];
  const restLetters = category.split("").slice(1).join("");

  return firstLetter.toUpperCase() + restLetters;
}

export { formatCategoryName };
