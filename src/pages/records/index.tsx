import { Container, Heading } from "@theme-ui/components";
import { RecordCards } from "../../components/RecordCards";
import { FeaturedCard } from "../../components/FeaturedCard";
import { useRecords } from "../../hooks/use-records";

function RecordsPage() {
  const records = useRecords();

  return (
    <Container>
      <Heading as="h1" mb={3}>
        Resources
      </Heading>
      <FeaturedCard record={records[0]} />
      <RecordCards records={records.slice(1)} />
    </Container>
  );
}

export default RecordsPage;
