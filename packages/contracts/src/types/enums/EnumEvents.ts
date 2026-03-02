export const EnumEvents = {
  BIRTHDAY: 'BIRTHDAY',
  ANNIVERSARY: 'ANNIVERSARY',
  DATE: 'DATE',
  CELEBRATION: 'CELEBRATION',
  BUSINESS: 'BUSINESS',
  OTHER: 'OTHER',
} as const;

export type EnumEvents = (typeof EnumEvents)[keyof typeof EnumEvents];
