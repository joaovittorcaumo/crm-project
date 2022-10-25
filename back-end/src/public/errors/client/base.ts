import ApiError from '../base';

/**
 * Base class for Client errors
 *
 * @code 400
 */
export default class ClientError extends ApiError {
  static defaultMessage = 'Client error.';
  static defaultDetail = 'Client send an invalid request.';
  static defaultStatus = 400;

  constructor(message?: string, detail?: string, status?: number) {
    super(
      message || ClientError.defaultMessage,
      detail || ClientError.defaultDetail,
      status || ClientError.defaultStatus,
    );
  }
}
