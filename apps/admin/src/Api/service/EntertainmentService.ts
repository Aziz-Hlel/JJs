import type { CreateEntertainmentRequest } from '@repo/contracts/schemas/Entertainment/createEntertainmentRequest';
import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { UpdateEntertainmentRequest } from '@repo/contracts/schemas/Entertainment/UpdateEntertainmentRequest';
import type { Page } from '@repo/contracts/types/page/Page';
import type { EntertainmentResponse } from '@repo/contracts/schemas/Entertainment/EntertainmentResponse';

const entertainmentService = {
  getPage: async (queryParams: { [k: string]: string | number | Array<string> }) =>
    apiService.getThrowable<Page<EntertainmentResponse>>(apiRoutes.entertainment.getPage(), { params: queryParams }),
  create: async (data: CreateEntertainmentRequest): Promise<void> =>
    apiService.postThrowable(apiRoutes.entertainment.create(), data),
  update: async ({ id, payload }: { id: string; payload: UpdateEntertainmentRequest }): Promise<void> =>
    apiService.putThrowable(apiRoutes.entertainment.update(id), payload),
  delete: async (id: string): Promise<void> => apiService.deleteThrowable(apiRoutes.entertainment.delete(id)),
  toggleFeatured: async (id: string): Promise<void> =>
    apiService.postThrowable(apiRoutes.entertainment.toggleFeatured(id), {}),
};

export default entertainmentService;
