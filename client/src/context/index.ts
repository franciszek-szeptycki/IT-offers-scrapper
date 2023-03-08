import React, {createContext, Dispatch} from "react";
import {ActionType, StateType} from "./reducer";

export const initialState: StateType = {
    TECH: [],
    EXP: [],
    CITIES: []
}

export const Context = createContext<{state: StateType, dispatch: Dispatch<ActionType>}>({
    state: initialState,
    dispatch: () => initialState
});