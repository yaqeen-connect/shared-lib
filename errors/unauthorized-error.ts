import { CustomError } from "./custom.error";

export class UnauthorizedError extends CustomError {
  statusCode = 401;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeError() {
    return { message: this.message, statusCode: this.statusCode };
  }
}
