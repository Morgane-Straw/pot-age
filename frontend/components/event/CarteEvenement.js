import { useState } from "react"
import { FloatingLabel } from "../form/proposer-evenement/FloatingLabel";
import BoutonFavoris from "./BoutonFavoris";
import ModaleEvenement from "./ModaleEvenement";

export default function CarteEvenement(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="card position-relative flex-grow-0 flex-shrink-0 mb-3">
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
                <img src={props.event.img.regular} className="wh-card-img cursor-pointer" alt="Illustration garçon jouant au basketball" 
                onClick={() => setShowModal(true)}/>
            </div>

            <div className="card-body text-primary custom">

                <div className="card-name fs-4 fw-bold cursor-pointer" onClick={() => setShowModal(true)}>
                    {props.event.titre.length>21?props.event.titre.slice(0,19)+'...':props.event.titre}
                </div>

                <div className="card-description cursor-pointer">
                    <p onClick={() => setShowModal(true)}>
                        {props.event.description.slice(0, 75) + '...'}</p>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mx-1">
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