export const fizzbuzz = (start: number, end: number) => {
  const fizzbuzzArray = [];
  for (let index = start; index <= end; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      fizzbuzzArray.push("fizzbuzz");
    } else if (index % 3 === 0) {
      fizzbuzzArray.push("fizz");
    } else if (index % 5 === 0) {
      fizzbuzzArray.push("buzz");
    } else {
      fizzbuzzArray.push(index);
    }
  }
  return fizzbuzzArray;
};
