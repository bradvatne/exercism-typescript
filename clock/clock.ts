export class Clock {
  private readonly _hour: number;

  private readonly _minute: number;

  constructor(hour: number, minute?: number) {
    let m = minute ?? 0;

    this._minute = ((m % 60) + 60) % 60;

    this._hour = (((hour + Math.floor(m / 60)) % 24) + 24) % 24;
  }

  public toString(): string {
    const h = ["0", ...this._hour.toString(10)].slice(-2).join("");

    const m = ["0", ...this._minute.toString(10)].slice(-2).join("");

    return `${h}:${m}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this._hour, this._minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this._hour, this._minute - minutes);
  }

  public equals(other: Clock): boolean {
    return other._hour === this._hour && other._minute === this._minute;
  }
}
