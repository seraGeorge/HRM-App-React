import styled from "styled-components";
import colors from "../../core/constants/colors";

const TooltipWrapper = styled.div<{ $left: number }>`
  position: absolute;
  background-color:  ${colors.WHITE_COLOR};
  color: ${colors.SECONDARY_COLOR};
  border: 1px solid ${colors.DARK_GRAY_COLOR};
  padding: 5px;
  border-radius: 3px;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    top: -10px;
    left: ${(props) => `calc(${props.$left}% - 50px)`}; // Adjust this value based on your design
    transform: translateX(-50%);
  }
`;
export default TooltipWrapper;
