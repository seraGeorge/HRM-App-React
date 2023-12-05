import { useContext } from "react";
import {
  SortDirection,
  TableProps,
} from "../../../../core/interfaces/interface.ts";
import DataContext from "../../../../core/store/DataContext.tsx";
import { findSortCriteria } from "../../../../utils/helper.ts";
import { TableHeadIconWrapper } from "./tableHead.ts";
import ButtonWrapper from "../../../../components/Button/button.ts";

function TableHeadButton({
  children,
  icon,
}: {
  children?: React.ReactNode;
  icon?: string;
}) {
  const { tableProps, addTableProps } = useContext(DataContext);

  const currentSortCriteria = findSortCriteria(children); // get the employee property from the data label on which the table is sorted
  const visible = currentSortCriteria === tableProps.sort.sortTerm;
  let sortIcon = "rotate";
  let newSortProp = SortDirection.NO_SORT; // sorting order

  if (visible) {
    // inverting the sort order with the sorticon toggling the visibility
    if (tableProps.sort.sortVal === SortDirection.DESC) {
      newSortProp = SortDirection.ASC;
      sortIcon = "";
    } else if (tableProps.sort.sortVal === SortDirection.ASC) {
      newSortProp = SortDirection.DESC;
    } else if (tableProps.sort.sortVal === SortDirection.NO_SORT) {
      newSortProp = SortDirection.ASC;
      sortIcon = "";
    }
  }

  function sortBtnClickHandler() {
    const updatedTableProps: TableProps = {
      ...tableProps, // maintain the tableprops value
      sort: {
        sortTerm: currentSortCriteria.toString(),
        sortVal: newSortProp,
      },
    };
    addTableProps(updatedTableProps);
  }

  return (
    <th>
      <ButtonWrapper
        $isChildren={false}
        className={`common-flex table-button-head`}
        onClick={sortBtnClickHandler}
      >
        <TableHeadIconWrapper
          $visible={visible}
          className={`material-symbols-outlined sort-icon ${sortIcon}`}
        >
          {icon}
        </TableHeadIconWrapper>
        <label className="table-title">{children}</label>
      </ButtonWrapper>
    </th>
  );
}
export default TableHeadButton;
