import { useQuery } from "react-query";
import axios from "axios";

export default () => {

    const JustJoin = useQuery('justjoin', () => axios.get('/api/just-join?tech=JAVASCRIPT&exp=JUNIOR&cities=WROCLAW'), {
        onSuccess: ({data}) => {
            console.log(data)
        }
    })

    return (
        <div>list</div>
    )
}