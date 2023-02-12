const fn = require("./fn");

// // 객체나 배열은 재귀적으로 돌면서 값을 확인하기 때문에 toEqual을 사용해야 한다.
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// // toStrictEqua을 사용하면 내부요소까지 더 엄격하게 확인 가능
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30, true)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//     // gender: undefined,
//   });
// });

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null입니다.", () => {
  expect(undefined).toBeUndefined();
});

// toBeTruthy
// toBeFalsy
test("비어있지 않은 문자열은 true 입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanIrEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  // expect(pw.length).toBe(4);
  expect(pw.length).toEqual(4);
});

// 소수점 판별시 가까운 수, 근접값으로 확인
test("0.1 더하기 0.2는 0.3입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 정규표현식은 toMatch로 확인
test("Hello World에 H라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContain
test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("이거 에러 나와요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
