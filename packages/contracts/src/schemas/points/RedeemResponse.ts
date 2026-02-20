import { OfferRedeemResponse } from '../offre/offerRedeemResponse';
import { UserEarnQuoteResponse } from '../user/UserEarnQuoteResponse';

export type RedeemResponse = {
  success: true;
  user: UserEarnQuoteResponse;
  offer: OfferRedeemResponse;
};
