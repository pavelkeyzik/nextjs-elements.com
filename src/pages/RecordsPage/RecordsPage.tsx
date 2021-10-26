import { Container, Heading } from "@theme-ui/components";
import { RecordCards } from "../../components/RecordCards";
import { useRecords } from "../../hooks/use-records";

function RecordsPage() {
  const records = useRecords();

  return (
    <Container>
      <Heading as="h1" mb={3}>
        Next.js Elements
      </Heading>
      <RecordCards records={records} />
    </Container>
  );
}

export { RecordsPage };
