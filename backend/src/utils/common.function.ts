export function parseExpiration(str: string): number {
  const match = str.match(/^(\d+)([dhm])$/)
  if (!match) throw new Error('Invalid expiration format')

  const value = parseInt(match[1], 10)
  const unit = match[2]

  switch (unit) {
    case 'd':
      return value * 24 * 60 * 60 * 1000
    case 'h':
      return value * 60 * 60 * 1000
    case 'm':
      return value * 60 * 1000
    default:
      throw new Error('Unsupported unit')
  }
}
