import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/conference", changeFrequency: "yearly", priority: 0.6 },
  { path: "/database-design-tutoring", changeFrequency: "yearly", priority: 0.4 },
  { path: "/honor-student", changeFrequency: "yearly", priority: 0.5 },
  { path: "/icccm", changeFrequency: "yearly", priority: 0.6 },
  { path: "/ive", changeFrequency: "yearly", priority: 0.3 },
  { path: "/llama-marketing-system", changeFrequency: "yearly", priority: 0.7 },
  { path: "/student-association", changeFrequency: "yearly", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
