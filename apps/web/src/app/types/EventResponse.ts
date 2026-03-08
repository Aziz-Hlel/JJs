type BaseEvent = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    id: string;
    url: string;
  };
  media:
    | {
        id: string;
        url: string;
      }[]
    | null;
  video: {
    id: string;
    url: string;
  } | null;
};

type WeeklyEvent = {
  type: "WEEKLY";
  dayOfWeek: number;
  startTime: string;
  endTime: string | null;
};

type SpecialEvent = {
  type: "SPECIAL";
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string | null;
};

export type EventResponse = BaseEvent & (WeeklyEvent | SpecialEvent);


export type DisplayedMedia = {
  id: string;
  url: string;
  type?: "video";
}[];