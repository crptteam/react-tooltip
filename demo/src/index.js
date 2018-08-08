import React, { Component } from "react";
import { render } from "react-dom";
import Tooltip from "../../src";

import styled from "styled-components";

const Hovering = styled.div`
  padding: 15px;
  background: lightblue;
`;

const Wrap = styled.div`
  margin-left: 300px;
  margin-top: 200px;
`;

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrap>
        <Tooltip position="bottom" content={<div>Whaaat?</div>}>
          <Hovering>HOVER MEEEE</Hovering>
        </Tooltip>
      </Wrap>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
