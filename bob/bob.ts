export function hey(message: string): string {
  if (message[message.length-1] === '?') return 'Sure.'
  if (message === message.toUpperCase()) return 'Whoa, chill out!'
  if (message[message.length-1] === '!') return "Calm down, I know what I'm doing!"
  if (message.split(' ').length < 1) return 'Fine. Be that way!'
  return 'Whatever.'
}
