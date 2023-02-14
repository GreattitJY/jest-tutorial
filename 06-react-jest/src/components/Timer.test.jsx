import { render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  Date.now = jest.fn(() => 123456789);
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
