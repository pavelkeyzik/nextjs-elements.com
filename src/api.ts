import { CategoryModel } from "./typings/models/CategoryModel";
import { RecordModel } from "./typings/models/RecordModel";

function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

function getStrapiMedia(media: { url: string }) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

const api = {
  async getAllCategories(): Promise<CategoryModel[]> {
    return await fetchAPI("/categories");
  },
  async getCategory(categoryId: number): Promise<CategoryModel> {
    return await fetchAPI(`/categories/${categoryId}`);
  },
  async getAllRecords(): Promise<RecordModel[]> {
    return await fetchAPI("/records");
  },
  async getLastRecords(): Promise<RecordModel[]> {
    return await fetchAPI("/records?_limit=4");
  },
  async getRecordById(id: number): Promise<RecordModel> {
    return await fetchAPI(`/records/${id}`);
  },
  getImageLink(path?: string) {
    return getStrapiURL(path);
  },
};

export { api };
