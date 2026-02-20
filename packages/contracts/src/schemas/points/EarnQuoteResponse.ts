import { UserEarnQuoteResponse } from '../user/UserEarnQuoteResponse';

export type EarnQuoteResponse = {
  points: number;
  user: UserEarnQuoteResponse;
};
