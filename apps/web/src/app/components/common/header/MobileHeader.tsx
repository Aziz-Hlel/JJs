"use client";

import { itemsNavbar } from "@/app/hooks/data-navbar";
import MenuMobileChips from "./MenuMobileChips";
import { useState } from "react";

const MobileHeader = ({ handleLinkClick }: { handleLinkClick: () => void }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigation = (link: string) => {
    setCurrentPage(link);
    handleLinkClick();
  };
  return (
    <div
      className=" flex w-full justify-start space-x-2 overflow-x-scroll scroll-m-4 pb-4 "
      style={{
        scrollbarColor: "-moz-initial",
        scrollbarWidth: "thin",
      }}
    >
      {itemsNavbar.map((item, index) => (
        <MenuMobileChips
          key={item.title}
          title={item.title}
          link={item.link}
          separator={index !== itemsNavbar.length - 1}
          onClick={handleNavigation}
          clover={item.link === currentPage}
        />
      ))}
    </div>
  );
};
export default MobileHeader;
