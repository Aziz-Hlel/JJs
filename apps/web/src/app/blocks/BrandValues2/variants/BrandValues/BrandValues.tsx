"use client";

import BlockTitle from "@/app/components/common/block-title/block-title";
import ServiceCard from "../../ServiceCard";

// interface
import { Alignment, ServicesListProps } from "@/app/types/common.types";
import BlockTitle2 from "@/app/components/common/block-title/block-title2";

const BrandValues = ({
  items,
  emptyMessage = "No services available at the moment.",
}: ServicesListProps) => {
  // Improved data validation check
  if (!items || items.length === 0) {
    return (
      <div className="services-ilustrations services-ilustrations--empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }
  return (
    <div className="services-ilustrations bg-[#F9F3EB]">
      <BlockTitle2
        subtitle={"What defines us"}
        title={"BRAND VALUES"}
        phrase={"Core values shaping our identity, culture, and vision."}
        align={"center" as Alignment}
        divider={true}
      />
      <div className="services-ilustrations__container">
        <div className="services-ilustrations__content">
          {items.map((item) => (
            <ServiceCard
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image || ""}
              image_hover={item.image_hover || ""}
              description={item.description}
              link_url={item.link_url || ""}
              link_text={item.link_text || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandValues;
