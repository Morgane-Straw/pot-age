import { useState } from "react"
import { FloatingLabel } from "../form/proposer-evenement/FloatingLabel";
import ModaleEvenement from "./ModaleEvenement";

export default function CarteEvenement(props) {
    const [favoris, setFavoris] = useState(props.favoris ? props.favoris : false);
    const [hoverFavButton, setHoverFavButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="card position-relative">
            <div className="position-absolute">
                <FloatingLabel>{props.ageParticipants ?
                    props.event.ageParticipants[0] ?
                        props.event.ageParticipants[1] ?
                            props.event.ageParticipants[0] + ' à ' + props.event.ageParticipants[1] + "ans"
                            : "A partir de " + props.event.ageParticipants[0] + "ans"
                        : props.event.ageParticipants[1] ?
                            "Jusqu'à " + props.event.ageParticipants[1] + "ans"
                            : ""
                    : ""}</FloatingLabel>
            </div>
            <div className="card-image">
                <img src={props.event.img.regular} className="w-card-img" alt="Illustration garçon jouant au basketball" />
            </div>

            <div className="card-body text-primary">

                <div class="card-name">
                    <h2>{props.event.titre}</h2>
                </div>

                <div className="card-description">
                    <p> {props.event.description}</p>
                </div>
                <div className="d-flex flex-row align-items-center">
                    {/* {} */}
                    <button className={"button1 card-button2 rounded-1 text-center px-2 py-1 me-2 d-flex flex-row align-items-center" + (hoverFavButton ? " bg-primary text-white" : " bg-white text-primary border border-1 border-primary")}
                        onMouseEnter={() => setHoverFavButton(true)} onMouseLeave={() => setHoverFavButton(false)}
                        onClick={() => setFavoris(!favoris)}>
                        <img src={`/img/coeur_${favoris ? "plein" : "creux"}_${hoverFavButton ? "blanc" : "bleu"}.png`} className="icon-favoris mx-1" />
                        Ajouter aux favoris
                    </button>
                    <button className="button1 card-button1 rounded-1 bg-primary text-white text-center px-2 py-1" type="submit"
                        onClick={() => setShowModal(true)}>Consulter</button>
                    <ModaleEvenement show={showModal} handleClose={() => setShowModal(false)} event={props.event}></ModaleEvenement>
                </div>

            </div>
        </div>

    )
}