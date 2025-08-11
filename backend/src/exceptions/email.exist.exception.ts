export default class EmailAlreadyExistsException extends Error {
  public statusCode: number = 400

  constructor(message: string) {
    const messageCt = message ?? "Email already exists in the system"
    super(messageCt)
  }
}
