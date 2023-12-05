import { Control } from "react-hook-form";

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
  NO_SORT = "no-sort",
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorState {
  hasError: boolean;
  error: { message: string };
}
export interface SortProps {
  sortVal: SortDirection;
  sortTerm: string | null;
}
export interface TableProps {
  department: SelectOptionProps | null;
  designation: SelectOptionProps | null;
  skills: SelectOptionProps[] | null;
  employment_mode: SelectOptionProps | null;
  sort: SortProps;
  search_term: string | null;
}
export interface Data {
  employees: { [key: string]: Employee };
  departments: string[];
  designations: string[];
  employment_modes: string[];
  skills: Skill[];
  employeesCount: number;
}
export interface ContextProps {
  employees: Employee[];
  departments: SelectOptionProps[];
  designations: SelectOptionProps[];
  employment_modes: SelectOptionProps[];
  skills: SelectOptionProps[];
  tableProps: TableProps;
  addTableProps: (tableProps: TableProps) => void;
  loading: boolean;
  fetchEmployeeData: () => void;
  dataEmployees: Employee[];
}

export interface Skill {
  id: string;
  name: string;
}
export interface Employee {
  address: string;
  date_of_birth: string;
  date_of_joining: string;
  department: string;
  designation: string;
  emp_name: string;
  employment_mode: string;
  email: string;
  gender: string;
  id: string;
  phone: string;
  skills: Skill[];
}
export interface FormEmployee {
  address: string | null;
  date_of_birth: string | null;
  date_of_joining: string | null;
  department: SelectOptionProps | null;
  designation: SelectOptionProps | null;
  emp_name: string | null;
  employment_mode: SelectOptionProps | null;
  email: string | null;
  gender: string | null;
  id: string | null;
  phone: string | null;
  skills: SelectOptionProps[] | null;
}

export interface SelectOptionProps {
  value: string;
  label: string;
}

export interface SelectDropdownProps {
  label: string;
  options: SelectOptionProps[];
  placeholder: string;
  isMulti?: boolean;
  control?: Control<Employee, any>;
  fieldName: keyof TableProps;
  value?: SelectOptionProps | SelectOptionProps[] | null;
}
export interface InputProps {
  validation?: {
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    max?: {
      value: string;
      message: string;
    };
  };
  label: string;
  type: string;
  options?: string[];
  name: string;
  value?: string;
}

export interface IsMultiStateProps {
  isDepartmentsMulti: boolean;
  isDesignationsMulti: boolean;
  isEmpModesMulti: boolean;
  isSkillsMulti: boolean;
}
