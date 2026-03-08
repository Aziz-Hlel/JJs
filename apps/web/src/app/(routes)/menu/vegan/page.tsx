"use client";

import SpecialOffersBlock from "@/app/blocks/special-offers/variants/specialoffers/specialOffers";
import SpecialOffersTwoBlock from "@/app/blocks/special-offers/variants/specialofferstwo/specialOffersTwo";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import menuItems from "@/app/hooks2/menuItems";

const VeganPage = () => {
  return (
    <main>
      <HeroInnerBlock
        title={"Menu Vegan"}
        image={""}
        altText={""}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Menu", link: "/menu2" },
          { id: 3, title: "Vegan", link: "/menu2/vegan" },
        ]}
      />
      <SpecialOffersBlock
        className="block md:hidden"
        items={menuItems.vegan.items}
      />
      <SpecialOffersTwoBlock
        className="hidden md:block"
        title={menuItems.vegan.title}
        items={menuItems.vegan.items}
      />
    </main>
  );
};

export default VeganPage;
