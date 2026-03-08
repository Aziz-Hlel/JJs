"use client";

import { useComponentMounted } from "@/app/hooks2/useComponentMounted";
import { cn } from "@/lib/utils";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiClock, FiCalendar } from "react-icons/fi"; // icônes
import { DisplayedMedia, EventResponse } from "@/app/types/EventResponse";

const EventComp = () => {
  const mounted = useComponentMounted();

  const event: EventResponse = {
    id: "1",
    title: "Sample Event",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatum, fuga tenetur fugiat commodi delectus mollitia et doloremque autem asperiores iure vero tempora atque laboriosam magnam deleniti recusandae voluptate illo..",
    thumbnail: {
      id: "thumb1",
      url: "/ourImages/events/one/event1_1.jpg",
    },
    video: null,
    media: [
      {
        id: "media1",
        url: "/ourImages/events/one/event1_2.jpg",
      },
    ],
    type: "SPECIAL",
    startDate: "2024-07-01",
    endDate: "2024-07-01",
    startTime: "18:00",
    endTime: "21:00",
  };

  const event2: EventResponse = {
    id: "2",
    title: "Sample Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit eius voluptate, accusamus vitae fuga laboriosam aut error dolorum nemo officia praesentium aspernatur itaque soluta natus nam. Inventore, debitis quos!.",
    thumbnail: {
      id: "thumb2",
      url: "/ourImages/events/one/event2_2.jpg",
    },
    video: {
      id: "video1",
      url: "/ourImages/events/one/event2_1.mp4",
    },
    media: [
      {
        id: "media2",
        url: "/ourImages/events/one/event2_3.jpg",
      },
      {
        id: "media3",
        url: "/ourImages/events/one/event2_4.jpg",
      },
      {
        id: "media4",
        url: "/ourImages/events/one/event2_5.jpg",
      },
    ],
    type: "WEEKLY",
    dayOfWeek: 5,
    startTime: "19:00",
    endTime: "22:00",
  };

  const displayedMedia: DisplayedMedia = [
    ...(event2.video ? [{ ...event2.video, type: "video" as const }] : []),
    event2.thumbnail,
    ...(event2.media ?? []),
  ];

  const formattedDate = new Date(event2.startTime).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section
      className={cn(
        "min-h-screen bg-neutral-950 pt-36 pb-16 px-4 transition-opacity duration-700",
        mounted ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {/* MEDIA */}
          <div className="relative h-[26rem] lg:h-[40rem] bg-black">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              swipeable
              emulateTouch
              className="h-full"
            >
              {displayedMedia.map((media) => (
                <div
                  key={media.id}
                  className="flex h-full items-center justify-center bg-black"
                >
                  {media.type === "video" ? (
                    <video
                      src={media.url}
                      autoPlay
                      muted
                      loop
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt={event2.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </Carousel>

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-8 lg:p-12 text-white">
            {/* Badge ÉVÉNEMENT */}
            <span className="mb-2 w-fit rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium tracking-wide text-amber-400">
              ÉVÉNEMENT
            </span>

            {/* Date et heure */}
            <div className="mb-4 flex items-center gap-2 text-amber-300 text-sm font-medium">
              <FiCalendar />
              <span>{formattedDate}</span>
              <span>{"*In Bahrain Time"}</span>
            </div>

            {/* Titre */}
            <h2 className="mb-4 text-3xl lg:text-4xl font-semibold tracking-tight">
              {event2.title}
            </h2>

            {/* Description */}
            <p className="text-neutral-300 leading-relaxed max-w-xl">
              {event2.description}
            </p>

            {/* Bouton Réserver */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventComp;
