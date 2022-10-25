import {UserRole} from '../models/enums/userRole';

export interface AuthDto {
  userId: number;

  role: UserRole;

  iat: number;

  exp: number;
}
