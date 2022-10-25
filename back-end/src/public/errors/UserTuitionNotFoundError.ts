export class UserTuitionNotFoundError extends Error {
    detail: string;
    status: number;
    constructor(detail: string, status: number) {
      super('No user found with tuition provided');
      this.name = 'UserEmailNotFoundError';
      this.detail = detail;
      this.status = status;
    }
  }
  