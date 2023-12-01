import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import {
  Employee,
  SelectOptionProps,
} from "../../../core/interfaces/interface.ts";
import InputWrapper from "../../../components/Input/input.ts";
import InputError from "../../../components/InputError/InputError.tsx";
import selectStyles from "../../../components/SelectStyle/selectCustomStyles.ts";

function FormSelect({
  label,
  options,
  placeholder,
  isMulti,
  fieldName,
}: {
  label: string;
  options: SelectOptionProps[];
  placeholder: string;
  isMulti?: boolean;
  fieldName: keyof Employee;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMsg = errors[fieldName]; // gets the input errors if it violates the validation
  const className = errorMsg ? `input-border-error select-border-radius ${label}` : "label";

  return (
    <InputWrapper>
      <label className="subheading">{label}</label>
      <Controller
        name={fieldName}
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <>
            <div className="input-field-error">
              <Select
                {...field}
                isClearable={true}
                className={className}
                isSearchable={true}
                options={options}
                placeholder={<div className="placeholder">{placeholder}</div>}
                isMulti={isMulti || false}
                styles={selectStyles(errorMsg?.toString())} // custom style for select dropdown
              />
              {
                errorMsg && <InputError error={errorMsg.message?.toString()} />
                // gets the error component if it has errormsg set
              }
            </div>
          </>
        )}
      />
    </InputWrapper>
  );
}

export default FormSelect;
