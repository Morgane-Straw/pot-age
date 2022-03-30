import IntervalleInput from "./IntervalleInput"
import TextInput from "../TextInput"
import Label from "../Label"
import Calendar from "react-calendar"

export default function Page2Event() {
    return <>
        <div className="flex-basis-50 align-self-start form">
            <Label label="Quelle date vous conviendrait ?" id="date"></Label>
            <Calendar></Calendar>
        </div>
        <div className="flex-basis-50 pe-5">
            <IntervalleInput label="Horaires de l'évènement" id="horaire" placeholder1="..h.." placeholder2="..h.." label1="Début" label2="Fin"></IntervalleInput>
            <TextInput label="Lieu de l'évenement" id="lieu" placeholder="Entrez l'adresse de votre lieu de rencontre"></TextInput>
            <IntervalleInput label="Nombre de participants (optionnel)" id="nbParticipants" />
            <IntervalleInput label='Âge participants (optionnel)' id="age" placeholder1="Pas d'âge minimum" placeholder2="Pas d'âge maximum" />
        </div>
    </>
}