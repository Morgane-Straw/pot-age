export default function Page3Event(props){
    return<div>
        {props.titre}
        {props.type}
        {props.categorie}
        {props.description}
        {props.image}
        {props.date}
        {props.horaires}
        {props.nbParticipants}
        {props.ageParticipants}
    </div>
}