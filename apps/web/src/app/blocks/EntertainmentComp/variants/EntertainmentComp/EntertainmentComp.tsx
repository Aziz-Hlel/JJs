import Link from "next/link";
import { memo } from "react";

// interface
import { CtaProps } from "@/app/types/common.types";

const EntertainmentComp = ({
  title,
  description,
  link,
  linkText,
  className,
}: CtaProps) => {
  return (
    <div className={`cta relative h-screen md:h-auto ${className || ""}`}>
      <div className="cta__overlayer"></div>

      {/* Container modifié pour pousser le contenu vers le bas sur mobile */}
      <div className="cta__container flex flex-col justify-end md:justify-center h-full pb-10 md:pb-0">
        <div className="cta__content text-center px-4">
          {/* Titre caché en mobile pour libérer de l'espace visuel */}
          <div className="cta__header hidden md:block">
            <h2 className="text-3xl md:text-5xl mb-6">{title}</h2>
          </div>

          {/* Description : On ajoute une marge haute sur mobile pour "descendre" le bloc */}
          <div className="cta__body mt-auto md:mt-0 mb-6">
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white">
              {description}
            </p>
          </div>

          {/* Pied de page avec le bouton */}
          <div className="cta__footer pb-4">
            <Link
              href={link || "#"}
              className="btn btn__default inline-block border border-[#C5A059] px-8 py-3 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

EntertainmentComp.displayName = "EntertainmentComp";
export default memo(EntertainmentComp);
