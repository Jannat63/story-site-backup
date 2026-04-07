"use client";

import { useState } from "react";

export default function SEOContent() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-4 pb-16">

      <button
  onClick={() => setOpen(!open)}
  className="mx-auto block border px-4 py-1.5 rounded-full text-sm bg-white hover:bg-gray-100 transition"
>
  {open ? "Show Less" : "Read More"}
</button>
      {open && (
        <div className="mt-4 bg-white p-6 rounded-xl shadow-sm text-gray-700 leading-relaxed space-y-6">

          {/* H1 */}
          <h1 className="text-3xl font-semibold text-gray-900">
            Best Story Collection Hub: Short Story, Love Story, Sad Story, Romantic Story & Bangla Story
          </h1>

          <p>
            Welcome to the ultimate destination for story lovers. If you are searching for a meaningful <strong>story</strong>, a quick <strong>short story</strong>, a heart-touching <strong>love story</strong>, an emotional <strong>sad story</strong>, or a beautifully written <strong>romantic story</strong> or <strong>Bangla story</strong>, you are in the right place.
          </p>

          <p>
            Stories are not just words—they are emotions, memories, and reflections of real life. Our goal is to provide high-quality, original, and engaging stories that connect deeply with readers and keep them coming back for more.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Stories Matter in Human Life
          </h2>

          <p>
            Storytelling has been part of human civilization for centuries. From ancient oral traditions to modern digital platforms, stories help us understand emotions, relationships, and life itself.
          </p>

          {/* H3 */}
          <h3 className="text-xl font-semibold text-gray-900">
            Emotional Connection Through Storytelling
          </h3>

          <p>
            A well-written story can make you smile, cry, or reflect on your own life. Whether it's a romantic story or a sad story, each carries a powerful emotional connection that resonates with readers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Stories as a Reflection of Reality
          </h3>

          <p>
            Most powerful stories are inspired by real-life experiences—love, heartbreak, family, dreams, and struggles. Especially in Bangla story literature, emotions are expressed in a deeply relatable way.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Short Story: Small but Powerful
          </h2>

          <p>
            A short story is perfect for readers who want meaningful content in a short time. Despite being brief, short stories often leave a lasting emotional impact.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            What Makes a Great Short Story?
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>Simple and clear storytelling</li>
            <li>Strong emotional impact</li>
            <li>Relatable characters</li>
            <li>Memorable ending</li>
          </ul>

          <p className="italic">
            Rahim waited every evening at the same bus stop. Not for a bus, but for someone who had stopped coming. One day, he realized—some people don’t leave suddenly, they fade into memories.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Love Story: The Beauty of Human Connection
          </h2>

          <p>
            A love story is one of the most popular forms of storytelling. It captures emotions, relationships, and the beauty of connection between two people.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Elements of a Powerful Love Story
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>Emotional depth</li>
            <li>Realistic characters</li>
            <li>Conflict and resolution</li>
            <li>Meaningful moments</li>
          </ul>

          <p className="italic">
            She loved rain. He hated getting wet. But one day, he stood beside her in the rain—not because he changed, but because she mattered more.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Sad Story: When Words Carry Pain
          </h2>

          <p>
            Sad stories reflect the reality of life. They help readers process emotions, understand pain, and build empathy.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Why Sad Stories Are Important
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>They help release emotions</li>
            <li>They create empathy</li>
            <li>They reflect real-life struggles</li>
          </ul>

          <p className="italic">
            She kept his last message unread—not because she didn’t want to read it, but because once she did, there would be nothing left to wait for.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Romantic Story: Expression of Love and Feelings
          </h2>

          <p>
            A romantic story is not just about love—it is about moments, feelings, and emotional connection expressed through actions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Key Features of Romantic Stories
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>Strong emotional chemistry</li>
            <li>Meaningful interactions</li>
            <li>Beautiful storytelling</li>
          </ul>

          <p className="italic">
            He didn’t say “I love you.” Instead, he remembered how she liked her tea—less sugar, more warmth.
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Bangla Story: Culture, Emotion & Tradition
          </h2>

          <p>
            Bangla story is deeply rooted in Bengali culture. These stories reflect emotions, traditions, and everyday life in a simple yet powerful way.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Why Bangla Stories Are Unique
          </h3>

          <ul className="list-disc pl-5 space-y-1">
            <li>Rich cultural background</li>
            <li>Deep emotional storytelling</li>
            <li>Simple but powerful language</li>
          </ul>

          <p className="italic">
            মা প্রতিদিন দরজার পাশে বসে থাকতেন। কারণ ছেলেটা বলেছিল—“একদিন আমি ফিরে আসবো।” বছর কেটে গেছে, তবুও মা অপেক্ষা করেন।
          </p>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Content Quality (EEAT Standard)
          </h2>

          <p>
            We follow Google’s EEAT guidelines to ensure high-quality content.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Experience:</strong> Real-life inspired storytelling</li>
            <li><strong>Expertise:</strong> Strong narrative techniques</li>
            <li><strong>Authoritativeness:</strong> Structured and meaningful content</li>
            <li><strong>Trustworthiness:</strong> Original and authentic writing</li>
          </ul>

          {/* H2 */}
          <h2 className="text-2xl font-semibold text-gray-900">
            SEO, AEO & GEO Optimization Strategy
          </h2>

          <p>
            This content is optimized for search engines, answer engines, and AI-based discovery systems.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Natural keyword placement</li>
            <li>Structured headings (H1–H3)</li>
            <li>Clear and readable format</li>
            <li>High engagement storytelling</li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-4">

            <div>
              <h3 className="font-medium text-gray-900">
                What is the best type of story to read?
              </h3>
              <p>
                It depends on your mood. Short stories are quick and engaging, while love and sad stories offer deeper emotional experiences.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                Why are Bangla stories so popular?
              </h3>
              <p>
                Bangla stories focus on real-life emotions, relationships, and cultural values, making them highly relatable.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                Are romantic stories different from love stories?
              </h3>
              <p>
                Yes, romantic stories focus more on emotional expression and moments, while love stories often include a complete relationship journey.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">
                Are sad stories good for readers?
              </h3>
              <p>
                Yes, sad stories help release emotions and build empathy, making them an important part of storytelling.
              </p>
            </div>

          </div>

          <p className="pt-4 font-semibold text-gray-900">
            Stories are not just for reading—they are for feeling. Explore different types of stories and discover emotions that words can express better than anything else.
          </p>

        </div>
      )}
    </section>
  );
}