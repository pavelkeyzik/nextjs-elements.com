import { Flex, Heading, Link } from "@theme-ui/components";
import { CategoryModel } from "../typings/models/CategoryModel";
import { RouterLink } from "./RouterLink";

type SidebarCategoriesProps = {
  title: string;
  categories: CategoryModel[];
};

function SidebarCategories(props: SidebarCategoriesProps) {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading as="h3" mb={3}>
        {props.title}
      </Heading>
      {props.categories.map((category) => {
        return (
          <RouterLink href={`/categories/${category._id}`}>
            <Link my={2} key={category._id}>
              {category.name}
            </Link>
          </RouterLink>
        );
      })}
    </Flex>
  );
}

export { SidebarCategories };
