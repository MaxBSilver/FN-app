import { getCurrentStoreItems } from "../store";
import { fortniteApiToken } from "../config";
import { fortniteApi } from "../api";
import MockAdapter from "axios-mock-adapter";
import { hasErrored, isLoading, setStore } from "../../actions/index";

describe("getCurrentStoreItems", () => {
  const mockStore = [{ item: 1 }, { item: 2 }];
  const mock = new MockAdapter(fortniteApi);
  mock.get = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockStore)
    });
  });

  it.skip("should call fetch with the correct params", () => {
    const url = `https://fortnite-api.theapinetwork.com/store/get`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: fortniteApiToken
      }
    };
    getCurrentStoreItems();
    expect(mock.get).toHaveBeenCalledWith(url, options);
  });
  describe("getCurrentStoreItemsThunk", () => {
    const mockUrl = "https://fortnite-api.theapinetwork.com/store/get";
    const mockDispatch = jest.fn();
    mock.get = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            storeItems: mockStore
          })
      })
    );
    it.skip("calls dispatch with isLoading(true)", async () => {
      const thunk = await getCurrentStoreItems(mockUrl);
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
    });
  });
});
