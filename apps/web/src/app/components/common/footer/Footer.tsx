"use client";
import React from "react";
import {
  InfoGeneralData,
  LogoData,
  socialIconsData,
} from "@/app/hooks/data-general";
import LogoLink from "../logo/logoLink";
import Link from "next/link";
import SocialIcons from "../social/SocialIcons";
import LegalLinks from "./LegalLinks";
import ScrollToTopButton from "./ScrollToTopButton";
import Divider from "../divider/divider";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1a1a] text-[#f5e6d3] pt-16 pb-8 px-4 border-t border-[#b08243]/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* SECTION 1: LOGO & BRAND */}
       <div className="mb-10 transform transition-transform scale-150 hover:scale-135 origin-center">
  <LogoLink
    href={LogoData.hrefLogo}
    src={LogoData.urlLogo}
    alt={LogoData.altLogo}
    width={LogoData.widthLogo}
    height={LogoData.heightLogo}
  />
</div>

        {/* SECTION 2: INFOS & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center items-start mb-12">
          
          {/* Adresse */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[#b08243] uppercase tracking-[0.2em] text-sm font-bold mb-2">Localisation</h4>
            <p className="opacity-80 leading-relaxed italic">
              {InfoGeneralData.address}
              <br /> {InfoGeneralData.city} {InfoGeneralData.zip}
              <br /> {InfoGeneralData.largeCountry}
            </p>
          </div>

          {/* Contact Rapide */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[#b08243] uppercase tracking-[0.2em] text-sm font-bold mb-2">Reservations</h4>
            <Link href={`mailto:${InfoGeneralData.emailReservations}`} className="hover:text-[#b08243] transition-colors duration-300">
              {InfoGeneralData.emailReservations}
            </Link>
            <Link href={`tel:${InfoGeneralData.phone}`} className="hover:text-[#b08243] transition-colors duration-300">
              {InfoGeneralData.phoneLabel} {InfoGeneralData.phone}
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-[#b08243] uppercase tracking-[0.2em] text-sm font-bold mb-2">Suivez-nous</h4>
            <SocialIcons socials={socialIconsData} />
          </div>
        </div>

        {/* SECTION 3: SÉPARATEUR CELTIC */}
        <div className="w-full max-w-2xl mb-12">
           <Divider /> 
        </div>

        {/* SECTION 4: COPYRIGHT & LEGAL */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#b08243]/10 text-xs opacity-60">
          <div className="mb-4 md:mb-0">
            <p>{InfoGeneralData.copyright}</p>
          </div>
          
          <div className="flex gap-6">
            <LegalLinks />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;