import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export type Option = {
  value: any,
  label: string,
}

export type Props = {
  placeholder: string,
  id?: string,
  type: HTMLInputTypeAttribute,
  label: string,
  buttonLabel: JSX.Element | string,
  htmlFor?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onPress: VoidFunction,
  value?: string | number | readonly string[] | undefined
}