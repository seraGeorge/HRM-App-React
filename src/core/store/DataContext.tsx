import { createContext } from "react";
import { ContextProps,  SortDirection } from "../interfaces/interface";

const DataContext = createContext<ContextProps>({
  employees: [],
  departments: [],
  designations: [],
  employment_modes: [],
  skills: [],
  tableProps: {
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    sort: {
      sortVal: SortDirection.NO_SORT,
      sortTerm: "",
    },
    search_term: "",
  },
  addTableProps: () => {},
  loading: false,
  fetchEmployeeData: () => {},
  dataEmployees: [],
});

export default DataContext;
