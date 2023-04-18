import Form from "./components/Form";
import {Dispatch, ReactElement, useReducer, useState} from "react";
import {reducer} from "./context/reducer";
import toast from "react-hot-toast";
import {JustJoinItOffer, NoFluffJobsOffer} from "./components/OfferItems";
import axios from "axios";

export default () => {

    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, {TECH: null, EXP: null, CITY: null});
    const [offers, setOffers] = useState<ReactElement[]>([])
    const {TECH, EXP, CITY} = state

    const handleSubmit= () => {

        setOffers([])

        getOffers(setOffers, 'justjoin.it', `/api/just-join?tech=${TECH.just_join}&exp=${EXP.just_join}&city=${CITY.just_join}`, JustJoinItOffer)
        getOffers(setOffers, 'nofluffjobs.com', `/api/no-fluff-jobs?tech=${TECH.just_join}&exp=${EXP.just_join}&city=${CITY.just_join}`, NoFluffJobsOffer)
    }


    return (
        <div className="App" >
            <Form submit={handleSubmit} setParam={dispatch} state={state}/>
            <div className="offer-wrapper" >
                <h1>Offers</h1>
                {TECH?.name && <p>technology: {TECH.name}</p>}
                {EXP?.name && <p>experience: {EXP.name}</p>}
                {CITY?.name && <p>city: {CITY.name}</p>}
                <p>offers: {offers.length}</p>
                {offers.map((offer: ReactElement) => offer)}
            </div>
        </div>
    )
}


export const getOffers = async (setOffers: Dispatch<ReactElement[]>, name: string, path: string, OfferItem: any) => {
    const toastId = toast.loading(`Fetching ${name} offers...`)

    axios.get(path)
        // .then((res) => {console.log(res)})
        // @ts-ignore
        .then(({data}) => setOffers(prev => [...prev, ...data.map((offer: any) => <OfferItem key={offer.id} data={offer} />)]))
        .then(() => {
            toast.success(`Fetched offers from ${name}!`)
        })
        .catch(err => err.response.status === 404 ? toast.error(`No offers found on ${name}!`) : toast.error(`Network error!`))
        .finally(() => toast.dismiss(toastId))
}
