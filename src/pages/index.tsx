import { Container } from "@theme-ui/components";
import { Hero } from "../components/Hero";
import { RecordCards } from "../components/RecordCards";
import { Section } from "../components/Section";
import { CaregoryCards } from "../components/CategoryCards";
import { getAllRecords } from "../lib/api/records";
import { RecordDTO } from "../lib/dto/RecordDTO";
import { CategoryWithRecordsDTO } from "../lib/dto/CategoryDTO";
import { getAllCategories } from "../lib/api/categories";

type HomePageProps = {
  categories: CategoryWithRecordsDTO[];
  lastRecords: RecordDTO[];
};

function HomePage(props: HomePageProps) {
  return (
    <div>
      <Hero />
      <Container py={4}>
        <Section title="Latest Next.js Templates" viewAllLink="/records">
          <RecordCards records={props.lastRecords} />
        </Section>
        <Section title="Categories" viewAllLink="/categories">
          <CaregoryCards categories={props.categories} />
        </Section>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const lastRecords = getAllRecords();
  const categories = getAllCategories();

  return {
    props: { categories, lastRecords },
    revalidate: 20,
  };
}

export default HomePage;
