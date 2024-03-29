import React from "react";
import {
  AspectImage,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@theme-ui/components";
import ReactMarkdown from "react-markdown";
import { Calendar } from "styled-icons/feather";
import { RecordCards } from "../../components/RecordCards";
import { SidebarCategories } from "../../components/SidebarCategories";
import { SidebarSubscribeCard } from "../../components/SidebarSubscribeCard";
import { usePreviewModal, PreviewModal } from "../../components/PreviewModal";
import { getAllRecords, getRecordBySlug } from "../../lib/api/records";
import { RecordDTO } from "../../lib/dto/RecordDTO";
import { config } from "../../config";
import { formatRecordDate } from "../../lib/formatters";

type RecordInformationPageProps = {
  record: RecordDTO;
  lastRecords: RecordDTO[];
};

function RecordInformationPage(props: RecordInformationPageProps) {
  const modalState = usePreviewModal(props.record.media);
  const isHavingMedia = props.record.media && props.record.media.length > 0;

  if (!props.record) {
    return (
      <Container>
        <Heading>Page Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Grid columns={["1fr", "1fr", "2fr 1fr"]} gap={5}>
        <Box>
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "muted",
              borderStyle: "solid",
            }}
          >
            <Image
              src={props.record.cover_url}
              sx={{
                verticalAlign: "middle",
              }}
            />
          </Box>
          <Heading as="h1" mt={3} mb={2}>
            {props.record.title}
          </Heading>
          <Text variant="date" sx={{ display: "flex", alignItems: "center" }}>
            <Calendar width={16} strokeWidth={2} />
            <Text sx={{ ml: 2 }}>
              {formatRecordDate(props.record.date, "long")}
            </Text>
          </Text>
          {isHavingMedia ? (
            <React.Fragment>
              <Heading as="h2" mt={4}>
                Previews
              </Heading>
              <Grid
                sx={{
                  gap: 2,
                  gridTemplateColumns: "repeat(5, 1fr)",
                  mt: 3,
                }}
              >
                {props.record.media.map((media, index) => {
                  function openPreview() {
                    modalState.openPreviews(media);
                  }

                  return (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        cursor: "pointer",
                        bg: "muted",
                        borderWidth: 1,
                        borderColor: "muted",
                        borderStyle: "solid",
                      }}
                      onClick={openPreview}
                    >
                      <AspectImage ratio={16 / 9} src={media} />
                    </Box>
                  );
                })}
              </Grid>
            </React.Fragment>
          ) : null}

          <Heading as="h2" mt={4}>
            Description
          </Heading>
          <Box>
            <ReactMarkdown
              components={{
                img(props) {
                  return (
                    <Box sx={{ width: "100%" }}>
                      <img
                        {...props}
                        style={{ objectFit: "contain", width: "100%" }}
                        src={props.src}
                      />
                    </Box>
                  );
                },
                a(props) {
                  const { ref, ...rest } = props;

                  return <Link variant="markdown" target="_blank" {...rest} />;
                },
              }}
            >
              {props.record.content}
            </ReactMarkdown>
          </Box>
        </Box>
        <Box>
          <SidebarCategories
            title="Categories"
            categories={props.record.categories}
          />
          {config.features.subscribeToNewsLetterEnabled ? (
            <Box mt={4}>
              <SidebarSubscribeCard />
            </Box>
          ) : null}
        </Box>
      </Grid>
      <Divider my={4} />
      <Heading as="h1" mb={3}>
        Related content
      </Heading>
      <RecordCards records={props.lastRecords} />
      <PreviewModal
        visible={modalState.visible}
        selectedMedia={modalState.selectedMedia}
        onClose={modalState.closePreviews}
      />
    </Container>
  );
}

export async function getStaticPaths() {
  const records = getAllRecords();

  // Get the paths we want to pre-render based on posts
  const paths = records.map((record) => ({
    params: { slug: record.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const record = getRecordBySlug(params.slug);
  const lastRecords = getAllRecords().slice(0, 4);

  return {
    props: { record, lastRecords },
    revalidate: 20,
  };
}

export default RecordInformationPage;
