import { useEffect, useState } from "react";
import { MediaDTO } from "../../../lib/dto/MediaDTO";

function usePreviewModal(media: MediaDTO[]) {
  const [visible, setVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaDTO>();

  function openPreviews(selectedMedia: MediaDTO) {
    setVisible(true);
    setSelectedMedia(selectedMedia);
  }

  function closePreviews() {
    setVisible(false);
    setSelectedMedia(undefined);
  }

  function detectKeyboardActions(event: KeyboardEvent) {
    if (event.key === "Escape" || event.key === "Esc") {
      closePreviews();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyboardActions);

    return () => {
      document.removeEventListener("keydown", detectKeyboardActions);
    };
  }, []);

  return {
    visible,
    selectedMedia,
    openPreviews,
    closePreviews,
  };
}

export { usePreviewModal };
