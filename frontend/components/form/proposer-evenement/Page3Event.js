import { FloatingLabel } from "./FloatingLabel";

export default function Page3Event(props) {
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function substractHours(hs){
        let h1=hs[0].split(':');
        h1= parseInt(h1[0])*60+parseInt(h1[1])
        let h2=hs[1].split(':');
        h2= parseInt(h2[0])*60+parseInt(h2[1])
        return Math.floor((h2-h1)/60)+"h"+((h2-h1)%60?(h2-h1)%60:"")
    }

    return <div className="position-relative shadow-card rounded-top-2 my-2 w-previsualisation-event">
        <div className="position-absolute d-flex flex-row p-2 ">
            <FloatingLabel>{props.ageParticipants ?
                props.ageParticipants[0] ?
                    props.ageParticipants[1] ?
                        props.ageParticipants[0] + ' à ' + props.ageParticipants[1] + "ans"
                        : "A partir de " + props.ageParticipants[0] + "ans"
                    : props.ageParticipants[1] ?
                        "Jusqu'à " + props.ageParticipants[1] + "ans"
                        : ""
                : ""}</FloatingLabel>
            {/* {props.horaires ? <FloatingLabel>{props.horaires[0] + " à " + props.horaires[1]}</FloatingLabel> : ""} */}
            {props.horaires ? <FloatingLabel>{substractHours(props.horaires)}</FloatingLabel> : ""}
            {props.lieu?.properties ? <FloatingLabel>{props.lieu.properties.name}</FloatingLabel> : ""}

        </div>
        {props.image.regular ?
            <img src={props.image.regular}
                className="img-confirmer-event rounded-top-2"></img>
            : ""}
        <div className="px-4">
            <h3 className="text-primary py-2 ">{props.titre}</h3>
            <div className="d-flex flex-row justify-content-between">
                <span>
                    <span>{props.date ? capitalizeFirstLetter(props.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })) : ""}</span>
                    <span>{", de " + props.horaires[0] + " à " + props.horaires[1]}</span>
                    <div>{props.lieu?.properties ? props.type=="demande"?props.lieu.properties.city+', '+props.lieu.properties.postcode : props.lieu.properties.name+', '+props.lieu.properties.city+', '+props.lieu.properties.postcode:""}</div>
                </span>
                <span className="text-end"> {props.nbParticipants ?
                    props.nbParticipants[0] ?
                        props.nbParticipants[1] ?
                            props.nbParticipants[0] + ' à ' + props.nbParticipants[1]
                            : "A partir de " + props.nbParticipants[0]
                        : props.nbParticipants[1] ?
                            "Jusqu'à " + props.nbParticipants[1]
                            : ""
                    : ""}
                    {props.nbParticipants ? props.nbParticipants[0] || props.nbParticipants[1] ? ' participants' : '' : ''}</span>
            </div>
            <hr></hr>
            <p>{props.description}</p>
        </div>
        {/* {props.titre}
        {props.type}
        {props.categorie}
        {props.description}
        {props.date?.toString()}
        {props.horaires}
        {props.lieu}
        {props.nbParticipants}
         */}
    </div>
}