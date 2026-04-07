
import SEOContent from "../components/SEOContent";
<link rel="icon" type="image/svg" sizes="16x16" href="/favicon_16.svg"></link>

async function getStories() {
  const res = await fetch(
    "https://opensheet.elk.sh/1ewUvwnlwo4nF2jw_vI11AXKDC6BblruO7tSvrMGY9Kw/Sheet1",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Home() {
  const stories = await getStories();

  const published =
    stories?.filter((s: any) => s.status === "published") || [];

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-white border-b md:border-r p-4 md:p-6 flex md:flex-col justify-between md:min-h-screen">

        {/* TOP SECTION */}
        <div>

          {/* LOGO */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-lg md:text-xl font-bold tracking-tight">
              Ahsan's E-Book
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Bangla Story Library
            </p>
          </div>

          {/* NAV */}
          <nav className="flex md:flex-col gap-2 md:space-y-3 text-sm overflow-x-auto">

            <a className="whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white">
              Home
            </a>

            <a
              href="/about"
              className="whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              About
            </a>

            <a
              href="/help"
              className="whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Help
            </a>

          </nav>

        </div>

        {/* BOTTOM SECTION */}
        <div className="hidden md:block border-t pt-6">

          <div className="flex items-center gap-3 mb-4">
            <img
              src="/author.webp"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">
                Ahsan Jannat
              </p>
              <p className="text-xs text-gray-500">
                Story Writer
              </p>
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-1 mb-4">
            <a href="/about" className="block hover:text-black">About</a>
            <a href="/help" className="block hover:text-black">Help</a>
          </div>

          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} Ahsan's Story
          </p>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">

          <input
            type="text"
            placeholder="Search books..."
            className="w-full sm:max-w-md border p-3 rounded-xl bg-white"
          />

        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-6 md:mb-8 text-sm overflow-x-auto">
          <button className="whitespace-nowrap bg-black text-white px-4 py-1 rounded-full">
            Popular
          </button>
          <button className="whitespace-nowrap bg-gray-200 px-4 py-1 rounded-full">
            New
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

          {/* BOOK GRID */}
          <div className="flex-1">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

              {published.map((story: any, i: number) => (
                <a
                  key={i}
                  href={`/stories/${story.slug}`}
                  className="group"
                >
                  <div className="bg-white p-3 rounded-2xl shadow hover:shadow-xl transition">

                    <div className="aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={story.cover_url}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div className="mt-3">

                      {(() => {
                        const title =
                          story.title ||
                          story.Title ||
                          story.meta_title ||
                          "Untitled Story";

                        const desc =
                          story.meta_desc ||
                          story["Meta Description"] ||
                          story.description ||
                          "No description available";

                        return (
                          <>
                            <h3 className="text-sm font-semibold line-clamp-2">
                              {title}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {desc}
                            </p>
                          </>
                        );
                      })()}

                    </div>

                  </div>
                </a>
              ))}

            </div>

          </div>

          {/* AUTHOR CARD */}
          <div className="w-full lg:w-72 hidden lg:block">

            <div className="bg-white p-6 rounded-2xl shadow">

              <h3 className="text-sm font-semibold mb-4">
                Author
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/author.webp"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">
                    Ahsan Jannat
                  </p>
                  <p className="text-xs text-gray-500">
                    Bangla Story Writer
                  </p>
                </div>
              </div>

              <a
                href="/about"
                className="block text-center bg-black text-white py-2 rounded-lg"
              >
                View Profile
              </a>

            </div>

          </div>

        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 md:mt-20">
          <SEOContent />
        </div>

      </div>

    </main>
  );
}