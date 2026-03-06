import type { OfferStatus } from "@contracts/types/enums/enums";


const offerStatusTextMapping: Record<OfferStatus, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
};

export default offerStatusTextMapping;