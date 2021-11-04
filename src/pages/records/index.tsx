import { Container, Heading } from "@theme-ui/components";
import { RecordCards } from "../../components/RecordCards";
import { FeaturedCard } from "../../components/FeaturedCard";
import { getAllRecords } from "../../lib/api/records";
import { RecordDTO } from "../../lib/dto/RecordDTO";

type RecordsPageProps = {
  records: RecordDTO[];
};

function RecordsPage(props: RecordsPageProps) {
  return (
    <Container>
      <Heading as="h1" mb={3}>
        Templates
      </Heading>
      <FeaturedCard record={props.records[0]} />
      <RecordCards records={props.records.slice(1)} />
    </Container>
  );
}

export async function getStaticProps() {
  const records = getAllRecords();

  return {
    props: { records },
    revalidate: 20,
  };
}

export default RecordsPage;
