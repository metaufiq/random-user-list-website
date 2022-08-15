import { User } from "../../index.types"

export type Props = {
  users: User[]
}

export type SortCondition = 'ASCEND' | 'DESCEND' | undefined

export type SortBy = keyof User;

export type DataWithLabel = {
  [key in keyof User]: string;
};

export type ReducerState = {
  using?: SortBy,
  condition?: SortCondition
}

export type ReducerAction = {
  type: SortCondition
  payload?: SortBy 
}

export type ReducerDispatcher = React.Dispatch<ReducerAction>