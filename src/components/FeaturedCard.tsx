import {
  Box,
  Grid,
  Image,
  Heading,
  Paragraph,
  Text,
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
            <Box
              bg="primary"
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                borderRadius: 5,
                mb: 3,
              }}
            >
              <Text>Featured Item</Text>
            </Box>
            <Heading mt={3}>{props.record.name}</Heading>
            <Paragraph mt={2}>{props.record.description}</Paragraph>
          </Box>
          <AspectRatio ratio={16 / 9}>
            <Image src={props.record.coverURL} sx={{ objectFit: "cover" }} />
          </AspectRatio>
        </Grid>
      </RouterLink>
    </Box>
  );
}

export { FeaturedCard };
