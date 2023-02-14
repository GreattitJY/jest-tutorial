import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};

// const user2 = {
//   age: 20,
// };

test("snapshot: name 있음", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const el = render(<Hello {...{ user }} />);
  expect(el).toMatchSnapshot();
});

test("snapshot: name 없음", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const el = render(<Hello />);
  expect(el).toMatchSnapshot();
});

test("Hello라는 글자가 포함되는가?", () => {
  render(<Hello {...{ user }} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
