import {InfoElementType} from "../components/Form";

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "ADD_EXP":
            return { ...state, EXP: [action.payload] }
        case "REMOVE_EXP":
            return { ...state, EXP: [] }

        case "ADD_TECH":
            return { ...state, TECH: [action.payload] }
        case "REMOVE_TECH":
            return { ...state, TECH: [] }

        case "ADD_CITY":
            if (state.CITIES.includes(action.payload)) return state
            else return { ...state, CITIES: [...state.CITIES, action.payload] }
        case "REMOVE_CITY":
            return { ...state, CITIES: state.CITIES.filter(city => city !== action.payload) }
    }
}

export type StateType = {
    TECH: InfoElementType[]
    EXP: InfoElementType[]
    CITIES: InfoElementType[]
}
export type ActionType =
    { type: "ADD_EXP", payload: InfoElementType } |
    { type: "REMOVE_EXP", payload: InfoElementType } |

    { type: "ADD_TECH", payload: InfoElementType } |
    { type: "REMOVE_TECH", payload: InfoElementType } |

    { type: "ADD_CITY", payload: InfoElementType } |
    { type: "REMOVE_CITY", payload: InfoElementType }

