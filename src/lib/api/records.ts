import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { RecordDTO } from "../dto/RecordDTO";

const recordsDirectory = join(process.cwd(), "records");

function getRecordSlugs() {
  return fs.readdirSync(recordsDirectory);
}

function getRecordBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(recordsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const result: RecordDTO = {
    slug: realSlug,
    content: content,
    title: data.title,
    categories: data.categories,
    cover_url: data.cover_url,
    date: data.date,
    description: data.description,
    media: data.media || [],
  };

  return result;
}

type QueryOptions = {
  limit?: number;
};

function getAllRecords(query: QueryOptions = {}) {
  const slugs = getRecordSlugs();
  const records = slugs
    .map((slug) => getRecordBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if (query.limit) {
    return records.slice(0, query.limit);
  }

  return records;
}

function getRecordsByCategory(categoryName: string) {
  const slugs = getRecordSlugs();
  const records = slugs
    .map((slug) => getRecordBySlug(slug))
    .filter((record) => record.categories.includes(categoryName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return records;
}

export { getAllRecords, getRecordBySlug, getRecordsByCategory };
