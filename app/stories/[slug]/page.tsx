import { notFound } from "next/navigation";
import Script from "next/script";
import AdditionalInfo from "@/components/AdditionalInfo";

async function getStories() {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1ewUvwnlwo4nF2jw_vI11AXKDC6BblruO7tSvrMGY9Kw/Sheet1",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch stories");

    return await res.json();
  } catch (error) {
    console.error("❌ Fetch failed:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const stories = await getStories();

  const story = stories.find(
    (s: any) =>
      s.slug &&
      slug &&
      s.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!story) return {};

  const url = `https://ahsans-story.netlify.app/stories/${story.slug}`;

  return {
    title: story.meta_title || story.title,
    description: story.meta_desc,
    alternates: { canonical: url },
    openGraph: {
      title: story.meta_title || story.title,
      description: story.meta_desc,
      url,
      images: [story.cover_url],
      type: "article",
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const stories = await getStories();

  if (!stories?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Failed to load stories.
      </div>
    );
  }

  const story = stories.find(
    (s: any) =>
      s.slug &&
      slug &&
      s.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!story) return notFound();

  const fileId = extractFileId(story.pdf_url);

  return (
    <div className="min-h-screen bg-[#f6f1e7]">

      {/* SCHEMA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: story.meta_title || story.title,
            author: { "@type": "Person", name: "Ahsan Jannat" },
            description: story.meta_desc,
            image: story.cover_url,
            url: `https://ahsans-story.netlify.app/stories/${story.slug}`,
          }),
        }}
      />

      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={story.cover_url}
          alt={story.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 text-white">
          <div className="text-sm mb-3 opacity-80">
            <a href="/">Home</a> / {story.title}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            {story.title}
          </h1>

          <p className="mt-3 text-sm opacity-90">
            By Ahsan Jannat
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 md:px-10 py-10">

        <p className="text-[#5c4d3a] mb-12 max-w-3xl leading-relaxed">
          {story.meta_desc}
        </p>

        {/* READER */}
        <div className="bg-[#fdfaf5] p-4 md:p-6 rounded-2xl shadow-md border border-[#e5dccb] mb-16">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-lg font-semibold text-[#3e2f1c]">
              📖 Read Online
            </h2>

            <div className="flex gap-2">

              <a
                href={story.pdf_url}
                target="_blank"
                className="text-sm bg-[#3e2f1c] text-white px-4 py-2 rounded-lg"
              >
                Download
              </a>

              <a
                href={`https://drive.google.com/file/d/${fileId}/preview`}
                target="_blank"
                className="text-sm border px-4 py-2 rounded-lg"
              >
                Fullscreen
              </a>

            </div>
          </div>

          {/* IFRAME READER */}
          <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-[#e5dccb] shadow-inner">
            <iframe
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              className="w-full h-full"
            />
          </div>

        </div>

        {/* ABOUT */}
        <div className="mb-16 max-w-3xl bg-[#f3ede3] p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-3 text-[#3e2f1c]">
            About this story
          </h2>
          <p className="text-[#5c4d3a] text-sm">
            {story.meta_desc}
          </p>
        </div>

        {/* RELATED */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-6 text-[#3e2f1c]">
            More Stories
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stories
              .filter((s: any) => s.slug !== story.slug)
              .slice(0, 3)
              .map((s: any, i: number) => (
                <a key={i} href={`/stories/${s.slug}`}>
                  <div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">
                    <img src={s.cover_url} className="rounded-lg mb-2" />
                    <p className="text-sm font-medium">{s.title}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <AdditionalInfo />
      </div>
    </div>
  );
}

function extractFileId(url: string) {
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : "";
}
