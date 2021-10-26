import { Box, Card, Grid, Text } from "@theme-ui/components";
import { CategoryModel } from "../typings/models/CategoryModel";

type CaregoryCardsProps = {
  categories: CategoryModel[];
};

function CaregoryCards(props: CaregoryCardsProps) {
  return (
    <Grid
      gap={4}
      columns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.categories.map((category) => {
        return (
          <Card
            key={category._id}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              transition: "transform .4s",
              cursor: "pointer",

              ":hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box p={3}>
              <Text variant="heading">{category.name}</Text>
            </Box>
          </Card>
        );
      })}
    </Grid>
  );
}

export { CaregoryCards };
