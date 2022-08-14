export type User = {
  gender: string,
  name: {
    first: string,
    last: string
  },
  email: string,
  login: {
    username: string,
  },
  registered: {
    date: string
  },
}

export type GetListUserResponses = {
  results: User[],
}

export type Params = {
  keyword?: string
}