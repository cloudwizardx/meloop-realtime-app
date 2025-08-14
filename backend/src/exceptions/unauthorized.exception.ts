export class UnauthorizeException extends Error {
  public statusCode: number = 401

  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, UnauthorizeException.prototype)
  }
}