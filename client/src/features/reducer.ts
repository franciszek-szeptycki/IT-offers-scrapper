import {IParam} from "../assets/types";

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "SET_EXP":
            return { ...state, EXP: action.item }
        case "SET_TECH":
            return { ...state, TECH: action.item }
        case "SET_CITY":
            return { ...state, CITY: action.item }
    }
}

export type StateType = {
    EXP: IParam | null,
    TECH: IParam | null,
    CITY: IParam | null,
}

export type ActionType = {
    type: ActionTypes,
    item: IParam
}

export type ActionTypes = "SET_EXP" | "SET_TECH" | "SET_CITY"