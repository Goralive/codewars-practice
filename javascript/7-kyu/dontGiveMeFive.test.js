import five from "./dontGiveMeFive";

test("Dont give me five", () => {
  expect(five(4, 17)).toBe(12);
});
