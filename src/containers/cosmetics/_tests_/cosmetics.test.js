import React from "react";
import { CosmeticsView, mapStateToProps } from "../CosmeticsView";
import * as action from "../../../actions/index";
import { shallow } from "enzyme";

describe("CosmeticsView", () => {
  describe("component", () => {
    let wrapper;
    let mockGetAllCosmeticsThunk;
    beforeEach(() => {
      mockGetAllCosmeticsThunk = jest.fn();
      const mockCosmeticItems = [];
      wrapper = shallow(
        <CosmeticsView
          getAllCosmeticsThunk={mockGetAllCosmeticsThunk}
          cosmeticItems={mockCosmeticItems}
        />
      );
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    it("should invoke getAllCosmeticsThunk when component mounts", async () => {
      await wrapper.instance().componentDidMount();
      expect(mockGetAllCosmeticsThunk).toHaveBeenCalled();
    });
    it("should have a default state", () => {
      expect(wrapper.instance().state).toEqual({
        filter: "all",
        displayItems: []
      });
    });
    describe("handle click", () => {
      it("should invoke select display on click", () => {
        wrapper.instance().selectDisplay = jest.fn();
        const event = { target: "max" };
        wrapper.instance().handleClick(event);
        expect(wrapper.instance().selectDisplay).toHaveBeenCalled();
      });
      describe("selectDisplay", () => {
        const mockCosmeticItems = [{ item: { type: "pickaxe" } }, { item: { type: "glider" } }];

        wrapper = shallow(
          <CosmeticsView
            getAllCosmeticsThunk={mockGetAllCosmeticsThunk}
            cosmeticItems={mockCosmeticItems}
          />
        );
        it("should setState with an item with a type equivalent to the filter", () => {
          wrapper.instance().selectDisplay('pickaxe')
          expect(wrapper.instance().state).toEqual({displayItems: [{ item: { type: "pickaxe" } }], filter: 'pickaxe'})        });
      });
    });
  });

  describe("mapStateToProps", () => {
    it("should return an object with the cosmeticItems array", () => {
      const mockState = {
        cosmeticItems: [{ title: "New Skins" }, { title: "New Items" }]
      };
      const expected = {
        cosmeticItems: [{ title: "New Skins" }, { title: "New Items" }]
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
