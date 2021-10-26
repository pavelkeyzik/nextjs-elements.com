import { Box, Card, Grid, Image, Text } from "@theme-ui/components";
import { RecordModel } from "../typings/models/RecordModel";
import { RouterLink } from "./RouterLink";

type RecordCardsProps = {
  records: RecordModel[];
};

function RecordCards(props: RecordCardsProps) {
  return (
    <Grid
      gap={4}
      columns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.records.map((record) => {
        return (
          <RouterLink key={record._id} to={`/records/${record._id}`}>
            <Card
              variant="secondary"
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
              <Image src={record.coverURL} />
              <Box p={3}>
                <Text variant="heading">{record.name}</Text>
              </Box>
            </Card>
          </RouterLink>
        );
      })}
    </Grid>
  );
}

export { RecordCards };
