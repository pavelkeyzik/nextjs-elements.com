import { Container, Heading } from "@theme-ui/components";
import { RecordCards } from "../../components/RecordCards";
import { FeaturedCard } from "../../components/FeaturedCard";
import { api } from "../../api";
import { RecordModel } from "../../typings/models/RecordModel";

type RecordsPageProps = {
  records: RecordModel[];
};

function RecordsPage(props: RecordsPageProps) {
  return (
    <Container>
      <Heading as="h1" mb={3}>
        Resources
      </Heading>
      <FeaturedCard record={props.records[0]} />
      <RecordCards records={props.records.slice(1)} />
    </Container>
  );
}

export async function getStaticProps() {
  const records = await api.getAllRecords();

  return {
    props: { records },
    revalidate: 1,
  };
}

export default RecordsPage;
