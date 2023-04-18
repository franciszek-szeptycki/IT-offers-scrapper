import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactElement} from "react";
import {ToastContainer} from "react-toastify";
import {Toaster} from "react-hot-toast";


const queryClient = new QueryClient()
export default ({children}: {children: ReactElement}) => {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster/>
        </QueryClientProvider>
    )
}