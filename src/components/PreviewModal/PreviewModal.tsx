import { Box, IconButton } from "@theme-ui/components";
import { X } from "styled-icons/feather";
import { api } from "../../api";
import { MediaModel } from "../../typings/models/MediaModel";

type PreviewModalProps = {
  visible?: boolean;
  onClose?: () => void;
  selectedMedia?: MediaModel;
};

function PreviewModal(props: PreviewModalProps) {
  if (!props.visible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "90%",
          overflowY: "auto",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 120,
            height: 120,
            background: "rgba(255,255,255,0.05)",
            transition: "background .2s",
            ":hover": {
              background: "rgba(255,255,255,0.1)",
            },
          }}
          onClick={props.onClose}
        >
          <X width="48" />
        </IconButton>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              maxWidth: props.selectedMedia?.width,
            }}
            src={api.getImageLink(props.selectedMedia?.url)}
          />
        </Box>
      </Box>
    </Box>
  );
}
export { PreviewModal };
