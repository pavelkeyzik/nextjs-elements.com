import {
  AspectImage,
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Link,
} from "@theme-ui/components";
import ReactMarkdown from "react-markdown";
import { api } from "../../api";
import { RecordCards } from "../../components/RecordCards";
import { SidebarCategories } from "../../components/SidebarCategories";
import { SidebarSubscribeCard } from "../../components/SidebarSubscribeCard";
import { RecordModel } from "../../typings/models/RecordModel";
import { usePreviewModal, PreviewModal } from "../../components/PreviewModal";

type RecordInformationPageProps = {
  record: RecordModel;
  lastRecords: RecordModel[];
};

function RecordInformationPage(props: RecordInformationPageProps) {
  const modalState = usePreviewModal(props.record.media);

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
          <Heading as="h1" my={3}>
            {props.record.name}
          </Heading>
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
              src={api.getImageLink(props.record.cover?.formats?.large?.url)}
              sx={{
                verticalAlign: "middle",
              }}
            />
          </Box>
          <Grid
            sx={{
              gap: 4,
              gridTemplateColumns: "repeat(4, 1fr)",
              mt: 3,
            }}
          >
            {props.record.media.map((media) => {
              function openPreview() {
                modalState.openPreviews(media);
              }

              return (
                <Box
                  key={media._id}
                  style={{
                    borderRadius: 4,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={openPreview}
                >
                  <AspectImage
                    ratio={16 / 9}
                    src={api.getImageLink(media.formats?.small?.url)}
                  />
                </Box>
              );
            })}
          </Grid>
          <Box mt={4}>
            <ReactMarkdown
              components={{
                img(props) {
                  return (
                    <Box sx={{ width: "100%" }}>
                      <img
                        {...props}
                        style={{ objectFit: "contain", width: "100%" }}
                        src={api.getImageLink(props.src)}
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
              {props.record.text}
            </ReactMarkdown>
          </Box>
        </Box>
        <Box>
          <SidebarCategories
            title="Categories"
            categories={props.record.categories}
          />
          <Box mt={4}>
            <SidebarSubscribeCard />
          </Box>
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
  const records = await api.getAllRecords();

  // Get the paths we want to pre-render based on posts
  const paths = records.map((record) => ({
    params: { id: record._id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const record = await api.getRecordById(params.id);
  const lastRecords = await api.getLastRecords();

  return {
    props: { record, lastRecords },
    revalidate: 20,
  };
}

export default RecordInformationPage;
