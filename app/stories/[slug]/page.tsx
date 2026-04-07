import { notFound } from "next/navigation";
import Script from "next/script";
import AdditionalInfo from "@/components/AdditionalInfo";

async function getStories() {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1ewUvwnlwo4nF2jw_vI11AXKDC6BblruO7tSvrMGY9Kw/Sheet1",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch stories");
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Fetch failed:", error);
    return [];
  }
}

// ✅ Dynamic SEO
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
    twitter: {
      card: "summary_large_image",
      title: story.meta_title || story.title,
      description: story.meta_desc,
      images: [story.cover_url],
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

  // ❗ fallback UI
  if (!stories || stories.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Failed to load stories. Please try again later.
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
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-6">

      {/* ✅ STRUCTURED DATA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: story.meta_title || story.title,
            author: {
              "@type": "Person",
              name: "Ahsan Jannat",
            },
            description: story.meta_desc,
            image: story.cover_url,
            url: `https://ahsans-story.netlify.app/stories/${story.slug}`,
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>{story.meta_title || story.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {story.meta_title || story.title}
        </h1>

        {/* Image */}
        <div className="mb-6">
          <img
            src={story.cover_url}
            alt={story.meta_title || story.title}
            loading="eager"
            className="w-full max-h-[420px] object-cover rounded-2xl shadow"
          />
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-10 max-w-3xl">
          {story.meta_desc}
        </p>

        {/* Reader */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">📖 Read Online</h2>

            <a
              href={story.pdf_url}
              target="_blank"
              className="text-sm bg-black text-white px-4 py-2 rounded-lg"
            >
              Download PDF
            </a>
          </div>

          <div className="w-full h-[80vh] rounded-xl overflow-hidden border">
            <iframe
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              className="w-full h-full"
              allow="autoplay"
            />
          </div>
        </div>

        {/* About */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-xl font-semibold mb-2">About this story</h2>
          <p className="text-gray-600">{story.meta_desc}</p>
        </div>

        {/* Related */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">More Stories</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stories
              .filter((s: any) => s.slug !== story.slug)
              .slice(0, 3)
              .map((s: any, i: number) => (
                <a key={i} href={`/stories/${s.slug}`}>
                  <div className="bg-white p-3 rounded-xl shadow">
                    <img src={s.cover_url} className="rounded mb-2" />
                    <p className="text-sm font-medium">{s.title}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* Additional Info */}
        <AdditionalInfo />

      </div>
    </div>
  );
}

// helper
function extractFileId(url: string) {
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : "";
}