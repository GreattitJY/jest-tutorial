const fn = require("./fn04");

// beforEach, afterEach
// let num = 0;

// beforeEach(() => {
//   num = 0;
// });

// // afterEach(() => {
// //   num = 10;
// // });

// test("0 더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2은 2야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0 더하기 3은 3이야", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

// test("0 더하기 4은 4야", () => {
//   num = fn.add(num, 4);
//   expect(num).toBe(4);
// });

// beforeAll, afterAll
// let user;

// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// describe("Car 관련 작업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

// beforeEach, afterEach, describe 실행 순서
// beforeAll(() => console.log("밖 beforeAll")); // 1
// beforeEach(() => console.log("밖 beforeEach")); // 2, 6(밖에 있는 beforeEach는 각 테스트가 실행하기 전에 실행된다.)
// afterEach(() => console.log("밖 afterEach")); // 4, 10 (안에 있는 afterEach가 실행된 후 실행)
// afterAll(() => console.log("밖 afterAll")); // 마지막

// test("0 + 1 = 1", () => {
//   expect(fn.add(0, 1)).toBe(1); // 3
// });

// describe("Car 관련 작업", () => {
//   beforeAll(() => console.log("안 beforeAll")); // 5
//   beforeEach(() => console.log("안 beforeEach")); // 7
//   afterEach(() => console.log("안 afterEach")); //9
//   afterAll(() => console.log("안 afterAll")); // 마지막  - 1

//   test("0 + 1 = 1", () => {
//     expect(fn.add(0, 1)).toBe(1); // 8
//   });
// });

// only, skip
let num = 0;
test("0 더하기 1은 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});
test("0 더하기 2은 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});
test("0 더하기 3은 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});
test.skip("0 더하기 4은 4", () => {
  expect(fn.add(num, 4)).toBe(4);
  num = 10;
});
test("0 더하기 5은 5", () => {
  expect(fn.add(num, 5)).toBe(5);
});
