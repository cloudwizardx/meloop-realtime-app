export class AccountBlockedException extends Error {
  public statusCode: number = 403

  constructor(message: string = 'Account is blocked') {
    super(message)
    this.name = 'AccountBlockedException'
    Object.setPrototypeOf(this, AccountBlockedException.prototype);
  }
}
