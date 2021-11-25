import { StoreTypes } from '@/store'

export function getAuthenticated({ auth: { address, user } }: StoreTypes) {
  return Boolean(address && user)
}

export function getAddress({ auth: { address } }: StoreTypes) {
  return address
}

export function getUser({ auth: { user } }: StoreTypes) {
  return user
}
