import { splitDate } from "./utils/DateFunctions";
import App from "./App";
import { render } from "@testing-library/react";

describe("split date", () => {
  test("mm/dd/yyyy date to split date function should change date to an array format", () => {
    const date = "10/15/2004";
    expect(splitDate(date)).toStrictEqual(["10", "15", "2004"]);
  });
});

describe("form data", () => {
  test("form should be in the document", () => {
    const view = render(<App />);
    const inputNode = view.getByText("FIRST NAME*");
    expect(inputNode).toBeInTheDocument();
  });
});
