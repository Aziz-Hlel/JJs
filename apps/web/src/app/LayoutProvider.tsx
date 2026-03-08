"use client";

import { usePathname } from "next/navigation";
import Footer from "./components/common/footer/Footer";
import Header2 from "./components/common/header/Header2";
import { ScrollToTop } from "./hooks2/ScrollToTop";
import { Toaster } from "@/components/ui/sonner"

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideOnRoutes = ["/coming-soon"];
  const shouldHideHeaderFooter = hideOnRoutes.includes(pathname);

  return (
    <>
      <ScrollToTop />
      <Toaster />
      {!shouldHideHeaderFooter && (
        <>
          <Header2 />
        </>
      )}
      <main>{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
