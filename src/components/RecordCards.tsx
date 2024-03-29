import { AspectImage, Box, Card, Grid, Text } from "@theme-ui/components";
import { RecordDTO } from "../lib/dto/RecordDTO";
import { formatRecordDate } from "../lib/formatters";
import { RouterLink } from "./RouterLink";

type RecordCardsProps = {
  records: RecordDTO[];
};

function RecordCards(props: RecordCardsProps) {
  if (!props.records) {
    return null;
  }

  return (
    <Grid
      gap={4}
      columns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.records.map((record) => {
        return (
          <RouterLink key={record.slug} href={`/records/${record.slug}`}>
            <Card
              variant="secondary"
              sx={{
                width: "100%",
                borderRadius: 4,
                overflow: "hidden",
                transition: "transform .4s",
                cursor: "pointer",
                ":hover": {
                  transform: "translateY(-4px)",
                },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AspectImage ratio={16 / 9} src={record.cover_url} />
              <Box
                sx={{
                  px: 3,
                  pt: 3,
                  pb: 2,
                }}
              >
                <Text variant="heading">{record.title}</Text>
              </Box>
              <Box
                sx={{
                  px: 3,
                  pb: 3,
                }}
              >
                <Text variant="date">{formatRecordDate(record.date)}</Text>
              </Box>
            </Card>
          </RouterLink>
        );
      })}
    </Grid>
  );
}

export { RecordCards };
