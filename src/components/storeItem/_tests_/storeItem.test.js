import React from "react";
import { shallow } from "enzyme";
import StoreItem from "../StoreItem";

describe("StoreItem", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      item: {
        name: "Crimson Axe",
        description: "Wield, smite, repeat.",
        type: "",
        images: { information: "" }
      }
    };
    wrapper = shallow(<StoreItem {...mockProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
