import React, {Dispatch, useContext, useRef, useState} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {IInfo, IParam} from "../assets/types";
import {ActionType, ActionTypes, StateType} from "../context/reducer";
import {CompasIcon} from "../assets/icons";
import toast from "react-hot-toast";

export default ({setParam, submit, state}: {setParam: Dispatch<ActionType>, submit: () => void, state: StateType}) => {

    // INFO FROM DB ABOUT AVAILABLE CITIES, TECHNOLOGIES, EXPERIENCE
    const [info, setInfo] = useState<IInfo>({tech: [], exp: [], city: []})
    useQuery("info", () => axios.get("/api/info"), {
        onSuccess: (({data}) => setInfo(data)),
        refetchOnWindowFocus: false,
    })


    const [isMenuHidden, setIsMenuHidden] = useState(false)

    const handleSubmit = () => {
        if (!state.TECH || !state.EXP || !state.CITY) return toast.error('Please select all options!')
        setIsMenuHidden(true)
        submit()
    }

    return (
        <div className={`form ${isMenuHidden ? "hidden" : ""}`}>
            <button onClick={() => setIsMenuHidden(prev => !prev)} className="form__menu"><CompasIcon/></button>
            <ButtonsList name="tech" list={info.tech} cmd="SET_TECH" setParam={setParam}/>
            <ButtonsList name="experience" list={info.exp} cmd="SET_EXP" setParam={setParam}/>
            <ButtonsList name="city" list={info.city} cmd="SET_CITY" setParam={setParam}/>
            <button onClick={handleSubmit} className="form__submit">Submit</button>
        </div>
    )
}


const ButtonsList = ({name, list, cmd, setParam}: {name: string, list: IParam[], cmd: ActionTypes, setParam: Dispatch<ActionType>}) => {

    const [selected, setSelected] = useState<IParam | null>(null)

    return (
        <div className="form__category">
            <p className="form__category-title">{name}</p>
            <div className="form__category-btns">
                {list?.map((item: IParam, key: number) =>
                    <button key={key} onClick={() => {
                        setParam({type: cmd, item: item})
                        setSelected(item)
                    }} className={`form__category-btns-item ${item === selected ? "active" : ""}`} >
                        {item.name}
                    </button>)}
            </div>
        </div>
    )
}