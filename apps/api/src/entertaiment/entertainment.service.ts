import { CreateEntertainmentRequest } from '@contracts/schemas/Entertainment/createEntertainmentRequest';
import { entertainmentRepository } from './entertainment.repo';
import { EntertainmentMapper } from './entertainment.mapper';
import { UpdateEntertainmentRequest } from '@contracts/schemas/Entertainment/UpdateEntertainmentRequest';
import { NotFoundError } from '@/err/customErrors';
import { EntertainmentPageQuery } from '@contracts/schemas/Entertainment/EntertaimentPageQuery';
import { EntertainmentOrderByWithRelationInput, EntertainmentWhereInput } from '@/generated/prisma/models';

class EntertainmentService {
  async create(schema: CreateEntertainmentRequest) {
    const entertainment = await entertainmentRepository.create(schema);
    const entertainmentResponse = EntertainmentMapper.toResponse(entertainment);
    return entertainmentResponse;
  }

  async update(id: string, schema: UpdateEntertainmentRequest) {
    const entertainment = await entertainmentRepository.update(id, schema);
    const entertainmentResponse = EntertainmentMapper.toResponse(entertainment);
    return entertainmentResponse;
  }

  async getById(id: string) {
    const entertainment = await entertainmentRepository.getById(id);
    if (!entertainment) throw new NotFoundError(`Entertainment with id ${id} not found`);
    const entertainmentResponse = EntertainmentMapper.toResponse(entertainment);

    return entertainmentResponse;
  }

  async getPage(queryParams: EntertainmentPageQuery) {
    const skip = (queryParams.page - 1) * queryParams.size;
    const take = queryParams.size;
    const { search } = queryParams;

    const where: EntertainmentWhereInput = {};

    if (search.length > 0) {
      const searchValue = search.toLowerCase();
      where.name = { contains: searchValue, mode: 'insensitive' };
    }

    const orderBy: EntertainmentOrderByWithRelationInput = {};

    if (queryParams.sort) {
      orderBy[queryParams.sort] = queryParams.order;
    }

    const { content, totalElements } = await entertainmentRepository.getPage({ skip, take, where, orderBy });

    const entertainmentPage = EntertainmentMapper.toPageResponse({
      entertainments: content,
      totalElements,
      pagination: queryParams,
    });

    return entertainmentPage;
  }

  async getFeatured() {
    const featuredEntertainments = await entertainmentRepository.getFeatured();
    const featuredEntertainmentsResponse = EntertainmentMapper.toResponses(featuredEntertainments);
    return featuredEntertainmentsResponse;
  }

  async delete(id: string) {
    const entertainment = await entertainmentRepository.delete(id);
    return true;
  }
}

export const entertainmentService = new EntertainmentService();
