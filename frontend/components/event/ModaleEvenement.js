//mettre deux colonnes

import { FloatingLabel } from "../form/proposer-evenement/FloatingLabel";
import { useState } from "react";
import MiniBio from "../user/MiniBio";
import BoutonFavoris from "./BoutonFavoris";
import BoutonParticiper from "./BoutonParticiper";
export default function ModaleEvenement(props) {
    const [favoris, setFavoris] = useState(props.favoris ? props.favoris : false);
    const [hoverFavButton, setHoverFavButton] = useState(false);

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    function substractHours(hs) {
        let h1 = hs[0].split(':');
        h1 = parseInt(h1[0]) * 60 + parseInt(h1[1])
        let h2 = hs[1].split(':');
        h2 = parseInt(h2[0]) * 60 + parseInt(h2[1])
        return Math.floor((h2 - h1) / 60) + "h" + ((h2 - h1) % 60 ? (h2 - h1) % 60 : "")
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main py-1 px-3 text-dark position-relative">

                <div className="text-end position-absolute z-index-top top-right">
                    <button type="button" onClick={props.handleClose}
                        className="rounded bg-danger text-white px-2 py-1 my-1">
                        <img src="img/xmark-solid.svg" className="h-1 me-2"></img>
                        Fermer
                        {/* icon close */}
                    </button>
                </div>
                <div className="d-flex flex-row">
                    <div className="flex-basis-60">
                        <div className="position-relative  rounded-top-2 my-2 w-previsualisation-event">
                            <div className="position-absolute d-flex flex-row p-2">
                                <FloatingLabel>{props.event.ageParticipants ?
                                    props.event.ageParticipants[0] ?
                                        props.event.ageParticipants[1] ?
                                            props.event.ageParticipants[0] + ' à ' + props.event.ageParticipants[1] + "ans"
                                            : "A partir de " + props.event.ageParticipants[0] + "ans"
                                        : props.event.ageParticipants[1] ?
                                            "Jusqu'à " + props.event.ageParticipants[1] + "ans"
                                            : ""
                                    : ""}</FloatingLabel>
                                {props.event.horaires ? <FloatingLabel>{substractHours(props.event.horaires)}</FloatingLabel> : ""}
                                {props.event.lieu ? <FloatingLabel>{props.event.lieu}</FloatingLabel> : ""}

                            </div>
                            {props.event.img.regular ?
                                <img src={props.event.img.regular}
                                    className="img-confirmer-event rounded-top-2 img-event-modale"></img>
                                : ""}
                            <div className="px-4">
                                <div className="d-flex flex-row justify-content-end my-1">
                                    <BoutonFavoris></BoutonFavoris>
                                    <BoutonParticiper eventId={props.event.id}></BoutonParticiper>
                                </div>
                                <h3 className="text-primary py-2 ">{props.event.titre}</h3>
                                <div className="d-flex flex-row justify-content-between">
                                    <span>
                                        <span>{props.event.date ? capitalizeFirstLetter(props.event.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })) : ""}</span>
                                        <span>{", de " + props.event.horaires[0] + " à " + props.event.horaires[1]}</span>
                                        <span>{", " + props.event.lieu}</span>
                                    </span>
                                    <span className="text-end"> {props.event.nbParticipants ?
                                        props.event.nbParticipants[0] ?
                                            props.event.nbParticipants[1] ?
                                                props.event.nbParticipants[0] + ' à ' + props.event.nbParticipants[1]
                                                : "A partir de " + props.event.nbParticipants[0]
                                            : props.event.nbParticipants[1] ?
                                                "Jusqu'à " + props.event.nbParticipants[1]
                                                : ""
                                        : ""}
                                        {props.event.nbParticipants ? props.event.nbParticipants[0] || props.event.nbParticipants[1] ? ' participants' : '' : ''}</span>
                                </div>
                                <hr></hr>
                                <p>{props.event.description}</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex-basis-40 d-flex flex-column align-items-center mt-3 me-3">
                        <MiniBio user={{
                            avatar: { small: "img/man-ga9bafa7c6_1920.jpg" },
                            prenom: 'Jean',
                            nom: 'Serien',
                            age: "68ans",
                            id:"js1",
                            introduction: "Jeune retraité, je cherche à donner de mon temps en proposant de transmettre mon savoir au travers d’activités manuelles comme le bricolage ou le jardinage par exemple. d’activités manuelles comme le bricolage ou le jardinage par exemple."
                        }}></MiniBio>
                    </div>
                </div>
            </section>
        </div>)
}