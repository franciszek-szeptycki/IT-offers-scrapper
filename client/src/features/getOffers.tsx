import {Dispatch, ReactElement} from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default async (setOffers: Dispatch<ReactElement[]>, name: string, path: string, OfferItem: any) => {
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
