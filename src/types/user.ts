export interface User {
  uid: string
  role: string
  avatar: string
  name: string
  bio?: string
  balance: number
  bonus: number
  createdAt: string | Date
  updatedAt: string | Date
}
