import { useContext } from "react";
import DataContext from "../../../../../core/store/DataContext";
import FilterSelect from "./FilterSelect";

function FilterSelectList() {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  return (
    <div className="select-list">
      <FilterSelect
        label="Departments"
        options={departments}
        placeholder="Select department"
        isMulti={false}
        fieldName="department"
      />
      <FilterSelect
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={false}
        fieldName="designation"
      />
      <FilterSelect
        label="Employment Modes"
        options={employment_modes}
        placeholder="Select employment modes"
        isMulti={false}
        fieldName="employment_mode"
      />
      <FilterSelect
        label="Skills"
        options={skills}
        placeholder="Select skills"
        isMulti={true} //employees can have multiple skills
        fieldName="skills"
      />
    </div>
  );
}

export default FilterSelectList;
