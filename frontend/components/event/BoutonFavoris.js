import { useState } from "react";
export default function BoutonFavoris(props) {
    const [favoris, setFavoris] = useState(props.favoris ? props.favoris : false);
    const [hoverFavButton, setHoverFavButton] = useState(false);

    return <button className={"button1 card-button2 rounded-1 text-center px-2 py-1 me-2 d-flex flex-row align-items-center border border-1 border-primary" + (hoverFavButton ? " bg-primary text-white" : " bg-white text-primary ")}
        onMouseEnter={() => setHoverFavButton(true)} onMouseLeave={() => setHoverFavButton(false)}
        onClick={() => setFavoris(!favoris)}>
        <img src={`/img/coeur_${favoris ? "plein" : "creux"}_${hoverFavButton ? "blanc" : "bleu"}.png`} className="icon-favoris mx-1" />
        Ajouter aux favoris
    </button>

}