import { error } from "../errorReducer";

describe("errorReducer", () => {
  it("should return a default state", () => {
    const expected = "";
    const result = error(undefined, {});
    expect(result).toEqual(expected);
  });
  it("should return an error", () => {
    const mockErrorAction = {
      message: "Network error",
      type: "HAS_ERRORED"
    };
    const expected = "Network error";
    const result = error("HAS_ERRORED", mockErrorAction);
    expect(result).toEqual(expected);
  });
});
