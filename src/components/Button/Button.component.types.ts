import { RoundedType } from "../../../test/index.types";

export interface Props{
  children: JSX.Element | string,
  onClick?: VoidFunction,
  roundedType?: RoundedType
}