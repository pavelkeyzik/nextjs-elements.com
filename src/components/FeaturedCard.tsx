import {
  Box,
  Grid,
  Image,
  Heading,
  Paragraph,
  Badge,
  AspectRatio,
} from "theme-ui";
import { RecordModel } from "../typings/models/RecordModel";
import { RouterLink } from "./RouterLink";

type FeaturedCardProps = {
  record: RecordModel;
};

function FeaturedCard(props: FeaturedCardProps) {
  return (
    <Box mb={5}>
      <RouterLink to={`/records/${props.record._id}`}>
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
            <Heading mt={3}>{props.record.name}</Heading>
            <Paragraph mt={2}>{props.record.description}</Paragraph>
          </Box>
          <AspectRatio
            ratio={16 / 9}
            sx={{ borderRadius: 4, overflow: "hidden" }}
          >
            <Image src={props.record.coverURL} sx={{ objectFit: "cover" }} />
          </AspectRatio>
        </Grid>
      </RouterLink>
    </Box>
  );
}

export { FeaturedCard };
