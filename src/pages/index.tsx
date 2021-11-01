import { Container } from "@theme-ui/components";
import { Hero } from "../components/Hero";
import { RecordCards } from "../components/RecordCards";
import { Section } from "../components/Section";
import { CaregoryCards } from "../components/CategoryCards";
import { api } from "../api";
import { CategoryModel } from "../typings/models/CategoryModel";
import { RecordModel } from "../typings/models/RecordModel";

type HomePageProps = {
  categories: CategoryModel[];
  lastRecords: RecordModel[];
};

function HomePage(props: HomePageProps) {
  return (
    <div>
      <Hero />
      <Container py={4}>
        <Section title="Latest Next.js Resources" viewAllLink="/records">
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
  const categories = await api.getAllCategories();
  const lastRecords = await api.getLastRecords();

  return {
    props: { categories, lastRecords },
    revalidate: 20,
  };
}

export default HomePage;
