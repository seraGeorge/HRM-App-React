import { useContext } from "react";
import DataContext from "../../../core/store/DataContext.tsx";
import FormSelect from "./FormSelect.tsx";

function FormSelectList() {
  const { departments, designations, employment_modes, skills } =
    useContext(DataContext);

  return (
    <div className="select-list common-flex">
      <FormSelect
        label="Departments"
        options={departments}
        placeholder="Select department"
        isMulti={false}
        fieldName="department"
      />
      <FormSelect
        label="Designations"
        options={designations}
        placeholder="Select designation"
        isMulti={false}
        fieldName="designation"
      />
      <FormSelect
        label="Employment Modes"
        options={employment_modes}
        placeholder="Select employment modes"
        isMulti={false}
        fieldName="employment_mode"
      />
      <FormSelect
        label="Skills"
        options={skills}
        placeholder="Select skills"
        isMulti={true}
        fieldName="skills"
      />
    </div>
  );
}

export default FormSelectList;
