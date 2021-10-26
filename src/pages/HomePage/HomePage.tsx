import { Container } from "@theme-ui/components";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { RecordCards } from "../../components/RecordCards";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { useRecords } from "../../hooks/use-records";

function HomePage() {
  const records = useRecords();

  return (
    <div>
      <Header />
      <Hero />
      <Container py={4}>
        <Section title="Latest Next.js Resources">
          <RecordCards records={records} />
        </Section>
        <Section title="Latest Next.js Elements">
          <RecordCards records={records} />
        </Section>
      </Container>
      <Footer />
    </div>
  );
}

export { HomePage };
