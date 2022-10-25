import ClientError from '../base';

/**
 * BadRequestError
 *
 * @code 400
 */
export class BadRequestError extends ClientError {
  static defaultDetail = 'Client send an invalid request.';

  constructor(detail?: string) {
    super('Bad Request.', detail || BadRequestError.defaultDetail);
    this.name = 'BadRequestError';
  }
}

/**
 * UnauthorizedError
 *
 * @code 401
 */
export class UnauthorizedError extends ClientError {
  static defaultDetail = 'Client failed to authenticate.';

  constructor(detail?: string) {
    super('Unauthorized.', detail || UnauthorizedError.defaultDetail, 401);
    this.name = 'UnauthorizedError';
  }
}

/**
 * ForbiddenError
 *
 * @code 403
 */
export class ForbiddenError extends ClientError {
  static defaultDetail = 'Client does not have permission to access.';

  constructor(detail?: string) {
    super('Forbidden.', detail || ForbiddenError.defaultDetail, 403);
    this.name = 'ForbiddenError';
  }
}

/**
 * NotFoundError
 *
 * @code 404
 */
export class NotFoundError extends ClientError {
  static defaultDetail = 'The requested resorce was not found.';

  constructor(detail?: string) {
    super('Not Found.', detail || NotFoundError.defaultDetail, 404);
    this.name = 'NotFoundError';
  }
}
