import Menu from "./components/Menu";
import React, { ReactElement, useReducer, useState} from "react";
import {reducer} from "./features/reducer";
import {JustJoinItOffer, NoFluffJobsOffer} from "./components/OfferItems";
import getOffers from "./features/getOffers";
import Main from "./components/Main";

export default () => {

    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, {TECH: null, EXP: null, CITY: null});
    const [offers, setOffers] = useState<ReactElement[]>([])
    const {TECH, EXP, CITY} = state

    const handleSubmit= () => {
        // clearing offers
        setOffers([])

        // fetching offers
        getOffers(setOffers, 'justjoin.it', `/api/just-join?tech=${TECH.just_join}&exp=${EXP.just_join}&city=${CITY.just_join}`, JustJoinItOffer)
        getOffers(setOffers, 'nofluffjobs.com', `/api/no-fluff-jobs?tech=${TECH.no_fluff_jobs}&exp=${EXP.no_fluff_jobs}&city=${CITY.no_fluff_jobs}`, NoFluffJobsOffer)
    }


    return (
        <div className="App" >

            <Menu submit={handleSubmit} setParam={dispatch} state={state}/>

            <Main offers={offers} />

        </div>
    )
}