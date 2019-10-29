export function isHash(str) {
  return /^#/.test(str);
}

export function isInternal(str) {
  return /^\/(?!\/)/.test(str);
}
