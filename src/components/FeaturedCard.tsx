import {
  Box,
  Grid,
  Heading,
  Paragraph,
  Badge,
  AspectImage,
  Text,
} from "theme-ui";
import { RecordDTO } from "../lib/dto/RecordDTO";
import { formatRecordDate } from "../lib/formatters";
import { RouterLink } from "./RouterLink";

type FeaturedCardProps = {
  record: RecordDTO;
};

function FeaturedCard(props: FeaturedCardProps) {
  if (!props.record) {
    return null;
  }

  return (
    <Box mb={5}>
      <RouterLink href={`/records/${props.record.slug}`}>
        <Grid
          gap={4}
          columns={["1fr", "1fr", "1fr 1fr"]}
          p={4}
          bg="muted"
          sx={{
            width: "100%",
            borderRadius: 5,
            position: "relative",
            overflow: "hidden",
            transition: "transform .4s",
            cursor: "pointer",
            alignItems: "flex-start",

            ":hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box>
            <Badge bg="primary">Featured Item</Badge>
            <Heading mt={3}>{props.record.title}</Heading>
            <Paragraph mt={2}>{props.record.description}</Paragraph>
            <Box sx={{ mt: 3 }}>
              <Text variant="date">{formatRecordDate(props.record.date)}</Text>
            </Box>
          </Box>
          <Box
            style={{
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <AspectImage ratio={16 / 9} src={props.record.cover_url} />
          </Box>
        </Grid>
      </RouterLink>
    </Box>
  );
}

export { FeaturedCard };
