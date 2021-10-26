import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Paragraph,
} from "@theme-ui/components";
import { useParams } from "react-router";
import { RecordCards } from "../../components/RecordCards";
import { SidebarCategories } from "../../components/SidebarCategories";
import { useRecordById, useRecords } from "../../hooks/use-records";

function RecordInformationPage() {
  const { id } = useParams<{ id: string }>();
  const record = useRecordById(id);
  const records = useRecords();

  if (!record) {
    return (
      <Container>
        <Heading>Page Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Grid columns="2fr 1fr" gap={5}>
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
              src={record.coverURL}
              sx={{
                verticalAlign: "middle",
              }}
            />
          </Box>
          <Heading as="h1" my={3}>
            {record.name}
          </Heading>
          <Paragraph mt={2}>{record.description}</Paragraph>
        </Box>
        <Box>
          <SidebarCategories
            title="Categories"
            categories={record.categories}
          />
        </Box>
      </Grid>
      <Divider my={4} />
      <Heading as="h1" mb={3}>
        Related content
      </Heading>
      <RecordCards records={records} />
    </Container>
  );
}

export { RecordInformationPage };
