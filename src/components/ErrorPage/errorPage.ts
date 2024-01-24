import styled from "styled-components";
import colors from "../../core/constants/colors";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;

  .error-title {
    margin: 0;
    font-size: 105px;
    font-weight: 900;
    line-height: 1.5;
    color: ${colors.DARK_GRAY_COLOR};
  }

  .error-subtitle {
    color: ${colors.DARK_GRAY_COLOR};
  }
  .back-to-home-btn {
    background-color: blue;
  }
`;
export default ErrorPageWrapper;
