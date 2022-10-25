import {User} from '../models/User';
import {UserRepository} from '../repository/UserRepository';
import {BadRequestError, NotFoundError} from '../public/errors/client/errors';

export abstract class UserService {
  public static async getById(id: number) {
    return UserRepository.get(id);
  }
  
  public static async verifyDuplicate(user: User) {
    await UserService.verifyEmailDuplicate(user.email);    
  }

  private static async verifyEmailDuplicate(email: string) {
    const exists = await UserRepository.getUserWith({email});
    if (exists) throw new BadRequestError('Email already exists.');
    return true;
  }
}
