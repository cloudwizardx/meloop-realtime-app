export class ExpiredTokenException extends Error {
  public statusCode: number = 401

  constructor(message?: string) {
    const errorMessage = message ?? 'Token has expired, unauthorized access'
    super(errorMessage)
    Object.setPrototypeOf(this, ExpiredTokenException.prototype)
  }
}
