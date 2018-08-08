import React from "react";
import { Tooltip } from "../src/";
import { mount } from "enzyme";

describe("Tabs", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <Tooltip
        position={"bottom"}
        content={"I am tooltip"}
      ><div>Hover me</div></Tooltip>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
