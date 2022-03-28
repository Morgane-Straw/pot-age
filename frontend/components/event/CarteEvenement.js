import { useState } from "react"
import { FloatingLabel } from "../form/proposer-evenement/FloatingLabel";
import BoutonFavoris from "./BoutonFavoris";
import ModaleEvenement from "./ModaleEvenement";

export default function CarteEvenement(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="card position-relative">
            <div className="position-absolute">
                <FloatingLabel>{props.event.ageParticipants ?
                    props.event.ageParticipants[0] ?
                        props.event.ageParticipants[1] ?
                            props.event.ageParticipants[0] + ' à ' + props.event.ageParticipants[1] + "ans"
                            : "A partir de " + props.event.ageParticipants[0] + "ans"
                        : props.event.ageParticipants[1] ?
                            "Jusqu'à " + props.event.ageParticipants[1] + "ans"
                            : ""
                    : ""}
                    </FloatingLabel>
            </div>
            <div className="card-image">
                <img src={props.event.img.regular} className="wh-card-img" alt="Illustration garçon jouant au basketball" />
            </div>

            <div className="card-body text-primary">

                <div class="card-name">
                    <h2>{props.event.titre}</h2>
                </div>

                <div className="card-description">
                    <p> {props.event.description.slice(0,105)+'...'}</p>
                </div>
                <div className="d-flex flex-row align-items-center">
                    {/* {} */}
                    <BoutonFavoris></BoutonFavoris>
                    <button className="button1 card-button1 rounded-1 bg-primary text-white text-center px-2 py-1" type="submit"
                        onClick={() => setShowModal(true)}>Consulter</button>
                    <ModaleEvenement show={showModal} handleClose={() => setShowModal(false)} event={props.event}></ModaleEvenement>
                </div>

            </div>
        </div>

    )
}