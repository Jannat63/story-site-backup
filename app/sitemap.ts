export default async function sitemap() {
  const res = await fetch(
    "https://opensheet.elk.sh/1ewUvwnlwo4nF2jw_vI11AXKDC6BblruO7tSvrMGY9Kw/Sheet1",
    { cache: "no-store" }
  );

  const stories = await res.json();

  const baseUrl = "https://ahsans-story.netlify.app";

  const storyUrls = stories
    .filter((s: any) => s.status === "published")
    .map((s: any) => ({
      url: `${baseUrl}/stories/${s.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...storyUrls,
  ];
}