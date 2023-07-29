export class Rational {
  numerator: number;
  denominator: number;

  constructor(x: number, y: number) {
    this.numerator = x;
    this.denominator = y;
  }

  calc_gcd(n: Rational): number {
    let a = n.numerator;
    let b = n.denominator;
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  simplify(n: Rational): Rational {
    const gcd = this.calc_gcd(n);
    return new Rational(n.numerator / gcd, n.denominator / gcd);
  }

  add(n: Rational): Rational {
    let x = new Rational(
      this.numerator * n.denominator,
      this.denominator * n.denominator
    );
    let y = new Rational(
      n.numerator * this.denominator,
      n.denominator * this.denominator
    );
    let newNumerator = x.numerator + y.numerator;
    x.numerator = newNumerator;
    return this.simplify(x);
  }

  sub() {
    throw new Error("Remove this statement and implement this function");
  }

  mul() {
    throw new Error("Remove this statement and implement this function");
  }

  div() {
    throw new Error("Remove this statement and implement this function");
  }

  abs() {
    throw new Error("Remove this statement and implement this function");
  }

  exprational() {
    throw new Error("Remove this statement and implement this function");
  }

  expreal() {
    throw new Error("Remove this statement and implement this function");
  }

  reduce() {
    throw new Error("Remove this statement and implement this function");
  }
}
