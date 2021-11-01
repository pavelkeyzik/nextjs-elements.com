import { Container, Heading } from "@theme-ui/components";
import { api } from "../../api";
import { RecordCards } from "../../components/RecordCards";
import { CategoryModel } from "../../typings/models/CategoryModel";

type RecordsByCategoryPageProps = {
  category: CategoryModel;
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
  const categories = await api.getAllCategories();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { id: String(category.id) },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const category = await api.getCategory(params.id);

  return {
    props: { category },
    revalidate: 20,
  };
}

export default RecordsByCategoryPage;
