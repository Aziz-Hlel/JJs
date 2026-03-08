"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoLink from "@/app/components/common/logo/logoLink";
import { LogoData } from "@/app/hooks/data-general";
import { itemsNavbar } from "@/app/hooks/data-navbar";
import MenuToggleButton from "./MenuToggleButton";
import { cn } from "@/lib/utils";
import { useClickAway, useWindowScroll } from "@uidotdev/usehooks";
import MobileHeader from "./MobileHeader";

const STICKY_THRESHOLD = 100;

const Header2: React.FC = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [{ y: scrollY }] = useWindowScroll();
  const [previousYRef, setPreviousYRef] = useState(scrollY);
  const [headerHidden, setHeaderHidden] = useState(false);

  const half = Math.ceil(itemsNavbar.length / 2);
  const leftItems = itemsNavbar.slice(0, half);
  const rightItems = itemsNavbar.slice(half);

  useEffect(() => {
    if (
      scrollY &&
      previousYRef &&
      previousYRef < scrollY &&
      scrollY > STICKY_THRESHOLD
    ) {
      setHeaderHidden(true);
      setMenuVisibility(false);
    } else {
      setHeaderHidden(false);
    }
    setPreviousYRef(scrollY);
  }, [scrollY, previousYRef]);

  const bgTransparent = scrollY === null || scrollY < 20;
  const closeMobileMenu = () => setMenuVisibility(false);
  const ref = useClickAway<HTMLDivElement>(() => closeMobileMenu());

  // Style des liens minimisé
  const navLinkClass =
    "text-[#e7d8c3] hover:text-white text-[11px] lg:text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300";

  return (
    <div className="transition-all duration-300 ease-in-out" ref={ref}>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-500",
          headerHidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "px-6 transition-all duration-700 ease-in-out",
            // py-5 sur mobile pour donner de l'espace au logo qui descend
            bgTransparent
              ? "bg-transparent py-5 md:py-8"
              : "bg-black/95 backdrop-blur-md shadow-2xl py-4 md:py-5",
          )}
        >
          <div className="max-w-[1600px] mx-auto">
            {/* --- STRUCTURE DU HEADER --- */}
            <div className="relative flex items-center justify-between min-h-[50px] md:min-h-[80px]">
              {/* --- MOBILE : Bouton Menu (Largeur fixée à w-12 pour équilibrer) --- */}
              <div className="md:hidden z-30 w-12">
                <MenuToggleButton
                  isMobile={isMenuVisible}
                  onToggle={() => setMenuVisibility(!isMenuVisible)}
                />
              </div>

              {/* --- DESKTOP : Menu Gauche --- */}
              <nav className="hidden md:flex flex-1 justify-end pr-12 lg:pr-20">
                <ul className="flex items-center gap-6 lg:gap-10">
                  {leftItems.map((item) => (
                    <li key={item.title}>
                      <Link href={item.link} className={navLinkClass}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* --- LOGO CENTRAL (Parfaitement au milieu) --- */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="transform scale-90 md:scale-100 transition-transform">
                  <LogoLink
                    href={LogoData.hrefLogo}
                    src={LogoData.urlLogo}
                    alt={LogoData.altLogo}
                    scrollY={scrollY}
                  />
                </div>
              </div>

              {/* --- DESKTOP : Menu Droite --- */}
              <nav className="hidden md:flex flex-1 justify-start pl-12 lg:pl-20">
                <ul className="flex items-center gap-6 lg:gap-10">
                  {rightItems.map((item) => (
                    <li key={item.title}>
                      <Link href={item.link} className={navLinkClass}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="md:hidden w-12"></div>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out md:hidden",
                isMenuVisible
                  ? "max-h-screen opacity-100 pt-8"
                  : "max-h-0 opacity-0",
              )}
            >
              <MobileHeader handleLinkClick={closeMobileMenu} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
