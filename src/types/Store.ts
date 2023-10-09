import {initStore} from "../store";

type Store = ReturnType<typeof initStore>
type RootState = ReturnType<Store["getState"]>
type AppDispatch = Store["dispatch"]

export type {RootState, AppDispatch}