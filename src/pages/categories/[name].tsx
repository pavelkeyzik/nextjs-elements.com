import { Container, Heading } from "@theme-ui/components";
import { RecordCards } from "../../components/RecordCards";
import { getAllCategories, getCategoryByName } from "../../lib/api/categories";
import { CategoryWithRecordsDTO } from "../../lib/dto/CategoryDTO";

type RecordsByCategoryPageProps = {
  category: CategoryWithRecordsDTO;
};

function RecordsByCategoryPage(props: RecordsByCategoryPageProps) {
  if (!props.category) {
    return (
      <Container>
        <Heading>Page Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Heading as="h1" mb={3}>
        {props.category.name}
      </Heading>
      <RecordCards records={props.category.records} />
    </Container>
  );
}

export async function getStaticPaths() {
  const categories = getAllCategories();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { name: category.name },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const category = getCategoryByName(params.name);

  return {
    props: { category },
    revalidate: 20,
  };
}

export default RecordsByCategoryPage;
