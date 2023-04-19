import {ReactElement} from "react";
import {Toaster} from "react-hot-toast";


export default ({children}: {children: ReactElement}) => {

    return (
        <>
            {children}
            <Toaster/>
        </>
    )
}