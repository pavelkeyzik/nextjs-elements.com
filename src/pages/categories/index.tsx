import { Container, Heading } from "@theme-ui/components";
import { CaregoryCards } from "../../components/CategoryCards";
import { getAllCategories } from "../../lib/api/categories";
import { CategoryWithRecordsDTO } from "../../lib/dto/CategoryDTO";

type CategoriesPageProps = {
  categories: CategoryWithRecordsDTO[];
};

function CategoriesPage(props: CategoriesPageProps) {
  return (
    <Container>
      <Heading as="h1" mb={3}>
        Categories
      </Heading>
      <CaregoryCards categories={props.categories} />
    </Container>
  );
}

export async function getStaticProps() {
  const categories = getAllCategories();

  return {
    props: { categories },
    revalidate: 20,
  };
}

export default CategoriesPage;
