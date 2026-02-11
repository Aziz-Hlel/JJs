import type { OfferStatus } from "@contracts/types/enums/enums";


const offerStatusTextMapping: Record<OfferStatus, string> = {
  ACTIVE: 'Active',
  EXPIRED: 'Expired',
  DELETED: 'Deleted',
  INACTIVE: 'Inactive',
};

export default offerStatusTextMapping;