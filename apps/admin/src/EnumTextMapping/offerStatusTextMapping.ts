import type { OfferStatus } from "@repo/contracts/types/enums/enums";


const offerStatusTextMapping: Record<OfferStatus, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
};

export default offerStatusTextMapping;