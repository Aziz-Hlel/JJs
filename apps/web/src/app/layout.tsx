import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";

export const metadata: Metadata = {
  title: "JJ'S RESTAURANT ",
  // description: "Elegant Restaurant ",
  // keywords:
  //   "restaurant, food, menu, reservation, booking, restaurant template, restaurant website, restaurant website template, restaurant website design, restaurant website development, restaurant website builder, restaurant website creator, restaurant website generator, restaurant website maker, restaurant website editor, restaurant website designer, restaurant website developer, restaurant website builder, restaurant website creator, restaurant website generator, restaurant website maker, restaurant website editor, restaurant website designer, restaurant website developer",
  // authors: [{ name: "JJ'S", url: "https://jrstudio.com.co" }],
  // creator: "JRTemplate",
  // publisher: "JRTemplate",
  openGraph: {
    title: "JJ'S Irish Pub & Restaurant",
    description: "JJ'S Irish Pub & Restaurant",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
