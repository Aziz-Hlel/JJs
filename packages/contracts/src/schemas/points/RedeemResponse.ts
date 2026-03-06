import type { OfferRedeemResponse } from '../offre/offerRedeemResponse';
import type { UserEarnQuoteResponse } from '../user/UserEarnQuoteResponse';

export type RedeemResponse = {
  success: true;
  user: UserEarnQuoteResponse;
  offer: OfferRedeemResponse;
};
