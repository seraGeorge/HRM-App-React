import styled from "styled-components";
import colors from "../../../../core/constants/colors";

const TableHeadWrapper = styled.thead`
  .table-button-head {
    cursor: pointer;
    color: ${colors.SECONDARY_COLOR};

    &:hover {
      .sort-icon {
        visibility: visible;
      }
    }
  }
  .table-title {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.SECONDARY_COLOR};
  }
  button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
  }
`;

const TableHeadIconWrapper = styled.span<{ $visible: boolean }>`
  transition: 300ms;
  cursor: pointer;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;
export { TableHeadWrapper, TableHeadIconWrapper };
