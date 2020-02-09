import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<Login />);
};

describe("Login", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Login component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-login");
    expect(component.exists()).toBe(true);
  });
});