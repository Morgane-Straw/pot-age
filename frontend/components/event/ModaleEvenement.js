//mettre deux colonnes

import { FloatingLabel } from "../form/proposer-evenement/FloatingLabel";
import { useState } from "react";
import MiniBio from "../user/MiniBio";
export default function ModaleEvenement(props) {
    const [favoris, setFavoris] = useState(props.favoris ? props.favoris : false);
    const [hoverFavButton, setHoverFavButton] = useState(false);

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main py-1 px-3 text-dark ">

                <div className="text-end ">
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
                                {props.event.horaires ? <FloatingLabel>{props.event.horaires[0] + " à " + props.event.horaires[1]}</FloatingLabel> : ""}
                                {props.event.lieu ? <FloatingLabel>{props.event.lieu}</FloatingLabel> : ""}

                            </div>
                            {props.event.img.regular ?
                                <img src={props.event.img.regular}
                                    className="img-confirmer-event rounded-top-2 img-event-modale"></img>
                                : ""}
                            <div className="px-4">
                                <div className="d-flex flex-row justify-content-end my-1">
                                    <button className={"button1 card-button2 rounded-1 text-center px-2 py-1 me-2 d-flex flex-row align-items-center" + (hoverFavButton ? " bg-primary text-white" : " bg-white text-primary border border-1 border-primary")}
                                        onMouseEnter={() => setHoverFavButton(true)} onMouseLeave={() => setHoverFavButton(false)}
                                        onClick={() => setFavoris(!favoris)}>
                                        <img src={`/img/coeur_${favoris ? "plein" : "creux"}_${hoverFavButton ? "blanc" : "bleu"}.png`} className="icon-favoris mx-1" />
                                        Ajouter aux favoris
                                    </button>
                                    <button className="button1 card-button1 rounded-1 bg-primary text-white text-center px-2 py-1" type="submit">
                                        Participer</button>
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
                    <div className="flex-basis-40">
                        <MiniBio user={{
                            avatar: { small: "img/man-ga9bafa7c6_1920.jpg" },
                            prenom: 'Jean',
                            nom: 'Serien',
                            age:"68ans",
                            introduction: "Jeune retraité, je cherche à donner de mon temps en proposant de transmettre mon savoir au travers d’activités manuelles comme le bricolage ou le jardinage par exemple. d’activités manuelles comme le bricolage ou le jardinage par exemple."
                        }}></MiniBio>
                    </div>
                </div>
            </section>
        </div>)
}