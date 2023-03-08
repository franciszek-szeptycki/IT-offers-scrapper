import {useContext, useRef, useState} from "react";
import {Context} from "../context";
import {useQuery} from "react-query";
import axios from "axios";

export default () => {

    const [info, setInfo] = useState<IInfo>({tech: [], exp: [], city: []})

    useQuery("info", () => axios.get("/api/info").then(({data}) => setInfo(data)))

    const {dispatch} = useContext(Context)

    return (
        <div className="form">
            <div className="form__tech">
                {info.tech.map((tech: InfoElementType, key: number) => (
                    <div className="form__tech-item" key={key} onClick={() => dispatch({type: "ADD_TECH", payload: tech })} >
                        <img src={tech.image} alt={tech.name} />
                    </div>))}
            </div>
            <div>
                {info.exp.map((exp: InfoElementType, key: number) => <button key={key} onClick={() => dispatch({type: "ADD_EXP", payload: exp })} >{exp.name}</button>)}
            </div>
            <div>
                {info.city.map((city: InfoElementType, key: number) => <button key={key} onClick={() => dispatch({type: "ADD_CITY", payload: city })} >{city.name}</button>)}
            </div>
        </div>
    )
}

interface IInfo {
    tech: InfoElementType[]
    exp: InfoElementType[]
    city: InfoElementType[]
}

export type InfoElementType = {
    id: number
    name: string
    just_join: string
    no_fluff_jobs: string
    pracuj: string
    image?: string
}