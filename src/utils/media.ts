export interface MediaBlob {
  url: string
  typeOf: (type: string) => boolean
}

/**
 * The new object URL represents the specified `File` object or `Blob` object.
 *
 * @param {Blob} object A `File`, `Blob`, or `MediaSource` object to create an object URL.
 */
export function createObjectURL(object: Blob): string {
  return window.URL ? URL.createObjectURL(object) : webkitURL.createObjectURL(object)
}

/**
 * The new object URL represents.
 *
 * @param {Any} input A `File`, `Blob`, or `URL`
 */
export async function getMediaBlob(input: string | Blob | File): Promise<MediaBlob> {
  if (typeof input === 'string') {
    const res = await fetch(input).then((r) => r.blob())
    return {
      url: createObjectURL(res),
      typeOf: (type: string) => res.type.includes(type)
    }
  } else {
    return {
      url: createObjectURL(input),
      typeOf: (type: string) => input.type.includes(type)
    }
  }
}

/**
 * Handle file missing.
 *
 * @param {any} event
 */
export function fileMissing({ target: elm }: any): void {
  const { dataset, clientWidth, clientHeight } = elm
  console.log(dataset, clientWidth, clientHeight)

  if (!dataset?.origin) {
    elm.dataset.origin = elm.src
  }

  elm.src = `https://picsum.photos/${clientWidth || 256}/${clientHeight || 256}`
}
