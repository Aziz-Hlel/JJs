import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { Page } from '@contracts/types/page/Page';
import type { OfferRowResponse } from '@contracts/schemas/offre/OfferRowResponse';

const offerService = {
  getPage: async (queryParams: { [k: string]: string | number | Array<string> }): Promise<Page<OfferRowResponse>> =>
    apiService.getThrowable(apiRoutes.offers.getPage(), { params: queryParams }),
};

export default offerService;
