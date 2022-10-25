import * as yup from 'yup';

export abstract class UserDto {
  static authDto = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  //** Schema for user creation */
  static userCreateDto = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    role: yup.string().required(),
  });
  /** Schema for user return */
  static userItemDto = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    role: yup.string(),
  });
}
