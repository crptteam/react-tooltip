import styled from 'styled-components';

export const TooltipWrap = styled.div`
  position: absolute;
  padding: 31px 23px;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 3px 1px 8px rgba(0, 0, 0, 0.13);
  display: ${props => (props.visible ? "block" : "none")};
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  transform: ${props => props.transform};
`;