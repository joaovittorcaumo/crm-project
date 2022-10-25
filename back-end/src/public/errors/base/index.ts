/**
 * Base error class for API
 */
 export default abstract class ApiError extends Error {
    detail: string;
    status: number;
  
    constructor(message: string, detail: string, status: number) {
      super(message);
      this.detail = detail;
      this.status = status;
    }
  }
  