import styled from 'styled-components';

export const TopArrow = styled.div`
  background: #ffffff;
  width: 18px;
  height: 18px;
  bottom: calc(100% - 10px);
  position: absolute;
  transform: scaleX(0.7) rotate(-45deg);
  border-radius: 3px;
  border-bottom-right-radius: 6px;
  box-shadow: 3px 1px 8px rgba(0, 0, 0, 0.13);
  left: calc(50% - 9px);
`;