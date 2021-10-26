import { Container, Heading } from "@theme-ui/components";
import { useParams } from "react-router";
import { RecordCards } from "../../components/RecordCards";
import { useCategoryById } from "../../hooks/use-categories";
import { useRecordsByCategoryId } from "../../hooks/use-records";

function RecordsByCategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = useCategoryById(id);
  const records = useRecordsByCategoryId(id);

  if (!category) {
    return (
      <Container>
        <Heading>Page Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Heading as="h1" mb={3}>
        {category.name}
      </Heading>
      <RecordCards records={records} />
    </Container>
  );
}

export { RecordsByCategoryPage };
