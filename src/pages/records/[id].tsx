import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Paragraph,
} from "@theme-ui/components";
import { api } from "../../api";
import { RecordCards } from "../../components/RecordCards";
import { SidebarCategories } from "../../components/SidebarCategories";
import { SidebarSubscribeCard } from "../../components/SidebarSubscribeCard";
import { RecordModel } from "../../typings/models/RecordModel";

type RecordInformationPageProps = {
  record: RecordModel;
  lastRecords: RecordModel[];
};

function RecordInformationPage(props: RecordInformationPageProps) {
  if (!props.record) {
    return (
      <Container>
        <Heading>Page Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Grid columns={["1fr", "1fr", "2fr 1fr"]} gap={5}>
        <Box>
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "muted",
              borderStyle: "solid",
            }}
          >
            <Image
              src={props.record.cover_url}
              sx={{
                verticalAlign: "middle",
              }}
            />
          </Box>
          <Heading as="h1" my={3}>
            {props.record.name}
          </Heading>
          <Paragraph mt={2}>{props.record.description}</Paragraph>
        </Box>
        <Box>
          <SidebarCategories
            title="Categories"
            categories={props.record.categories}
          />
          <Box mt={4}>
            <SidebarSubscribeCard />
          </Box>
        </Box>
      </Grid>
      <Divider my={4} />
      <Heading as="h1" mb={3}>
        Related content
      </Heading>
      <RecordCards records={props.lastRecords} />
    </Container>
  );
}

export async function getStaticPaths() {
  const records = await api.getAllRecords();

  // Get the paths we want to pre-render based on posts
  const paths = records.map((record) => ({
    params: { id: String(record.id) },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const record = await api.getRecordById(params.id);
  const lastRecords = await api.getLastRecords();

  return {
    props: { record, lastRecords },
  };
}

export default RecordInformationPage;
