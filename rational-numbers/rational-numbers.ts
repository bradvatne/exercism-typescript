export class Rational {
  numerator: number;
  denominator: number;

  constructor(x: number, y: number) {
    this.numerator = x;
    this.denominator = y;
  }

  //calculates greatest common denominator
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

  //simplifies value to most primitive
  simplify(n: Rational): Rational {
    const gcd = this.calc_gcd(n);
    return new Rational(n.numerator / gcd, n.denominator / gcd);
  }

  //checks for equality
  eq(n: Rational): Rational[] {
    let x = new Rational(
      this.numerator * n.denominator,
      this.denominator * n.denominator
    );
    let y = new Rational(
      n.numerator * this.denominator,
      n.denominator * this.denominator
    );
    return [x, y];
  }

  //adds two rational
  add(n: Rational): Rational {
    const [x, y] = this.eq(n);
    let newNumerator = x.numerator + y.numerator;
    x.numerator = newNumerator;
    return this.simplify(x);
  }

  //subtracts a rational from another
  sub(n: Rational): Rational {
    const [x, y] = this.eq(n);
    const newNumerator = x.numerator - y.numerator;
    x.numerator = newNumerator;
    return this.simplify(x);
  }

  //multiplies
  mul(n: Rational): Rational {
    return this.simplify(
      new Rational(
        this.numerator * n.numerator,
        this.denominator * n.denominator
      )
    );
  }

  //divides
  div(n: Rational): Rational {
    return this.simplify(
      new Rational(
        this.numerator * n.denominator,
        this.denominator * n.numerator
      )
    );
  }

  //absolute value of rational
  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  //rational number to the power of another rational number
  exprational(n: number): Rational {
    return this.simplify(
      new Rational(this.numerator ** n, this.denominator ** n)
    );
  }

  //rational number to a power of a real number
  expreal(n: number): Rational {
    return this.simplify(
      new Rational(this.numerator ** n, this.denominator ** n)
    );
  }

  //rational number reduced
  reduce(): Rational {
    return this.simplify(this);
  }
}
