export default async function sitemap() {
  const baseUrl = "https://ahsans-story.netlify.app";

  // Static routes
  const routes = ["", "/about", "/contact"];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Example dynamic posts (replace later)
  const posts = [
    { slug: "first-post" },
    { slug: "second-post" },
  ];

  const dynamicUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...dynamicUrls];
}