import environment from '../config/environment';
import {UserRepository} from '../repository/UserRepository';
import { UserTuitionNotFoundError } from '../public/errors/UserTuitionNotFoundError';
import { TuitionAndPasswordNotMatchError } from '../public/errors/TuitionAndPasswordNotMatchError';
import {AuthDto} from '../dto/AuthDto';
import bcrypt from 'bcrypt';

export abstract class AuthService {

  public static comparePassword(rawPassword: string, hashPassword: string) {
    return bcrypt.compare(rawPassword, hashPassword);
  }

  public static async login(tuition: string, rawPassword: string) {
    const user = await UserRepository.getUserLoginContent(tuition);
    if (!user) throw new UserTuitionNotFoundError('Email is not part of any user', 404);

    const isValid = await this.comparePassword(rawPassword, user.password);

    if (!isValid)
      throw new TuitionAndPasswordNotMatchError('Password invalid for that user', 404);
  }
}
