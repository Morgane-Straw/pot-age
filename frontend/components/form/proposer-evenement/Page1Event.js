import InlineRadio from "./InlineRadio";
import TextInput from "../TextInput";
import Dropdown from "./Dropdown";
import Label from "../Label";
import Parcourir from "./Parcourir";

export default function Page1Event(props) {
    return <>
           <div className="flex-basis-50 pe-5 ">
            <TextInput setValue={e => props.setTitre(e)} id="titre" label="Quel est le titre de l'annonce ?"></TextInput>
            <InlineRadio setValue={(e)=>props.setType(e)}></InlineRadio>
            <Dropdown setValue={e=>props.setCategorie(e)}></Dropdown>
            <Label label="Description de l'activité" id="description"></Label>
            <textarea onChange={e=>props.setDescription(e)} className="form-control d-block h-text-area" placeholder="Décrivez en quelques phrase l'activité que vous proposez"></textarea>
        </div>
        <div className="flex-basis-50 pe-5 flex-grow-1 align-self-start">
            <Parcourir onClick={()=>''}></Parcourir>
        </div>

    </>
}