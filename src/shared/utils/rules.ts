export function required(msg: string) {
  return (value: string) => !!value || msg
}

export function match(msg: string, match: string) {
  return (value: string) => value == match || msg
}

export function minLength(msg: string, minLength: number) {
  return (value: string) => value.length > minLength || msg
}

function specialChars(value: string) {
  if (!value.match(/^(?=.*?[#?!@$%^&*-])$/)) {
  }
  return true
}
