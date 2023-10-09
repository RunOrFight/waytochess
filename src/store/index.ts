import {configureStore} from "@reduxjs/toolkit";
import methodologyReducer from "./MethodologySlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/Store";

const initStore = () => {
    return configureStore({
        reducer: {
            methodology: methodologyReducer
        },
        devTools: true
    })
}

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {initStore, useAppDispatch, useAppSelector}

