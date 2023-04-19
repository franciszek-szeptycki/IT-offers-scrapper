import {ReactElement} from "react";
import {CrossedEyeIcon} from "../assets/icons";

export default ({offers}: {offers: ReactElement[]}) => {

    return (
        <main className="main" >

            {/* displaying offers quantity */}
            {offers.length > 0
                ? (<div className="main__info positive">
                    <p className="main__info-text" >Znaleziono: {offers.length} ofert!</p>
                </div>)
                : (<div className="main__info negative">
                    <CrossedEyeIcon/>
                    <p className="main__info-text">Brak wyników wyszukiwania</p>
                    <p className="main__info-subtext">Zmodyfikuj kryteria i kliknij przecisk "SZUKAJ"</p>
                </div>)
            }

            {/* displaying all fetched offers */}
            {offers}
        </main>
    )
}