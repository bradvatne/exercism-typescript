export class Rational {
  numerator: number;

  denominator: number;

  constructor(numer: number, denom: number) {
    this.numerator = numer;

    this.denominator = denom;

    this.reduce();
  }

  add(rational: Rational): Rational {
    this.numerator =
      this.numerator * rational.denominator +
      rational.numerator * this.denominator;

    this.denominator = this.denominator * rational.denominator;

    return this.reduce();
  }

  sub(rational: Rational): Rational {
    this.numerator =
      this.numerator * rational.denominator -
      rational.numerator * this.denominator;

    this.denominator = this.denominator * rational.denominator;

    return this.reduce();
  }

  mul(rational: Rational): Rational {
    this.numerator = this.numerator * rational.numerator;

    this.denominator = this.denominator * rational.denominator;

    return this.reduce();
  }

  div(rational: Rational): Rational {
    this.numerator = this.numerator * rational.denominator;

    this.denominator = this.denominator * rational.numerator;

    return this.reduce();
  }

  abs(): Rational {
    this.numerator = Math.abs(this.numerator);

    this.denominator = Math.abs(this.denominator);

    return this;
  }

  exprational(num: number): Rational {
    if (num >= 0) {
      this.numerator = this.numerator ** num;

      this.denominator = this.denominator ** num;
    } else {
      const prevNumer = this.numerator;

      num = Math.abs(num);

      this.numerator = this.denominator ** num;

      this.denominator = prevNumer ** num;
    }

    return this.reposition();
  }

  expreal(num: number): number {
    return num ** (this.numerator / this.denominator);
  }

  reduce(): Rational {
    this.reposition();

    if (this.numerator !== 0) {
      if (this.numerator < 0 && this.denominator < 0) this.abs();
      else if (this.denominator < 0) {
        this.numerator = -this.numerator;

        this.denominator = -this.denominator;
      }

      let x = 0,
        gcd = Math.abs(this.numerator),
        b = this.denominator;

      while (b !== 0) {
        x = gcd % b;

        gcd = b;

        b = x;
      }

      if (gcd > 1) {
        this.numerator /= gcd;

        this.denominator /= gcd;
      }
    }

    return this;
  }

  reposition(): Rational {
    if (this.numerator === 0) this.denominator = 1;
    else if (this.numerator < 0 && this.denominator < 0) this.abs();
    else if (this.denominator < 0) {
      this.numerator = -this.numerator;

      this.denominator = -this.denominator;
    }

    return this;
  }
}
