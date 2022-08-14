import { Params } from '../../api/randomUser/randomUser.api.types';
import { User } from '../../index.types'

export type SetUsers = React.Dispatch<React.SetStateAction<User[]>>;

export type SetParams = React.Dispatch<React.SetStateAction<Params>>;

export type SetGender = React.Dispatch<React.SetStateAction<string>>;

export type SetSearchInput = React.Dispatch<React.SetStateAction<string>>;