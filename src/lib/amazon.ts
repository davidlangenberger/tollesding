import { AMAZON_ASSOCIATE_TAG } from "@/data/products";

export function withAssociateTag(url: string) {
  if (!AMAZON_ASSOCIATE_TAG || AMAZON_ASSOCIATE_TAG === "TODO-DEINE-ID") {
    return url;
  }

  const parsed = new URL(url);
  parsed.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return parsed.toString();
}
