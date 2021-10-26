import { categoires } from "./mocks/categories";

function useCategories() {
  return categoires;
}

function useCategoryById(id: string) {
  return categoires.find((category) => category._id === id);
}

export { useCategories, useCategoryById };
