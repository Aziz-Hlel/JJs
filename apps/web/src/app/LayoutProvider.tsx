"use client";

import { usePathname } from "next/navigation";
import { InfoGeneralData } from "./hooks/data-general";
import Header from "./components/common/header/Header";
import Topbar from "./components/common/topbar/Topbar";
import Footer from "./components/common/footer/Footer";
import Topbar2 from "./components/common/topbar/Topbar2";
import Header2 from "./components/common/header/Header2";
import { ScrollToTop } from "./hooks2/ScrollToTop";

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
