export const metadata = {
  title: "Help - Bangla Story Books",
  description:
    "Learn how to use this platform, read Bangla story books, and solve common issues.",
};

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#f3ede3] border-b md:border-r p-4 md:p-6 flex md:flex-col justify-between md:min-h-screen">

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-10 text-[#3e2f1c]">
            Ahsan's E-Book
          </h2>

          <nav className="flex md:flex-col gap-2 md:space-y-3 text-sm overflow-x-auto">

            <a href="/" className="whitespace-nowrap px-3 py-2 rounded-lg text-[#5c4d3a] hover:bg-[#e8dfcf] transition">
              Home
            </a>

            <a href="/about" className="whitespace-nowrap px-3 py-2 rounded-lg text-[#5c4d3a] hover:bg-[#e8dfcf] transition">
              About
            </a>

            <a className="whitespace-nowrap px-3 py-2 rounded-lg bg-[#3e2f1c] text-white shadow-sm">
              Help
            </a>

          </nav>
        </div>

        <div className="hidden md:block border-t border-[#e5dccb] pt-6">
          <div className="flex items-center gap-3">
            <img src="/author.webp" className="w-10 h-10 rounded-full shadow-sm" />
            <div>
              <p className="text-sm font-semibold text-[#3e2f1c]">Ahsan Jannat</p>
              <p className="text-xs text-[#7a6a55]">Story Writer</p>
            </div>
          </div>

          <p className="text-xs text-[#a08f78] mt-4">
            © {new Date().getFullYear()} Ahsan's Story
          </p>
        </div>

      </aside>

      {/* CONTENT */}
      <div className="flex-1 px-4 sm:px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#3e2f1c]">
            Help & Support
          </h1>

          {/* INTRO CARD */}
          <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#e5dccb] mb-6 md:mb-8">
            <p className="text-[#5c4d3a] leading-relaxed text-sm sm:text-base">
              This platform provides free Bangla story books in PDF format.
              You can easily browse, read, and download stories anytime.
              If you face any issue, this guide will help you solve it quickly.
            </p>
          </section>

          {/* HOW TO USE */}
          <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#e5dccb] mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#3e2f1c]">
              📖 How to Use This Website
            </h2>

            <ul className="space-y-2 text-[#5c4d3a] text-sm">
              <li>1. Browse books from the homepage</li>
              <li>2. Click on any book cover</li>
              <li>3. The PDF will open in a new tab</li>
              <li>4. Read online or download</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#e5dccb] mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#3e2f1c]">
              ❓ Frequently Asked Questions
            </h2>

            <div className="space-y-5 text-sm">

              <div>
                <p className="font-semibold text-[#3e2f1c]">How can I read a story?</p>
                <p className="text-[#5c4d3a] mt-1">
                  Click on any book and the PDF will open in a new tab.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#3e2f1c]">Are all books free?</p>
                <p className="text-[#5c4d3a] mt-1">
                  Yes, all stories are completely free to read and download.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#3e2f1c]">Why is the PDF not opening?</p>
                <p className="text-[#5c4d3a] mt-1">
                  Make sure your internet connection is stable and the link is accessible.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#3e2f1c]">Can I download the stories?</p>
                <p className="text-[#5c4d3a] mt-1">
                  Yes, you can download directly from the PDF viewer.
                </p>
              </div>

            </div>
          </section>

          {/* COMMON ISSUES */}
          <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#e5dccb] mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#3e2f1c]">
              ⚠️ Common Issues & Solutions
            </h2>

            <ul className="space-y-2 text-[#5c4d3a] text-sm">
              <li>• PDF not loading → Refresh page or try another browser</li>
              <li>• Blank screen → Check internet connection</li>
              <li>• Link not working → Try opening in a new tab</li>
            </ul>
          </section>

          {/* CONTACT */}
          <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#e5dccb]">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#3e2f1c]">
              📬 Contact Support
            </h2>

            <p className="text-[#5c4d3a] text-sm">
              Email: <span className="font-medium">ajbmix14@gmail.com</span>
            </p>
          </section>

        </div>
      </div>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I read a story?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Click on any book and the PDF will open in a new tab.",
                },
              },
              {
                "@type": "Question",
                name: "Are all books free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all stories are completely free.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the PDF not opening?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check your internet connection and try again.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}
