"use client";

import SpecialOffersBlock from "@/app/blocks/special-offers/variants/specialoffers/specialOffers";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import kidsPage from "../drinks/page";
import SpecialOffersTwoBlock from "@/app/blocks/special-offers/variants/specialofferstwo/specialOffersTwo";
import menuItems from "@/app/hooks2/menuItems";

const KidsPage = () => {
  return (
    <main>
      <HeroInnerBlock
        title={"Menu Kids"}
        image={""}
        altText={""}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Menu", link: "/menu2" },
          { id: 3, title: "kids", link: "/menu2/kids" },
        ]}
      />
      <SpecialOffersBlock
        className="block md:hidden"
        items={menuItems.kids.items}
      />
      <SpecialOffersTwoBlock
        className="hidden md:block"
        title={menuItems.kids.title}
        items={menuItems.kids.items}
      />
    </main>
  );
};

export default KidsPage;
