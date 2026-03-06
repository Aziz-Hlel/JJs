import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { Page } from '@contracts/types/page/Page';
import type { OfferRowResponse } from '@contracts/schemas/offre/OfferRowResponse';
import type { CreateOfferRequest } from '@contracts/schemas/offre/createOfferRequest';
import type { UpdateOfferRequest } from '@contracts/schemas/offre/updateOfferRequest';

const offerService = {
  getPage: async (queryParams: { [k: string]: string | number | Array<string> }): Promise<Page<OfferRowResponse>> =>
    apiService.getThrowable(apiRoutes.offers.getPage(), { params: queryParams }),
  createOffer: async (data: CreateOfferRequest): Promise<void> =>
    apiService.postThrowable(apiRoutes.offers.create(), data),
  updateOffer: async ({ id, payload }: { id: string; payload: UpdateOfferRequest }): Promise<void> =>
    apiService.putThrowable(apiRoutes.offers.update(id), payload),

  deleteOffer: async (id: string): Promise<void> => apiService.deleteThrowable(apiRoutes.offers.delete(id)),

  toggleFeatured: async (id: string): Promise<void> =>
    apiService.postThrowable(apiRoutes.offers.toggleFeatured(id), {}),
};

export default offerService;
