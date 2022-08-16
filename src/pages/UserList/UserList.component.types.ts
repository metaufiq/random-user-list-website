import { SortBy, SortCondition } from "../../components/UserTable/UserTable.component.types";
import { SetState } from "../../index.types";

export type SetSortCategory = SetState<SortBy>;

export type SetSortCondition = SetState<SortCondition>;