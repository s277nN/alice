export { dialog } from './dialog'
export { modal } from './modal'
export { notice } from './notice'
export * from './addon'
export * from './apyApr'
export * from './media'
export * from './storage'
export * from './connectors'

export function addEventListener(type: keyof WindowEventMap, listener: Function | any): void {
  window.addEventListener(type, listener, true)
}

export function removeEventListener(type: keyof WindowEventMap, listener: Function | any): void {
  window.removeEventListener(type, listener, true)
}

export function isIE(): boolean {
  return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

export function isEqual(a: any, b: any): boolean {
  return a === b || Object.is(a, b)
}

/**
 * UUID Generator.
 */
export function keyCode(): string {
  return `${1e8}-${1e4}-${1e4}-${1e4}-${1e12}`.replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
}

export function generateId(): string {
  return Math.random().toString(16).substr(2)
}

/**
 * Hidden overflow scroll.
 *
 * @param {boolean} input
 */
export function scrollOff(input: boolean = true): void {
  document.body.style.overflow = input ? 'hidden' : 'auto'
}

/**
 * Truncate limitor text.
 *
 * @param {string} input
 * @param {number} limit
 */
export function truncate(input: string, limit: number): string {
  if (input.length <= limit) return input

  const bake = '...'
  let x = input.substr(0, limit)
  let n = input.lastIndexOf(' ')

  if (n > -1) x = input.substr(0, n)

  return `${x}${bake}`
}

/**
 * Convert long number into abbreviated string.
 *
 * @param {number} input
 */
export function abbreviateNumber(input: number): number | string {
  if (input < 1e5) return input.toLocaleString()

  const length = input.toString().length

  const suffix = ['k', 'm', 'b', 't', 'p', 'e']
  const index = Math.ceil((length - 3) / 3)

  return (input / Math.pow(1000, index - 1)).toFixed(2).replace(/\.0$/, '') + suffix[index - 1]
}

/**
 * Convert number to price.
 *
 * @param {number|string} input
 * @param {number} fix delimiters
 */
export function price(input: number | string, fix: number): string {
  const n = Number(input)
    .toFixed(fix || 0)
    .toString()
  return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Pad Digits
 *
 * @param {number} number
 * @param {number} digits
 */
export function pad(number: number, digits: number): string {
  const arr = Array(Math.max(digits - number.toString().length + 1, 0))
  return arr.join('0') + number
}

/**
 * clone.
 *
 * @param {object|array} input
 */
export function clone(input: any) {
  return JSON.parse(JSON.stringify(input))
}

/**
 * Convert to Upper Case.
 *
 * @param {string} input
 */
export function upperCase(input: string): string {
  return input.toLocaleUpperCase()
}

/**
 * Convert to Lower Case.
 *
 * @param {string} input
 */
export function lowerCase(input: string): string {
  return input.toLocaleLowerCase()
}

/**
 * Convert to Capitalize.
 *
 * @param {string} input
 */
export function capitalize(input: string): string {
  const array = input.split(/[ ]+/)
  return array
    .map((word) => {
      return `${upperCase(word.charAt(0))}${word.slice(1)}`
    })
    .join(' ')
}

/**
 * Gets a random element from collection.
 *
 * @param {array} collection The collection to sample.
 * @return Returns the random element.
 */
export function getRandom(collection: any[]) {
  const id = Math.floor(Math.random() * collection.length)
  return collection[id]
}
