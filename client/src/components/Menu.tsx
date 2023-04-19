import React, {Dispatch, useEffect, useState} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {IInfo, IParam} from "../assets/types";
import {ActionType, ActionTypes, StateType} from "../features/reducer";
import {CompasIcon, SearchIcon} from "../assets/icons";
import toast from "react-hot-toast";

export default ({setParam, submit, state}: {setParam: Dispatch<ActionType>, submit: () => void, state: StateType}) => {

    // handling menu visibility
    const [isMenuHidden, setIsMenuHidden] = useState(false)

    // fetching menu config from server
    const [info, setInfo] = useState<IInfo>({tech: [], exp: [], city: []})
    useEffect(() => {
        axios.get("/api/info/")
            .then(({data}) => setInfo(data))
    }, [])


    // checking if all options are selected
    // there hide menu
    // and submit form
    const handleSubmit = () => {
        if (!state.TECH || !state.EXP || !state.CITY) return toast.error('Please select all options!')
        setIsMenuHidden(true)
        submit()
    }


    return (
        <div className={`menu ${isMenuHidden ? "hidden" : ""}`}>
            {/* hamburger to handle menu visibility in mobile mode */}
            <button onClick={() => setIsMenuHidden(prev => !prev)} className="menu__hamburger"><CompasIcon/></button>

            <ButtonsList name="technologia" list={info.tech} cmd="SET_TECH" setParam={setParam}/>
            <ButtonsList name="doświadczenie" list={info.exp} cmd="SET_EXP" setParam={setParam}/>
            <ButtonsList name="lokalizacja" list={info.city} cmd="SET_CITY" setParam={setParam}/>

            {/* submit button */}
            <button onClick={handleSubmit} className="menu__submit">
                <SearchIcon/>
                Szukaj
            </button>
        </div>
    )
}


const ButtonsList = ({name, list, cmd, setParam}: {name: string, list: IParam[], cmd: ActionTypes, setParam: Dispatch<ActionType>}) => {

    const [selected, setSelected] = useState<IParam | null>(null)

    return (
        <div className="menu__category">

            <p className="menu__category-title">{name}</p>

            <div className="menu__category-btns">
                {list?.map((item: IParam, key: number) =>
                    <button key={key} className={`menu__category-btns-item ${item === selected ? "active" : ""}`}
                            onClick={() => {
                                setParam({type: cmd, item: item})
                                setSelected(item)
                            }} >{item.name}</button>)}
            </div>
        </div>
    )
}