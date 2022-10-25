import {NextFunction, Request, Response} from 'express';
import {UserDto} from '../dto/UserDto';
import {UnauthorizedError} from '../public/errors/client/errors';
import {UserService} from '../service/UserService';

export class UserController {
  async getFromToken(req: Request, res: Response): Promise<any> {
    const {auth} = req.headers;
    if (!auth) throw new UnauthorizedError();
    else {
      return UserService.getFromToken(auth as string)
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<any> {
    return await UserService.create(req.body)
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<any> {
    return UserService.update(req.body)
  }
}
