export function externalImageLoader({ src }: {src: string}) {
  return `${process.env.BASE_API_URL}/upload/${src}`;
}

export function internalImageLoader({ src }: {src: string}) {
  return src;
}
