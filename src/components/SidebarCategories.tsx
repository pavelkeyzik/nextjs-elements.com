import { Flex, Heading, Text } from "@theme-ui/components";
import { CategoryModel } from "../typings/models/CategoryModel";

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
          <Text my={2} key={category._id}>
            {category.name}
          </Text>
        );
      })}
    </Flex>
  );
}

export { SidebarCategories };
