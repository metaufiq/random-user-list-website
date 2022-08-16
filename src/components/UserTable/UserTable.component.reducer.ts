import { ReducerAction, ReducerState } from "./UserTable.component.types";

export const initialState: ReducerState = {
}

const reducer = (state: ReducerState, action: ReducerAction):ReducerState => 
({
  ...state, 
  condition: action.type, 
  using: action.payload 
})

export default reducer;