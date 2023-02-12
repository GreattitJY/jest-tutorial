const fn = require("./fn");

test("1은 1이야.", () => {
  expect(1).toBe(1);
});

test("2더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3더하기 3은 5가 아니야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

// toBe는 Macther로 기본 타입값을 비교할 때 사용

test("2더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});
