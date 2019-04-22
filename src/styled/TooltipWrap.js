import React from "react";

import styled from "styled-components";
import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

export const Elem = styled.div`
  position: absolute;
  padding: ${props => (props.padding ? props.padding : "31px 23px")};
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 3px 1px 8px rgba(0, 0, 0, 0.13);
  display: ${props => (props.visible ? "block" : "none")};
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  transform: ${props => props.transform};
  z-index: ${props => props.zIndex};
`;

const TooltipWrap = props => {
  const merged = innerMerge({}, props.theme, defaultTheme.Tooltip);

  const theme = getThemeAsPlainObjectByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default TooltipWrap;
