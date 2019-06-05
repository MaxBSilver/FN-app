import { mapStateToProps, StoreView } from "../StoreView";
import React from "react";

import { shallow } from "enzyme";
describe("StoreView", () => {
  describe("StoreView Component", () => {
    let wrapper;
    let mockGetCurrentStoreItemsThunk;
    beforeEach(() => {
      mockGetCurrentStoreItemsThunk = jest.fn();
      const mockProps = { storeItems: [{ itemId: 1 }] };
      wrapper = shallow(
        <StoreView
          {...mockProps}
          getCurrentStoreItemsThunk={mockGetCurrentStoreItemsThunk}
        />
      );
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    it("should invoke getAllCosmeticsThunk when component mounts", async () => {
      const mockProps = { storeItems: [] };

      wrapper = shallow(
        <StoreView
          {...mockProps}
          getCurrentStoreItemsThunk={mockGetCurrentStoreItemsThunk}
        />
      );
      await wrapper.instance().componentDidMount();
      expect(mockGetCurrentStoreItemsThunk).toHaveBeenCalled();
    });
  });
  describe("mapStateToProps", () => {
    it("should return an object with the storeItems array", () => {
      const mockState = {
        storeItems: [{ title: "New Skins" }, { title: "New Items" }]
      };
      const expected = {
        storeItems: [{ title: "New Skins" }, { title: "New Items" }]
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an boolean", () => {
      const mockState = {
        isLoading: false
      };
      const expected = {
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an error message", () => {
      const mockState = {
        error: "Has Errored!"
      };
      const expected = {
        error: "Has Errored!"
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
