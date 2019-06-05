import React from "react";
import { CosmeticsView } from "../CosmeticsView";

import { shallow } from "enzyme";

describe("CosmeticsView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CosmeticsView />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
