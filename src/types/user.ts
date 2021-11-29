export interface User {
  uid: string
  role: string
  avatar: string
  name: string
  bio?: string
  balance: number
  bonus: number
  createdAt: string | number
  updatedAt: string | number
}
