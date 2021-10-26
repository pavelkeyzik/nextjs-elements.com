import { Container, Heading } from "@theme-ui/components";
import { CaregoryCards } from "../../components/CategoryCards";
import { useCategories } from "../../hooks/use-categories";

function CategoriesPage() {
  const categories = useCategories();

  return (
    <Container>
      <Heading as="h1" mb={3}>
        Categories
      </Heading>
      <CaregoryCards categories={categories} />
    </Container>
  );
}

export { CategoriesPage };
