import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/app/types/common.types";

const IllustrationsCard = ({
  id,
  title,
  image,
  image_hover,
  description,
  link_url,
  link_text,
}: ServiceItem) => {
  return (
    <div className="services-ilustrations__card hover:bg-secondary group">
      {image && image_hover && (
        <div className="services-ilustrations__card-ilustration">
          <Image src={image} alt={title} width="120" height="120" />
          <Image
            className="hover"
            src={image_hover}
            alt={title}
            width="120"
            height="120"
          />
        </div>
      )}
      <div className="services-ilustrations__card-info">
        <h4>{title}</h4>
        <p className=" group-hover:text-black transition-colors ">{description}</p>
        {/* Link */}
        {link_url && link_text && (
          <div className="btn btn__link2 hover:text-black">
            {link_text}
          </div>
        )}
        {/* / Link */}
      </div>
    </div>
  );
};

export default IllustrationsCard;
