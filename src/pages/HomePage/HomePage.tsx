import { Container } from "@theme-ui/components";
import { Hero } from "../../components/Hero";
import { RecordCards } from "../../components/RecordCards";
import { Section } from "../../components/Section";
import { useRecords } from "../../hooks/use-records";
import { useCategories } from "../../hooks/use-categories";
import { CaregoryCards } from "../../components/CategoryCards";

function HomePage() {
  const records = useRecords();
  const categories = useCategories();

  return (
    <div>
      <Hero />
      <Container py={4}>
        <Section title="Latest Next.js Resources" viewAllLink="/records">
          <RecordCards records={records} />
        </Section>
        <Section title="Categories" viewAllLink="/categories">
          <CaregoryCards categories={categories} />
        </Section>
      </Container>
    </div>
  );
}

export { HomePage };
