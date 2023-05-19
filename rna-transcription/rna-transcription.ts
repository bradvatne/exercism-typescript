export function toRna(dna: string):string {
  //regex that finds whether a string contains any characters except for ACGT
  if (/[^ACGT]/g.test(dna)) {
    throw new Error("Invalid input DNA.");
  }
  //regex that switches C to G, G to C, A to U, T to A

  return dna.replace(/[CGAT]/g, (match) => {
    return match === "C"
      ? "G"
      : match === "G"
      ? "C"
      : match === "A"
      ? "U"
      : "A";
  });
}
