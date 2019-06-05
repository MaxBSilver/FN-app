import { mapStateToProps, mapDispatchToProps, StoreView } from "../StoreView";
import React from "react";

import { shallow } from "enzyme";
describe("StoreView", () => {
  describe("StoreView Component", () => {
    let wrapper;
    beforeEach(() => {
      const mockProps = { storeItems: [{ itemId: 1 }] };
      wrapper = shallow(<StoreView {...mockProps} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
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
