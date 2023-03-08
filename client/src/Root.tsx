import { QueryClient, QueryClientProvider } from 'react-query'
import {Context, initialState} from "./context";
import {useReducer} from "react";
import {reducer, StateType} from "./context/reducer";


const queryClient = new QueryClient()
export default ({children, initState = initialState}: {children: any, initState?: StateType}) => {

    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value={{state, dispatch}}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Context.Provider>
    )
}