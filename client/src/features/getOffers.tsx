import {Dispatch, ReactElement} from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default async (setOffers: Dispatch<ReactElement[]>, name: string, path: string, OfferItem: any) => {
    const toastId = toast.loading(`Fetching ${name} offers...`)

    axios.get(path)
        // @ts-ignore Adding fetched data to offers
        .then(({data}) => setOffers(prev => [...prev, ...data.map((offer: any) => <OfferItem key={offer.id} data={offer} />)]))
        // notifying --> offers found
        .then(() => {
            toast.success(`Fetched offers from ${name}!`)
        })
        // notifying --> no offers found
        .catch(err => err.response.status === 404 && toast.error(`No offers found on ${name}!`))
        // notifying --> network error
        .catch(() => toast.error(`Network error!`))
        // dismissing loading toast
        .finally(() => toast.dismiss(toastId))
}
