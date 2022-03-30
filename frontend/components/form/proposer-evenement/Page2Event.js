import IntervalleInput from "./IntervalleInput"
import TextInput from "../TextInput"
import Label from "../Label"
import Calendar from "react-calendar"
import LieuInput from "../../recherche/LieuInput"

export default function Page2Event(props) {
    return <>
        <div className="flex-basis-50 align-self-start form">
            <Label label="Quelle date vous conviendrait ?" id="date"></Label>
            <Calendar onChange={(e)=>props.setDate(e)} defaultValue={props.date}></Calendar>
        </div>
        <div className="flex-basis-50 pe-5">
            <IntervalleInput label="Horaires de l'évènement" type="time" id="horaire" placeholder1="..h.." placeholder2="..h.." label1="Début" label2="Fin" setValues={(e)=>props.setHoraires(e)} defaultValues={props.horaires}></IntervalleInput>
            <Label label="Lieu de l'évenement" ></Label>
            <div className="input-lieu  mb-3">
            <LieuInput label="Lieu de l'évenement" id="lieu" placeholder="Entrez l'adresse de votre lieu de rencontre" type="amenity" defaultValue={props.lieu?.properties?.name} setValue={(e)=>props.setLieu(e)}/>
            </div>{/* <TextInput label="Lieu de l'évenement" id="lieu" placeholder="Entrez l'adresse de votre lieu de rencontre" setValue={(e)=>props.setLieu(e)}></TextInput> */}
            <IntervalleInput label="Nombre de participants (optionnel)" id="nbParticipants" setValues={e=>props.setNbParticipants(e)} type="number" defaultValues={props.nbParticipants}/>
            <IntervalleInput label='Âge participants (optionnel)' id="age" placeholder1="Pas d'âge minimum" placeholder2="Pas d'âge maximum" setValues={e=>props.setAgeParticipants(e)} type="number" defaultValues={props.ageParticipants}/>
        </div>
    </>
}