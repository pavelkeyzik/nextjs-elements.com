import { Flex, Heading, Link } from "@theme-ui/components";
import { formatCategoryName } from "../lib/formatters";
import { CategoryDTO } from "../lib/dto/CategoryDTO";
import { RouterLink } from "./RouterLink";

type SidebarCategoriesProps = {
  title: string;
  categories: CategoryDTO[];
};

function SidebarCategories(props: SidebarCategoriesProps) {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading as="h3" mb={3}>
        {props.title}
      </Heading>
      {props.categories.map((category) => {
        return (
          <RouterLink key={category} href={`/categories/${category}`}>
            <Link my={2}>{formatCategoryName(category)}</Link>
          </RouterLink>
        );
      })}
    </Flex>
  );
}

export { SidebarCategories };
