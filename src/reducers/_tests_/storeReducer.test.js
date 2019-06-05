import { storeItems } from "../storeReducer";

describe("storeItemsReducer", () => {
  it("should return a default state", () => {
    const expected = [];
    const result = storeItems(undefined, []);
    expect(result).toEqual(expected);
  });
  it("should return an array of storeItems", () => {
    const mockstoreItemsAction = {
      storeItems: [{ title: "New skin" }, { title: "New Weapon" }],
      type: "SET_STORE_ITEMS"
    };
    const expected = [{ title: "New skin" }, { title: "New Weapon" }];
    const result = storeItems("SET_STORE_ITEMS", mockstoreItemsAction);
    expect(result).toEqual(expected);
  });
});
