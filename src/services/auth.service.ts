import { doc, onSnapshot } from 'firebase/firestore'
import { configs } from '@/libs/configs'
import { getCookie, setCookie, removeCookie, cookieOptions } from '@/libs/cookies'
import { GivenProvider } from '@/libs/ethers'
import { db } from '@/libs/firebase'
import { dispatch, authActions } from '@/store'
import { notice } from '@/utils'
import Web3Token from 'web3-token'

export class authService {
  /**
   * Signin.
   */
  static async signin() {
    const provider = GivenProvider()
    const signer = provider.getSigner()

    const signature = await Web3Token.sign((body: string) => signer.signMessage(body), '1m')
    const address = await signer.getAddress()

    if (signature) {
      await this.setAuthCookies(address, signature)
      await this.getProfile(address)
      notice.success({
        title: 'Success',
        children: 'Sign-In successful.'
      })
    } else {
      notice.warn({
        title: 'Failed',
        children: 'User rejected the request.'
      })
    }
  }

  /**
   * GET user profile.
   *
   * @param {string} address Wallet Address
   */
  static async getProfile(address?: string) {
    const _address = address || getCookie(configs.USER_ADDRESS)
    dispatch(authActions.setAuthenticated(_address))

    onSnapshot(doc(db, `users/${_address}`), (snap) => {
      const user = snap.data()
      if (user) {
        dispatch(
          authActions.setProfile({
            uid: user.address || _address,
            role: user.role || 'user',
            avatar: user.avatar || 'https://picsum.photos/320',
            name: user.name || 'unnamed',
            balance: user.balance || 0,
            bonus: user.bonus || 0,
            createdAt: user.createdAt?.toDate() || new Date(),
            updatedAt: user.updatedAt?.toDate() || user.createdAt?.toDate() || new Date()
          })
        )
      }
    })
  }

  /**
   * GET refresh token.
   *
   * @param {string} address Wallet Address
   */
  static async refreshToken() {
    return void 0
  }

  /**
   * SET auth cookies.
   *
   * @param {string} address Wallet Address
   * @param {string} signature Web3 Token Signature
   */
  static async setAuthCookies(address: string, signature: string) {
    const options = cookieOptions()

    setCookie(configs.APP_AUTH, signature, options)
    setCookie(configs.USER_ADDRESS, address, options)
  }

  /**
   * Signout.
   */
  static async signout(redirectTo?: string) {
    const options = cookieOptions()

    removeCookie(configs.APP_AUTH, options)
    removeCookie(configs.APP_CONNECTOR, options)
    removeCookie(configs.USER_ADDRESS, options)
    removeCookie(configs.USER_INFO, options)

    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      // prettier-ignore
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    }

    if (redirectTo) location.href = redirectTo
  }
}
