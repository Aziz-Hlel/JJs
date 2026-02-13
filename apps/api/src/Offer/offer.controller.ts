import { createOfferRequestSchema } from '@contracts/schemas/offre/createOfferRequest';
import { Request, Response } from 'express';
import { offerService } from './offer.service';
import { updateOfferRequestSchema } from '@contracts/schemas/offre/updateOfferRequest';
import { SimpleApiResponse } from '@contracts/types/api/SimpleApiResponse.dto';
import { Page } from '@contracts/types/page/Page';
import { OfferRowResponse } from '@contracts/schemas/offre/OfferRowResponse';
import { offersQueryParamsSchema } from '@contracts/schemas/offre/OfferPageQuery';

class OfferController {
  async create(req: Request, res: Response) {
    const parsedSchema = createOfferRequestSchema.parse(req.body);

    const offerResponse = await offerService.create(parsedSchema);

    res.status(201).json(offerResponse);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedSchema = updateOfferRequestSchema.parse(req.body);

    const offerResponse = await offerService.update(id, parsedSchema);
    res.status(200).json(offerResponse);
  }

  async getPage(req: Request, res: Response<Page<OfferRowResponse>>) {
    const queryParams = offersQueryParamsSchema.parse(req.query);
    const offerPage = await offerService.getPage(queryParams);
    res.status(200).json(offerPage);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const offerResponse = await offerService.getById(id);
    res.status(200).json(offerResponse);
  }

  async delete(req: Request, res: Response<SimpleApiResponse>) {
    const { id } = req.params;
    await offerService.delete(id);

    res.status(200).json({ message: 'Offer deleted successfully' });
  }

  async toggleFeatured(req: Request, res: Response) {
    const { id } = req.params;
    const updatedOffer = await offerService.toggleFeatured(id);
    res.status(200).json(updatedOffer);
  }

  
}

export const offerController = new OfferController();
