import {NextFunction, Request, Response} from 'express';
import {BadRequestError} from '../public/errors/client/errors';

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
  const {auth} = req.headers;
  if (!auth) throw new BadRequestError('Missing auth header.');
  next();
}
