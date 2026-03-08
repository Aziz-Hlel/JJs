import Link from "next/link";
import { memo } from "react";
import { CtaProps } from "@/app/types/common.types";

const CtaOne = ({
  title,
  description,
  link,
  linkText,
  className,
}: CtaProps) => {
  return (
    <div
      className={`cta relative h-screen w-full flex items-center justify-center ${className || ""}`}
    >
      {/* Background/Overlay layer */}
      <div className="cta__overlayer absolute inset-0 z-0"></div>

      <div className="cta__container relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="cta__content max-w-2xl">
          {/* Title: Hidden on mobile, visible on MD+ */}
          <div className="cta__header hidden md:block mb-6">
            <h2 className="text-3xl md:text-5xl text-white">{title}</h2>
          </div>

          {/* Description */}
          <div className="cta__body mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-white">
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="cta__footer">
            <Link
              href={link || "#"}
              className="btn btn__default inline-block border border-[#C5A059] px-8 py-3 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaOne.displayName = "CtaOne";
export default memo(CtaOne);
