import { Box, Card, Grid, Image, Text } from "@theme-ui/components";
import { RecordModel } from "../hooks/use-records";

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
          <Card
            key={record._id}
            bg="muted"
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
            <Box px={3} py={2}>
              <Text variant="heading">{record.name}</Text>
            </Box>
          </Card>
        );
      })}
    </Grid>
  );
}

export { RecordCards };
