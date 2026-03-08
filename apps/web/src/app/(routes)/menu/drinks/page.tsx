"use client";

import { SpecialOffersTwoBlock } from "@/app/blocks/special-offers";
import SpecialOffersBlock from "@/app/blocks/special-offers/variants/specialoffers/specialOffers";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import menuItems from "@/app/hooks2/menuItems";

const DrinkPage = () => {
  return (
    <main>
      <HeroInnerBlock
        title={"Menu Drinks"}
        image={""}
        altText={""}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Menu", link: "/menu2" },
          { id: 3, title: "Drinks", link: "/menu2/drinks" },
        ]}
      />
      <SpecialOffersBlock
        className=" block md:hidden"
        items={menuItems.drinks.items}
      />
      <SpecialOffersTwoBlock
        className="hidden md:block"
        title={menuItems.drinks.title}
        items={menuItems.drinks.items}
      />
    </main>
  );
};

export default DrinkPage;
