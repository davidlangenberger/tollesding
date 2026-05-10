import { AMAZON_ASSOCIATE_TAG } from "@/data/products";

export function hasAmazonAssociateTag() {
  return Boolean(AMAZON_ASSOCIATE_TAG && AMAZON_ASSOCIATE_TAG !== "TODO-DEINE-ID");
}

export function withAssociateTag(url: string) {
  if (!hasAmazonAssociateTag()) {
    return url;
  }

  const parsed = new URL(url);
  parsed.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return parsed.toString();
}
