import { User } from "../../index.types"

export type SortCondition = 'ASCEND' | 'DESCEND' | undefined

export type SortBy = keyof User | undefined;

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

export type Props = {
  users: User[],
  onSort: (value?: SortBy, condition?: SortCondition)=>void
}