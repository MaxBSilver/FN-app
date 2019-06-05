import React from "react";
import { shallow } from "enzyme";
import CosmeticItemContainer from "../CosmeticItemContainer";

describe("CosmeticItemContainer", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = [
      {
        itemId: "134134",
        item: {
          images: { information: "image1" }
        }
      }
    ];
    wrapper = shallow(<CosmeticItemContainer displayItems={mockProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
