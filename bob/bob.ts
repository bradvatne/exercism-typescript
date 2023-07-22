export function hey(str: string): string {
  const message = str.trim();

  switch (true) {
    case message.endsWith("?") &&
      message.toUpperCase() == message &&
      message.toLowerCase() !== message:
      return "Calm down, I know what I'm doing!";

    case message.toUpperCase() == message && message.toLowerCase() != message:
      return "Whoa, chill out!";

    case message.endsWith("?"):
      return "Sure.";
    case message == "":
      return "Fine. Be that way!";

    default:
      return "Whatever.";
  }
}
