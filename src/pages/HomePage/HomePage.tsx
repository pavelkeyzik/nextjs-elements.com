import { Container } from "@theme-ui/components";
import { Hero } from "../../components/Hero";
import { RecordCards } from "../../components/RecordCards";
import { Section } from "../../components/Section";
import { useLastRecords } from "../../hooks/use-records";
import { useCategories } from "../../hooks/use-categories";
import { CaregoryCards } from "../../components/CategoryCards";

function HomePage() {
  const lastRecords = useLastRecords();
  const categories = useCategories();

  return (
    <div>
      <Hero />
      <Container py={4}>
        <Section title="Latest Next.js Resources" viewAllLink="/records">
          <RecordCards records={lastRecords} />
        </Section>
        <Section title="Categories" viewAllLink="/categories">
          <CaregoryCards categories={categories} />
        </Section>
      </Container>
    </div>
  );
}

export { HomePage };
