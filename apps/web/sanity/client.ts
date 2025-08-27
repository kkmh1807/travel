import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1v6i1rxt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
