export type MediaModel = {
  _id: string;
  name: string;
  alternativeText: string;
  url: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      url: string;
    };
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
  };
};
