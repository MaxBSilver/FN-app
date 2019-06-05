import * as actions from "../actions";

describe("actions", () => {
  it("should have a type IS_LOADING", () => {
    const isLoading = true;
    const expectedAction = {
      type: "IS_LOADING",
      isLoading: true
    };
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type HAS_ERRORED", () => {
    const message = "message";
    const expectedAction = {
      type: "HAS_ERRORED",
      message: "message"
    };
    const result = actions.hasErrored(message);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type SET_NEWS", () => {
    const news = ["myNews"];
    const expectedAction = {
      type: "SET_NEWS",
      news: ["myNews"]
    };
    const result = actions.setNews(news);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type SET_STORE_ITEMS", () => {
    const storeItem = ["myItem"];
    const expectedAction = {
      type: "SET_STORE_ITEMS",
      storeItems: ["myItem"]
    };
    const result = actions.setStore(storeItem);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type SET_COSMETIC_ITEMS", () => {
    const cosmeticItems = ["cosmeticItem"];
    const expectedAction = {
      type: "SET_COSMETIC_ITEMS",
      cosmeticItems: ["cosmeticItem"]
    };
    const result = actions.setCosmeticItems(cosmeticItems);
    expect(result).toEqual(expectedAction);
  });
});
