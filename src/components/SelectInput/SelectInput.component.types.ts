import { ChangeEventHandler } from "react"

export type Option = {
  value: any,
  label: string,
}

export type Props = {
  options: Option[],
  label: string,
  htmlFor?: string,
  id?: string,
  onChange: ChangeEventHandler<HTMLSelectElement>,
  value?: string | number | readonly string[] | undefined
}