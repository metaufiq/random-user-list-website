import { Fragment } from "react";
import Button from "../Button";
import SelectInput from "../SelectInput";
import { Props } from "./SelectInputWithButton.component.types";

const SelectInputWithButton = ({options, label, htmlFor, id, onChange, value, onReset, resetButtonLabel}: Props)=>{
  return(
    <Fragment>
      <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </label>
      <div className="flex flex-row">
        <div className="mr-2 flex-auto">
          <SelectInput 
            options={options} 
            onChange={onChange} 
            id={id}
            value={value}
          />
        </div>
        <Button onClick={onReset}>
          {resetButtonLabel}
        </Button>
      </div>
    </Fragment>

  )
}

export default SelectInputWithButton;