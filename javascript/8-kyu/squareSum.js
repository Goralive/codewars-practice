function squareSum(numbers) {
  let overall = 0;
  for (let i = 0; i < numbers.length; i++) {
    overall += Math.pow(numbers[i], 2);
  }
  return overall;
}

squareSum(20);
