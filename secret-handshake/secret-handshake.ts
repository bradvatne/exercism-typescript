const SECRET_MOVES = ["wink", "double blink", "close your eyes", "jump"];

export function commands(input: number) {
  let bits: string = input.toString(2); // convert to binary
  let bitsArr: string[] = bits.split("").reverse();
  let response: string[] = [];

  for (let i = 0; i < 5; i++) {
    if (bitsArr[i] == "1") {
      if (i === 4) {
        return response.reverse();
      }
      response.push(SECRET_MOVES[i]);
    }
  }
  return response;
}
