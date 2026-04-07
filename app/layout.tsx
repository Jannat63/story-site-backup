import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ahsan's E-Book | Bangla Story Library",
  description:
    "Read and download free Bangla story books including love, sad, and romantic stories.",

  verification: {
    google: "pC5ifp-SvCoNRqB2kPePKkuRSUOM6y_A-PGenzoopgs",
  },

  openGraph: {
    title: "Ahsan's E-Book",
    description:
      "Free Bangla story books library with emotional and romantic stories.",
    url: "https://ahsans-story.netlify.app/",
    siteName: "Ahsan's Story",
    images: [
      {
        url: "https://ahsans-story.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahsan's E-Book",
    description: "Free Bangla story books library",
    images: ["https://ahsans-story.netlify.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind */}
      </head>

      <body className={`${inter.variable} ${playfair.variable} bg-gray-100 text-gray-900 text-base md:text-lg`}>
        {children}

        {/* Cloudinary */}
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}