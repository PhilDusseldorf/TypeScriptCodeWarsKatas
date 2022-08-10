export function findNb(totalVolume: number): number {
  let rows = 1;
  let cubes = 0;
  while (cubes < totalVolume) {
    cubes += Math.pow(rows, 3);
    if (cubes === totalVolume) {
      return rows;
    }
    rows++;
  }
  return -1;
}
