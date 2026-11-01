import "@/styles/globals.css";
import { Lato, Lexend_Deca, Urbanist } from "next/font/google";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

// Self-hosted at build time, so there are no render-blocking requests to
// fonts.googleapis.com. Variable fonts cover the weights the design uses.
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lato",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lexend",
});

const siteDescription =
  "Labib Kowsar's personal website. An electrical engineering student at UBCV, this site showcases his project portfolio, resumes, and a way to contact him.";

export const metadata = {
  metadataBase: new URL("https://labibkow.com"),
  title: {
    default: "Labib Kowsar",
    template: "%s | Labib Kowsar",
  },
  description: siteDescription,
  authors: [{ name: "Labib Kowsar" }],
  creator: "Labib Kowsar",
  manifest: "/fav/site.webmanifest",
  icons: {
    icon: [
      { url: "/fav/favicon.ico", sizes: "any" },
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/fav/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    siteName: "Labib Kowsar",
    url: "/",
    title: "Labib Kowsar",
    description: siteDescription,
    images: [
      {
        url: "/home/profile2.webp",
        width: 340,
        height: 340,
        alt: "Labib Kowsar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Labib Kowsar",
    description: siteDescription,
    images: ["/home/profile2.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11101b",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // Next 16 no longer forces instant scrolling on route changes; opt back
      // in so the global `scroll-behavior: smooth` does not animate navigations.
      data-scroll-behavior="smooth"
      className={`${urbanist.variable} ${lato.variable} ${lexendDeca.variable}`}
    >
      <body>
        <a href="#main" className="skipLink">
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        <a
          className="creditLink"
          href="https://www.flaticon.com/free-icons/camel"
          title="camel icons"
        >
          Camel icons created by Freepik - Flaticon
        </a>
      </body>
    </html>
  );
}
