export class UnverifiedEmail extends Error {
  public statusCode: number = 401

  constructor(email: string) {
    super(`Email ${email} is not verified`)
    this.name = 'UnverifiedEmail'
    Object.setPrototypeOf(this, UnverifiedEmail.prototype)
  }
}
