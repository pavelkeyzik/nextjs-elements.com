import { Box, Grid, Image, Heading, Paragraph, Text } from "theme-ui";
import { RecordModel } from "../typings/models/RecordModel";
import { RouterLink } from "./RouterLink";

type FeaturedCardProps = {
  record: RecordModel;
};

function FeaturedCard(props: FeaturedCardProps) {
  return (
    <RouterLink to={`/records/${props.record._id}`}>
      <Grid
        gap={4}
        columns="1fr 1fr"
        p={4}
        pb={5}
        bg="muted"
        sx={{
          width: "100%",
          minHeight: 300,
          borderRadius: 5,
          position: "relative",
          overflow: "hidden",
          transition: "transform .4s",
          cursor: "pointer",

          ":hover": {
            transform: "translateY(-4px)",
          },
        }}
        mb={4}
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
          <Image
            src={props.record.coverURL}
            sx={{
              position: "absolute",
              verticalAlign: "middle",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Box>
      </Grid>
    </RouterLink>
  );
}

export { FeaturedCard };
