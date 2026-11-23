export type EventType = {
  title: string;
  description?: string;
  images: string[];
  day: string;
  time?: string;
  timeDescription?: string;
};

export const eventsList: EventType[] = [
  {
    day: 'Everyday',
    title: 'Happy Hour',
    time: '12:00 – 19:00 ',
    timeDescription: '(Sundays All Day)',
    images: ['/events/v2/Happy-Hour/JJ_s_Feb 2026_Ramadan_Happy Hour.jpg'],
  },
  {
    day: 'Monday',
    title: 'Karaoke Night ',
    description: '(Microphone Madness)',
    images: [
      '/events/v2/Microphone-Madness/JJ_s_Mar 2026_Mic Mad_V1.jpg',
      '/events/v2/Microphone-Madness/JJ_s_May 2026_Mic Mad2.jpg',
    ],
  },
  {
    day: 'Tuesday',
    title: 'Ladies’ Night ',
    description: '(JJ’s Angels)',
    images: ['/events/v2/JJ_s-Angels/JJ_s_Sept 2026_Angels.jpg', '/events/v2/JJ_s-Angels/JJ_s_Sept 2026_Angels2.jpg'],
  },
  {
    day: 'Wednesday',
    title: 'Fuego Latino at the Teres',
    images: [
      '/events/v2/Fuego-Latino/JJ_s_Aug 2026_Lineup_8-8.jpg',
      '/events/v2/Fuego-Latino/JJ_s_Oct 2026_Weekly Lineup_8-8.jpg',
    ],
  },
  {
    day: 'Thursday',
    title: 'BOGO ',
    description: '(Buy One Get One)',
    time: '17:00 – 20:00',
    images: [
      '/events/v2/Thirsty-Thursdays/JJ_s_Aug 2026_Thirsty.jpg',
      '/events/v2/Thirsty-Thursdays/JJ_s_Sept 2026_Thisty Thursdays.jpg',
      '/events/v2/Thirsty-Thursdays/JJ_s_Feb 2026_Thirsty_Post.jpg',
      '/events/v2/Thirsty-Thursdays/JJ_s_Jan 2026_Thirsty_Post.jpg',
    ],
  },
  {
    day: 'Friday',
    title: 'Brunch/Drunch',
    time: '12:00 – 17:00 ',
    timeDescription: '(Extended to 20:00)',
    images: [
      '/events/v2/Lucky-Fridaze/JJ_s_Aug 2026_Fridaze.jpg',
      '/events/v2/Lucky-Fridaze/JJ_s_Sept 2026_Fridaze.jpg',
    ],
  },
  {
    day: 'Friday',
    title: 'Lucky Friday ',
    description: '(50% Discount on All Food & Beverage)',
    time: '12:00 – 19:00',
    images: ['/events/v2/Lucky-Fridaze/JJ_s_Feb 2026_Lucky Fridaze.jpg'],
  },
  {
    day: 'Sunday',
    title: 'Jam Night ',
    description: '(Guest Musicians Join In)',
    time: 'From 20:00',
    images: [
      '/events/v2/Jammin_/JJ_s_Apr 2026_Jammin__Post_V2.jpg',
      '/events/v2/Jammin_/JJ_s_Oct 2026_Weekly Lineup_2-8.jpg',
    ],
  },
];
