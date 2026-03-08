"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DividerProps } from "@/app/types/common.types";

/**
 * Divider composé d'une série d'images "celtic.png" alignées avec effet dégradé.
 */
const Divider: React.FC<DividerProps> = ({ className }) => {
  // Liste pour générer les 7 logos (index 3 est le centre)
  const items = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full my-8 gap-2 md:gap-4",
        className,
      )}
    >
      {items.map((index) => {
        const isCenter = index === 3;
        // Calcul de la distance par rapport au centre (0 au centre, 3 aux extrémités)
        const distanceFromCenter = Math.abs(index - 3);

        // Calcul de l'opacité : 1 au centre, dégressif vers les bords
        const opacity = 1 - distanceFromCenter * 0.2;

        // Calcul de la taille : 28px au centre, dégressif vers les bords
        const size = 28 - distanceFromCenter * 4;

        // Calcul de l'intensité de l'ombre lumineuse
        const glowIntensity = 6 - distanceFromCenter * 1.5;
        const glowOpacity = 0.8 - distanceFromCenter * 0.15;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="flex items-center justify-center"
          >
            <img
              src="/services/celtic.png"
              alt="Celtic Logo"
              style={{
                width: `${size}px`,
                height: "auto",
                filter: `drop-shadow(0 0 ${glowIntensity}px rgba(176, 130, 67, ${glowOpacity}))`,
                opacity: opacity,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Divider;
