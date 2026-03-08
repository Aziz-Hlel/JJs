"use client";

import SpecialOffersBlock from "@/app/blocks/special-offers/variants/specialoffers/specialOffers";
import SpecialOffersTwoBlock from "@/app/blocks/special-offers/variants/specialofferstwo/specialOffersTwo";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import menuItems from "@/app/hooks2/menuItems";

const FoodPage = () => {
  return (
    <main>
      <HeroInnerBlock
        title={"Menu Food"}
        image={"/hero/gallery-15a.jpg"}
        altText={""}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Menu", link: "/menu2" },
          { id: 3, title: "Food", link: "/menu2/food" },
        ]}
      />

      <SpecialOffersTwoBlock
        className=""
        title={menuItems.food.title}
        items={menuItems.food.items}
      />
    </main>
  );
};

export default FoodPage;
