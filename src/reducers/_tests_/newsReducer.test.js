import { news } from "../newsReducer";

describe("newsReducer", () => {
  it("should return a default state", () => {
    const expected = [];
    const result = news(undefined, []);
    expect(result).toEqual(expected);
  });
  it("should return an array of News", () => {
    const mockNewsAction = {
      news: [{ title: "New skin" }, { title: "New Weapon" }],
      type: "SET_NEWS"
    };
    const expected = [{ title: "New skin" }, { title: "New Weapon" }];
    const result = news("SET_NEWS", mockNewsAction);
    expect(result).toEqual(expected);
  });
});
