/* eslint-disable @next/next/no-img-element */
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/app/components/ui/draggable-card";
import React from "react";

const GalleryComp = () => {
  const items = [
    // {
    //   title: "...",
    //   image: "/ourImages/gallery/gallery_10.jpg",
    //   className: "absolute top-[15%] lg:top-[20%] lg:left-[20%] rotate-[-5deg]",
    // },
    // {
    //   title: "...",
    //   image: "/ourImages/gallery/gallery_9.jpg",
    //   className: "absolute top-[15%] lg:top-[20%] lg:left-[25%] rotate-[-7deg]",
    // },
    // {
    //   title: "...",
    //   image: "/ourImages/gallery/gallery_7.jpg",
    //   className: "absolute top-[15%] lg:top-[20%] lg:left-[55%] rotate-[10deg]",
    // },
    {
      title: "JJ's Anniversary",
      image: "/ourImages/gallery/gallery_6.jpg",
      className: "absolute top-[15%] lg:top-[20%] right-[35%] rotate-[2deg]",
    },
    {
      title: "NBA Finals",
      image: "/ourImages/gallery/gallery_5.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[45%] rotate-[-7deg]",
    },
    {
      title: "NYE 2026",
      image: "/ourImages/gallery/gallery_4.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[30%] rotate-[4deg]",
    },
    {
      title: "Karaoke Night",
      image: "/ourImages/gallery/gallery_3.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[30%] rotate-[4deg]",
    },
    {
      title: "Ladies Night",
      image: "/ourImages/gallery/gallery_8.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[40%] rotate-[8deg]",
    },
    {
      title: "Guinness Competition",
      image: "/ourImages/gallery/gallery_2.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[30%] rotate-[4deg]",
    },
    {
      title: "Our Album",
      image: "/ourImages/gallery/gallery_1.jpg",
      className: "absolute top-[15%] lg:top-[20%] lg:left-[40%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip h-[calc(100vh+10rem)] bg-background ">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        All the cards are gone... are you ready to make your own? Join us and
        make memories!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default GalleryComp;
