import { useQuery } from "react-query";
import axios from "axios";
import {useContext, useState} from "react";
import {Context} from "../context";
import {StateType} from "../context/reducer";

export default ({params}: {params: StateType }) => {

    const {state, dispatch} = useContext(Context)
    const {TECH, EXP, CITY} = state
    const [justJoinList, setJustJoinList] = useState([])
    const [noFluffJobsList, setNoFluffJobsList] = useState([])

    // const handleSubmit = async () => {
    //     axios.get(`/api/no-fluff-jobs?tech=${TECH.map((i) => i.no_fluff_jobs)}&exp=${EXP.map((i) => i.no_fluff_jobs)}&cities=${CITIES.map((i) => i.no_fluff_jobs).join("%20")}`).then(({data}) => setNoFluffJobsList(data))
    //     axios.get(`/api/just-join?tech=${TECH.map((i) => i.just_join)}&exp=${EXP.map((i) => i.just_join)}&cities=${CITIES.map((i) => i.just_join).join("%20")}`).then(({data}) => setJustJoinList(data))
    // }

    console.log(justJoinList)

    return (
        <div>
            {/*<div>*/}
            {/*    <button onClick={handleSubmit} >Submit</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {TECH.map((tech: InfoElementType, key: number) => <p key={key} >{tech.name}</p>)}*/}
            {/*    <br/>*/}
            {/*    {EXP.map((exp: InfoElementType, key: number) => <p key={key} >{exp.name}</p>)}*/}
            {/*    <br/>*/}
            {/*    {CITIES.map((city: InfoElementType, key: number) => <p key={key} >{city.name}</p>)}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>justjoin.it {justJoinList.length}</p>*/}
            {/*    <p>nofluffjobs.com: {noFluffJobsList.length}</p>*/}
            {/*    <p>total: {justJoinList.length + noFluffJobsList.length}</p>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {justJoinList.map((offer: any, key: number) => <li key={key} >*/}
            {/*        <p>{offer.title}</p>*/}
            {/*        <a target="_blank" href={`https://justjoin.it/offers/${offer.id}`} >link</a>*/}
            {/*    </li>)}*/}
            {/*    {noFluffJobsList.map((offer: any, key: number) => <li key={key} >*/}
            {/*        <p>{offer.title}</p>*/}
            {/*        <a target="_blank" href={`https://nofluffjobs.com/${offer.url}`} >link</a>*/}
            {/*    </li>)}*/}
            {/*</ul>*/}
        </div>
    )
}