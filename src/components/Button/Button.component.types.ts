import { RoundedType } from "../../../test/index.types";

export type Type = 'PRIMARY' | 'SECONDARY'

export interface Props{
  children: JSX.Element | string,
  onClick?: VoidFunction,
  roundedType?: RoundedType,
  type?: Type
}