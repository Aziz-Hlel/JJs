export const EnumSpaces = {
  SPORTS: 'SPORTS',
  WHISKEY: 'WHISKEY',
  MAIN: 'MAIN',
  VIP: 'VIP',
} as const;

export type EnumSpaces = (typeof EnumSpaces)[keyof typeof EnumSpaces];
