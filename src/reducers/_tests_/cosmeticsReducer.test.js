import { cosmeticItems } from "../cosmeticsReducer";

describe("cosmeticReducer", () => {
  it("should return a default state", () => {
    const expected = [];
    const result = cosmeticItems(undefined, []);
    expect(result).toEqual(expected);
  });
  it("should return an array of cosmeticItems", () => {
    const mockCosmeticAction = {
      cosmeticItems: [{ title: "New skin" }, { title: "New Weapon" }],
      type: "SET_COSMETIC_ITEMS"
    };
    const expected = [{ title: "New skin" }, { title: "New Weapon" }];
    const result =  cosmeticItems("SET_COSMETIC_ITEMS", mockCosmeticAction);
    expect(result).toEqual(expected);
  });
});
