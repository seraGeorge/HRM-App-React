import usePagination, { DOTS } from "../hook/usePagination.ts";
import PaginationWrapper from "./pagination.ts";

function Pagination({
  onPageChange,
  totalPageCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: {
  onPageChange: (page: number) => void;
  totalPageCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}) {
  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <PaginationWrapper className={`pagination-container ${className}`}>
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""} `}
        onClick={onPrevious}
      >
        <span className="material-symbols-outlined arrow">chevron_left</span>
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }
          return (
            <li
              className={`pagination-item ${
                pageNumber === currentPage ? "selected" : ""
                } `}
              key={pageNumber}
              onClick={() => {
                if (typeof pageNumber === "number") onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        } `}
        onClick={onNext}
      >
        <span className="material-symbols-outlined arrow">chevron_right</span>
      </li>
    </PaginationWrapper>
  );
}

export default Pagination;
