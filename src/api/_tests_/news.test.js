import { getAllCosmetics } from "../cosmetics";
import { fortniteApiToken } from "../config";
import { fortniteApi } from "../api";
import MockAdapter from "axios-mock-adapter";
import { hasErrored, isLoading, news } from "../../actions/index";

describe("getBrNews", () => {
  const mockNews = [{ item: 1 }, { item: 2 }];
  const mock = new MockAdapter(fortniteApi);
  mock.get = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNews)
    });
  });

  it.skip("should call fetch with the correct params", () => {
    const url = `https://fortnite-api.theapinetwork.com/items/list`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: fortniteApiToken
      }
    };
    getAllCosmetics();
    expect(mock.get).toHaveBeenCalledWith(url, options);
  });
  describe("getBrNewsThunk", () => {
    const mockUrl = "https://fortnite-api.theapinetwork.com/items/list";
    const mockDispatch = jest.fn();
    mock.get = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            cosmeticItems: mockNews
          })
      })
    );
    it.skip("calls dispatch with isLoading(true)", async () => {
      const thunk = await getAllCosmetics(mockUrl);
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
    });
  });
});