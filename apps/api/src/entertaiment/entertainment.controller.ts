import { createEntertainmentRequestSchema } from '@contracts/schemas/Entertainment/createEntertainmentRequest';
import { entertainmentService } from './entertainment.service';
import { updateEntertainmentRequestSchema } from '@contracts/schemas/Entertainment/UpdateEntertainmentRequest';
import { Request, Response } from 'express';
import { entertainmentQueryParamsSchema } from '@contracts/schemas/Entertainment/EntertaimentPageQuery';

class EntertainmentController {
  async create(req: Request, res: Response) {
    const schema = createEntertainmentRequestSchema.parse(req.body);
    const entertainment = await entertainmentService.create(schema);
    res.status(201).json(entertainment);
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const entertainment = await entertainmentService.getById(id);
    res.status(200).json(entertainment);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const schema = updateEntertainmentRequestSchema.parse(req.body);
    const entertainment = await entertainmentService.update(id, schema);
    res.status(200).json(entertainment);
  }

  async getPage(req: Request, res: Response) {
    const queryParams = entertainmentQueryParamsSchema.parse(req.query);
    const entertainments = await entertainmentService.getPage(queryParams);
    res.status(200).json(entertainments);
  }

  async getFeatured(req: Request, res: Response) {
    const featuredEntertainments = await entertainmentService.getFeatured();
    res.status(200).json(featuredEntertainments);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const entertainment = await entertainmentService.delete(id);
    res.status(200).json(entertainment);
  }

  async toggleFeatured(req: Request, res: Response) {
    const id = req.params.id;
    const entertainment = await entertainmentService.toogleFeatured(id);
    res.status(200).json(entertainment);
  }
}

export const entertainmentController = new EntertainmentController();
