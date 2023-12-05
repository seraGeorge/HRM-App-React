import { useEffect, useState } from "react";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import {
  Data,
  Employee,
  SelectOptionProps,
  SortDirection,
  TableProps,
} from "../interfaces/interface.ts";
import DataContext from "./DataContext.tsx";
import { getData } from "../api/functions.ts";
import { toast } from "react-toastify";

const DataProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataEmployees, setDataEmployees] = useState<Employee[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [designations, setDesignations] = useState<SelectOptionProps[]>([]);
  const [departments, setDepartments] = useState<SelectOptionProps[]>([]);
  const [empModes, setEmpModes] = useState<SelectOptionProps[]>([]);
  const [skills, setSkills] = useState<SelectOptionProps[]>([]);
  const [tableProps, setTableProps] = useState<TableProps>({
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    sort: {
      sortVal: SortDirection.NO_SORT, // sorting order
      sortTerm: "", // sort the table using this property
    },
    search_term: "",
  });

  const addTableProps = (tableProps: TableProps) => {
    setTableProps(tableProps);
  };

  const fetchEmployeeData = async () => {
    try {
      const response = await getData("/.json");
      const dataResponse: Data = response.data;
      if (dataResponse) {
        setDataEmployees(Object.values(dataResponse.employees));
        setEmployees(Object.values(dataResponse.employees));
        return dataResponse; // Resolve the promise with the data
      } else {
        toast.error("No data is recieved", { toastId: "no-data" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFirebaseData = async () => {
    try {
      const dataResponse = await fetchEmployeeData();
      if (dataResponse) {
        setDesignations(transformArrayToOptionsList(dataResponse.designations));
        setDepartments(transformArrayToOptionsList(dataResponse.departments));
        setEmpModes(transformArrayToOptionsList(dataResponse.employment_modes));
        setSkills(transformArrayToSkillOptionsList(dataResponse.skills));
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  };

  useEffect(() => {
    fetchFirebaseData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        employees,
        departments,
        designations,
        employment_modes: empModes,
        skills,
        tableProps,
        addTableProps,
        loading,
        fetchEmployeeData,
        dataEmployees,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
