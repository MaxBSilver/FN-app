import { isLoading } from "../loadingReducer";

describe("loadingReducer", () => {
  it("should return a default state", () => {
    const expected = false;
    const result = isLoading(undefined, {});
    expect(result).toEqual(expected);
  });
  it("should return a boolean", () => {
    const mockErrorAction = {
      isLoading: true,
      type: "IS_LOADING"
    };
    const expected = true;
    const result = isLoading("IS_LOADING", mockErrorAction);
    expect(result).toEqual(expected);
  });
});
