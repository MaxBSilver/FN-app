import React from "react";
import { shallow } from "enzyme";
import HomeItem from "../HomeItem";

describe("HomeItem", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      meta: { mainColor: "#cd8823", adSpace: null },
      time: 1559578127,
      body: "The Eternal Struggle Set is available now!",
      image:
        "https://fortnite-public-files.theapinetwork.com/91bdf9d0a4caa1fe8",
      title: "Darkness or Light"
    };
    wrapper = shallow(<HomeItem {...mockProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
