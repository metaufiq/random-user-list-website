import { Fragment } from "react";
import Button from "../Button";
import TextInput from "../TextInput/TextInput.component";
import { Props } from "./TextInputWithButton.component.types";

const TextInputWithButton = ({label, htmlFor, id, onChange, type, buttonLabel, onPress, placeholder}: Props)=>{
  return(
    <div>
      <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </label>
      <div className="flex flex-row">
          <TextInput 
            id={id} 
            placeholder={placeholder} 
            type={type} 
            onChange={onChange}
            roundedType={'left-only'}
          />
        <Button onClick={onPress} roundedType="right-only">
          {buttonLabel}
        </Button>
      </div>
    </div>

  )
}

export default TextInputWithButton;