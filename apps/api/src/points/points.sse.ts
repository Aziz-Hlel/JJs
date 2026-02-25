import { Response } from 'express';

class PointsSSE {
  writeResponse(res: Response, data: string | object) {
    const payload = typeof data === "object" ? JSON.stringify(data) : data;
    res.write(`data: ${payload}\n\n`);
  }
}

export const pointsSSE = new PointsSSE();
