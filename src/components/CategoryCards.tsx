import { Badge, Card, Flex, Grid, Text } from "@theme-ui/components";
import { CategoryWithRecordsDTO } from "../lib/dto/CategoryDTO";
import { formatCategoryName } from "../lib/formatters";
import { RouterLink } from "./RouterLink";

type CaregoryCardsProps = {
  categories: CategoryWithRecordsDTO[];
};

function CaregoryCards(props: CaregoryCardsProps) {
  if (!props.categories) {
    return null;
  }

  return (
    <Grid
      gap={4}
      columns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.categories.map((category) => {
        return (
          <RouterLink key={category.name} href={`/categories/${category.name}`}>
            <Card
              sx={{
                width: "100%",
                borderRadius: 4,
                overflow: "hidden",
                transition: "transform .4s",
                cursor: "pointer",

                ":hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Flex
                p={3}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Text variant="heading">{category.nameFormatted}</Text>
                <Badge variant="secondary">{category.records.length}</Badge>
              </Flex>
            </Card>
          </RouterLink>
        );
      })}
    </Grid>
  );
}

export { CaregoryCards };
