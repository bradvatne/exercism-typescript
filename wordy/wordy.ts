const OPERATIONS: {
  [key: string]: string;
} = {
  plus: '+',
  minus: '-',
  multiplied: '*',
  divided: '/'
};

function isNumber(char: string) {
  return /^-?\d+$/.test(char);
}

function calculate(x: number, y: number, operation: string) {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    default:
      throw new Error('Unknown operation');
  }
}

function answer(input: string) {
  const words = input.slice(0, -1).split(' ');
  const numbers = [];
  const operations = [];
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (isNumber(currentWord)) {
      numbers.push(Number(currentWord));
      continue;
    }

    if (OPERATIONS.hasOwnProperty(currentWord)) {
      if (numbers.length - operations.length === 1) {
        operations.push(OPERATIONS[currentWord]);
        continue;
      } else {
        throw new Error('Syntax error');
      }
    }

    if (
      (i === 0 && currentWord !== 'What') ||
      isNumber(words[i - 1])
    ) {
      throw new Error('Unknown operation');
    }
  }

  if (numbers.length - operations.length === 1) {
    result = numbers.shift() || 0;
    for (let i = 0; i < operations.length; i++) {
      result = calculate(result, numbers[i], operations[i]);
    }
  } else {
    throw new Error('Syntax error');
  }

  return result;
}

// Example usage
const input = 'What is 5 plus 3 multiplied by 2?';
console.log(answer(input)); // Output: 16
