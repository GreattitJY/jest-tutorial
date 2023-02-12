const fn = require("./fn");

// 비동기 통신 시 done을 사용
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

// Promise 사용 시 return 사용
// test("3초 후에 받아온 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

// resolves, rejects matcher 사용
// test("3초 후에 에러가 납니다.", () => {
//   return expect(fn.getAge()).rejects.toMatch("error");
// });

// async, await 사용
// test("3초 후에 나이 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

test("3초 후에 나이 30", async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});

test("0 + 1은 1이야,", () => {
  expect(fn.add(0, 1)).toBe(1);
});
