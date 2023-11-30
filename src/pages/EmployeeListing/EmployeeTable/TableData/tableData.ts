import styled from "styled-components";
import colors from "../../../../core/constants/colors";

const TableDataWrapper = styled.tr`

.employee-data{
    font-size: 14px;
    font-weight: 500;
    position:relative;
}
.employee-view{
    color: ${colors.LINK_COLOR};
    cursor:pointer; 

    &:active{
        text-decoration:underline;
    }
    &:hover{
        color:${colors.LINK_HIGHLIGHT_COLOR};
        text-decoration:underline;
    }
}

button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
}


  
`;
export default TableDataWrapper;