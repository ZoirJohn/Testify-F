export function required(msg: string) {
  return (value: string) => !!value || msg
}

export function match(msg: string, getMatch: () => string) {
  return (value: string) => value == getMatch() || msg
}

export function minLength(msg: string, minLength: number) {
  return (value: string) => value.length > minLength || msg
}

export function specialChars(msg: string) {
  return (value: string) => value.match(/^(?=.*?[#?!@$%^&*-]).+$/) || msg
}

export function maxLength(msg: string, maxLength: number) {
  return (value: string) => value.length < maxLength || msg
}
