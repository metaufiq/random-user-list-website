import { RoundedType } from "../../../test/index.types";
import { getRoundedType } from "../../utils/index.utils";
import { Props, Type } from "./Button.component.types";

const _getButtonType = (type?: Type) => {
  const defaultValue = 'bg-white hover:bg-gray-50 border-slate-300 border text-black';

  switch (type) {
    case 'PRIMARY':
      return 'bg-blue-500 hover:bg-blue-700 text-white'

    case 'SECONDARY':
      return defaultValue
    default:
      return defaultValue
  }
}

const _getClassName = (roundedType?:RoundedType, type?: Type)=>(
  `${_getButtonType(type)} text-sm font-medium py-2 px-4 ${getRoundedType(roundedType)} focus:outline-none focus:shadow-outline`
)

const Button = ({roundedType, onClick, children, type}: Props)=>{
  return(
    <button 
      className={_getClassName(roundedType, type)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;