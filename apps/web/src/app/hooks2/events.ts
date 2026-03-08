import { EventResponse } from "../types/EventResponse";

export const event: EventResponse = {
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

export const event2: EventResponse = {
  id: "2",
  title: "Halloween Party",
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


export const eventsDemoData: EventResponse[] = [event, event2];