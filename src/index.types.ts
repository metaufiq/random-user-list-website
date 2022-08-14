export type User = {
  username: string,
  name: string,
  email: string,
  gender: string,
  regisDate: string
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;