export class InvalidCredentialException extends Error {
  public statusCode: number = 401

  constructor(message: string = 'Invalid credentials provided') {
    super(message)
    this.name = 'InvalidCredentialException'
  }
}
