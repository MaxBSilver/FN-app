import React from 'react';
import ReactDOM from 'react-dom';
import { mapStateToProps, App} from '../App'

import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App  />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("MapStateToProps", () => {
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

  })
});
