import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";
import Footer from "./footer";
import Header from "./header";
import logo from "@/app/logo.png";

const hellix = localFont({
  src: [
    {
      path: "./fonts/Hellix-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Hellix-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Hellix-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hellix",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#DE4B99",
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  title: "WiseNest Africa | A Nest of Care, A Future of Hope ",
  description:
    "WiseNest Africa empowers teenage moms by providing education, healthcare, and the support they need for a future of dignity and independence.",
  keywords:
    "WiseNest Africa,WiseNest, teenage pregnancy in Africa, teenage moms, teenage pregnancy, support for teenage mothers, education for young mothers, healthcare for teenage moms, empowerment, financial independence, Africa, women empowerement",
  author: "Ayomide Wayne",
  openGraph: {
    title: "WiseNest Africa | A Nest of Care, A Future of Hope",
    description:
      "WiseNest Africa empowers teenage moms by providing education, healthcare, and the support they need for a future of dignity and independence.",
    url: "http://www.wisenestafrica.com/",
    siteName: "WiseNest Africa",
    locale: "en-US",
    type: "website",
    image: logo,
  },
  canonicalUrl: "http://www.wisenestafrica.com/",
  type: "website",
  charset: "UTF-8",

  // Additional metadata for SEO
  robots: "index, follow", // Ensures the website is indexed and followed by search engines
  verification: { google: "Qn-f2eEhSDcFgpvnF4ShbJ0ijK4CCKIzeIGzi70nk7c" },
  googleSiteVerification: "Qn-f2eEhSDcFgpvnF4ShbJ0ijK4CCKIzeIGzi70nk7c", // For verifying your site with Google Search Console
  bingSiteVerification: "your-bing-verification-code", // For verifying your site with Bing Webmaster Tools

  structuredData: {
    "@context": "https://schema.com",
    "@type": "Organization",
    name: "WiseNest Africa",
    url: "http://www.wisenestafrica.com/",
    logo: logo,
    description:
      "WiseNest Africa empowers teenage moms by providing care, education, and support to help them thrive.",
    sameAs: [
      "https://www.linkedin.com/company/wisenestafrica/",
      "https://www.instagram.com/wisenestafrica/",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hellix.className} antialiased`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
