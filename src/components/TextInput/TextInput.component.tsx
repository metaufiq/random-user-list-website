import { RoundedType } from "../../../test/index.types";
import { getRoundedType } from "../../utils/index.utils";
import { Props } from "./TextInput.component.types";

const _getClassName = (roundedType?:RoundedType)=>(
  `appearance-none border ${getRoundedType(roundedType)} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
)

const TextInput = (props: Props)=>{
  const { roundedType } = props
  return(
    <input 
      className={_getClassName(roundedType)}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextInput;