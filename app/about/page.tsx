"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#f3ede3] border-b md:border-r p-4 md:p-6 flex md:flex-col justify-between md:min-h-screen">

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-10 text-[#3e2f1c]">
            Ahsan's E-Book
          </h2>

          <nav className="flex md:flex-col gap-2 md:space-y-3 text-sm overflow-x-auto">

            <a
              href="/"
              className="whitespace-nowrap px-3 py-2 rounded-lg text-[#5c4d3a] hover:bg-[#e8dfcf] transition"
            >
              Home
            </a>

            <a className="whitespace-nowrap px-3 py-2 rounded-lg bg-[#3e2f1c] text-white shadow-sm">
              About
            </a>

            <a
              href="/help"
              className="whitespace-nowrap px-3 py-2 rounded-lg text-[#5c4d3a] hover:bg-[#e8dfcf] transition"
            >
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

          {/* HERO */}
          <section className="bg-white rounded-2xl shadow-sm border border-[#e5dccb] p-6 sm:p-8 md:p-10 text-center">

            <img
              src="/author.webp"
              alt="Ahsan Jannat Bangla Story Writer"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full object-cover shadow-lg border mb-6"
            />

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3e2f1c] leading-snug">
              Ahsan Jannat – Bangla Story Writer & Emotional Storytelling Expert
            </h1>

            <p className="text-[#7a6a55] mt-3 text-sm sm:text-base">
              Creating meaningful Bangla stories based on real-life emotions,
              relationships, and human experiences.
            </p>

            {/* TAGS */}
            <div className="flex gap-2 sm:gap-3 mt-5 text-xs flex-wrap justify-center">
              <span className="bg-[#f3ede3] px-3 py-1 rounded-full text-[#5c4d3a]">Love Stories</span>
              <span className="bg-[#f3ede3] px-3 py-1 rounded-full text-[#5c4d3a]">Sad Stories</span>
              <span className="bg-[#f3ede3] px-3 py-1 rounded-full text-[#5c4d3a]">Romantic Stories</span>
              <span className="bg-[#f3ede3] px-3 py-1 rounded-full text-[#5c4d3a]">Bangla Story</span>
            </div>

            <p className="text-[#5c4d3a] mt-6 text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed">
              I am a passionate Bangla story writer who focuses on emotional storytelling.
              My work is inspired by real-life situations, relationships, and human psychology.
              Through my stories, I aim to connect deeply with readers and bring meaningful
              emotions into words.
            </p>

            {/* CONTACT */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mt-6 text-sm text-[#5c4d3a]">
              <a
                href="https://www.linkedin.com/in/ahsan-jannat/"
                target="_blank"
                className="hover:text-blue-600"
              >
                🔗 LinkedIn
              </a>
              <span>📧 ajbmix14@gmail.com</span>
            </div>

          </section>

          {/* DIVIDER */}
          <div className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-[#d6c7a8] to-transparent"></div>

          {/* ABOUT PLATFORM */}
          <section className="mt-12 md:mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#3e2f1c]">
              About This Platform
            </h2>

            <p className="text-[#5c4d3a] leading-relaxed text-sm sm:text-base">
              This platform is dedicated to providing high-quality Bangla stories including
              love story, sad story, romantic story, and short story collections. Readers can
              explore emotional and meaningful stories that reflect real-life experiences and
              cultural values.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section className="mt-12 md:mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#3e2f1c]">
              Writing Experience & Expertise
            </h2>

            <p className="text-[#5c4d3a] leading-relaxed text-sm sm:text-base">
              With a strong passion for storytelling, I have developed a writing style that
              focuses on emotional depth, realism, and relatability.
            </p>

            <ul className="list-disc pl-5 mt-4 text-[#5c4d3a] space-y-2 text-sm sm:text-base">
              <li>Real-life inspired storytelling</li>
              <li>Focus on human emotions and relationships</li>
              <li>Simple yet powerful narrative style</li>
              <li>Reader-focused content experience</li>
            </ul>
          </section>

          {/* CARDS */}
          <section className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            <div className="bg-white rounded-xl border border-[#e5dccb] p-5 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-[#3e2f1c]">✍️ Writing Focus</h3>

              <ul className="text-[#5c4d3a] space-y-2 text-sm">
                <li>Love Story</li>
                <li>Sad Story</li>
                <li>Romantic Story</li>
                <li>Bangla Story</li>
                <li>Short Story</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-[#e5dccb] p-5 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-[#3e2f1c]">📬 Contact</h3>

              <p className="text-sm text-[#5c4d3a]">Email: ajbmix14@gmail.com</p>

              <a
                href="https://www.linkedin.com/in/ahsan-jannat/"
                target="_blank"
                className="text-blue-600 text-sm"
              >
                LinkedIn Profile
              </a>
            </div>

          </section>

        </div>

      </div>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahsan Jannat",
              jobTitle: "Bangla Story Writer",
            },
          ]),
        }}
      />

    </main>
  );
}
