import { NextFunction, Request, Response } from 'express';

const sseHeadersMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // important for Nginx
  res.flushHeaders();
  // Heartbeat every 25s (adjust to be < proxy timeout)
  const heartbeat = setInterval(() => {
    res.write(`: keep-alive\n\n`);
    console.log('heartbeat sent ❤️ 💕😍');
  }, 25000);
  req.on('close', () => {
    clearInterval(heartbeat);
    console.log('heartbeat cleared 💔 😢');
  });
  next();
};

export default sseHeadersMiddleware;
