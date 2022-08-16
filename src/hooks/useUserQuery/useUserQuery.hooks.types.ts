import { SortBy, SortCondition } from '../../components/UserTable/UserTable.component.types';
import { User } from '../../index.types'

export type SetUsers = React.Dispatch<React.SetStateAction<User[]>>;

export type SetParams = React.Dispatch<React.SetStateAction<Params>>;

export type SetGender = React.Dispatch<React.SetStateAction<string>>;

export type SetCurrentPage = React.Dispatch<React.SetStateAction<number>>;

export type SetSearchInput = React.Dispatch<React.SetStateAction<string>>;

export type Params = {
  sortCategory?: SortBy,
  sortCondition?: SortCondition,
  searchInput: string, 
  gender: string, 
  page: number,
}