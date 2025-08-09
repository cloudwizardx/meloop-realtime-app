export interface Profile {
  firstName: string
  lastName: string
  nickName: string
  dateOfBirth: Date
  relationshipStatus: string
  avatar: string
  coverPhoto: string
  bio: string
  major: string
  school: string
  phone: string
  gender: string
  friendsCount: number
  address: [{ name: string; specificAddress: string; }]
}
