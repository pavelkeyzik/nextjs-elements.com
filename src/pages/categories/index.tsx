import { Container, Heading } from "@theme-ui/components";
import { api } from "../../api";
import { CaregoryCards } from "../../components/CategoryCards";
import { CategoryModel } from "../../typings/models/CategoryModel";

type CategoriesPageProps = {
  categories: CategoryModel[];
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
  const categories = await api.getAllCategories();

  return {
    props: { categories },
    revalidate: 20,
  };
}

export default CategoriesPage;
