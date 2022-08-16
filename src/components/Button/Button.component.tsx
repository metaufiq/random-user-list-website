import { RoundedType } from "../../../test/index.types";
import { getRoundedType } from "../../utils/index.utils";
import { Props } from "./Button.component.types";

const _getClassName = (roundedType?:RoundedType)=>(
  `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${getRoundedType(roundedType)} focus:outline-none focus:shadow-outline`
)

const Button = ({roundedType, onClick, children}: Props)=>{
  return(
    <button 
      className={_getClassName(roundedType)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;