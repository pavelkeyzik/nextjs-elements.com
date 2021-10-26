import { CategoryModel } from "../typings/models/CategoryModel";

function useCategories() {
  const categoires: CategoryModel[] = [
    {
      _id: "1",
      name: "Corporate",
    },
    {
      _id: "2",
      name: "Creative",
    },
    {
      _id: "3",
      name: "Wedding",
    },
    {
      _id: "4",
      name: "Blog",
    },
  ];

  return categoires;
}

export { useCategories };