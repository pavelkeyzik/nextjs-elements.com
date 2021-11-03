import { useEffect, useState } from "react";
import { MediaModel } from "../../../typings/models/MediaModel";

function usePreviewModal(media: MediaModel[]) {
  const [visible, setVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaModel>();

  function openPreviews(selectedMedia: MediaModel) {
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
