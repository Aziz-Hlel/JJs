import { useWindowScroll } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const [_, scrollTo] = useWindowScroll();
  const pathname = usePathname();

  useEffect(() => {
    scrollTo({ top: 0, left: 0 });
  }, [pathname, scrollTo]);

  return null;
}
