import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

import { RoundedType } from "../../../test/index.types"

export type Props = {
  placeholder: string,
  id?: string,
  type: HTMLInputTypeAttribute,
  roundedType?: RoundedType,
  onChange: ChangeEventHandler<HTMLInputElement>
}