import React from "react";
import { shallow } from "enzyme";
import Error from "../Error";

describe("CosmeticItemContainer", () => {
  let wrapper;

  beforeEach(() => {
wrapper = shallow(<Error />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});