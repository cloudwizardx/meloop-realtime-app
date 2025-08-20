
export interface Profile {
  _id?: string
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
  address: [{ name: string; specificAddress: string }]
  socialUrl: [{ name: string; url: string }]
  introSelf: string
  createdAt?: Date
  updatedAt?: Date
}
