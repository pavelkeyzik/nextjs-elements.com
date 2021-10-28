import { Container, Heading } from "@theme-ui/components";
import { useRouter } from "next/router";
import { RecordCards } from "../../components/RecordCards";
import { useCategoryById } from "../../hooks/use-categories";
import { useRecordsByCategoryId } from "../../hooks/use-records";

function RecordsByCategoryPage() {
  const router = useRouter();
  const { id } = router.query;
  const category = useCategoryById(String(id));
  const records = useRecordsByCategoryId(String(id));

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

export default RecordsByCategoryPage;
