import { useContext, useMemo, useState } from "react";
import { Employee } from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import TableWrapper from "./employeeTable.ts";
import TableData from "./TableData/TableData.tsx";
import TableHead from "./TableHead/TableHead.tsx";
import Loader from "../../../components/Loader/Loader.tsx";
import { filterData, searchData, sortData } from "../../../utils/helper.ts";
import Pagination from "./Pagination/Pagination.tsx";
import DeleteModal from "../../../components/DeleteModal/DeleteModal.tsx";

let pageSize = 5;

function EmployeeTable({
  deleteModal,
  changeDltModalOpenStatus,
}: {
  deleteModal: boolean;
  changeDltModalOpenStatus: () => void;
}) {
  const { employees, loading, tableProps, dataEmployees } =
    useContext(DataContext);

  const [idToDlt, setIdToDlt] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  let totalCount = 0;
  let totalPageCount = 0;

  const employeesTableView = useMemo(() => {
    if (!employees) {
      return [];
    }
    const sortedEmployees = sortData(dataEmployees, tableProps);
    const filteredEmployees = filterData(sortedEmployees, tableProps);
    const searchedEmployees = searchData(filteredEmployees, tableProps);
    // Update totalCount based on the filtered data length
    totalCount = searchedEmployees.length;

    // Calculate the total number of pages based on the filtered data length
    totalPageCount = Math.ceil(totalCount / pageSize);

    // Ensure that the current page is within the valid range
    const validCurrentPage = Math.min(currentPage, totalPageCount);

    const firstPageIndex = (validCurrentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return searchedEmployees.slice(firstPageIndex, lastPageIndex);
  }, [tableProps, employees, currentPage, deleteModal]);

  const addIdToDlt = (idToDlt: string) => {
    setIdToDlt(idToDlt);
  };
  const idToDltProp = { idToDlt, addIdToDlt };

  return (
    <>
      <div className="table-overflow-scroll">
        <TableWrapper>
          <TableHead />
          {loading ? (
            <tbody>
              <tr className="no-border-row">
                <td colSpan={5}>
                  {/* This component is rendered when data is fetching from database  */}
                  <div className="loader-container">
                    <Loader />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {employeesTableView.length > 0 ? (
                employeesTableView.map((employee: Employee, index: number) => {
                  return (
                    employee && (
                      <TableData
                        key={employee.id}
                        employee={employee}
                        index={index}
                        changeDltModalOpenStatus={changeDltModalOpenStatus}
                        idToDltProp={idToDltProp}
                      />
                    )
                  );
                })
              ) : (
                <tr>
                  <td className="no-data" colSpan={6}>
                    No data Available
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </TableWrapper>
      </div>
      {deleteModal && (
        <DeleteModal
          changeDltModalOpenStatus={changeDltModalOpenStatus}
          employeeId={idToDlt}
        />
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
export default EmployeeTable;
