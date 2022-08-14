import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export type Props = {
  placeholder: string,
  id: string,
  type: HTMLInputTypeAttribute,
  onChange: ChangeEventHandler<HTMLInputElement>
}