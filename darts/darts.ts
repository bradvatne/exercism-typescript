function isPointWithinCircle(r: number, x: number, y: number): boolean {
  const distance = Math.sqrt((x) ** 2 + (y) ** 2);
  return distance <= r;
}

export function score(x: number, y: number): number {
  if (isPointWithinCircle(1,x,y)) return 10;
  if (isPointWithinCircle(5,x,y)) return 5;
  if (isPointWithinCircle(10,x,y)) return 1;
  return 0;
}
