import React from "react";
import { shallow } from "enzyme";
import RequestError from "../RequestError";

describe("RequestError", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RequestError />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
