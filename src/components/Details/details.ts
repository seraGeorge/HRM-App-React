import { styled } from "styled-components";
import colors from "../../core/constants/colors";

const DetailsWrapper = styled.div`
  justify-content: flex-start !important;
  border: 1px solid ${colors.LIGHT_GRAY_COLOR};

  .heading {
    padding: 5px;
    border-right: 1px solid ${colors.LIGHT_GRAY_COLOR};
    width: 20%;
    > * {
      display: inline-block;
      vertical-align: bottom; /* Align elements at the bottom */
    }
  }

  .content {
    width: 80%;
    font-size: 14px;
    font-weight: 500;
    padding-left: 10px;
  }
  .title {
    margin-left: 10px;
    font-size: 14px;
    color: ${colors.DARK_GRAY_COLOR};
  }
  .skill-card {
    font-size: 14px;
    font-weight: 500;
  }
  .skill-list {
    padding-left: 10px;
  }
`;
export default DetailsWrapper;
