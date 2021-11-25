import axios, { AxiosInstance } from 'axios'
import { configs } from '@/libs/configs'
import { getCookie } from '@/libs/cookies'
import { resAudit } from '@/utils'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: configs.API_GATEWAY,
  headers: {
    'Api-Secret-Key': configs.API_SECRET_KEY,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE'
  }
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use((requestConfig) => {
  const PASSPORT_TOKEN = getCookie(configs.APP_AUTH)
  if (PASSPORT_TOKEN) {
    requestConfig.headers[configs.AUTH_PASSPORT] = `bearer ${PASSPORT_TOKEN}`
  }

  const USER_ADDRESS = getCookie(configs.USER_ADDRESS)
  if (USER_ADDRESS) {
    requestConfig.headers[configs.AUTH_ADDRESS] = USER_ADDRESS
  }

  return requestConfig
})

/**
 * allows changes to the response data to be made before
 * it is passed to then/catch
 */
Axios.interceptors.response.use(
  (res) => res,
  (err) => {
    return new Promise((resolve) => {
      resAudit(err).then(resolve)
    })
  }
)

export default Axios
