import InlineRadio from "./InlineRadio";
import TextInput from "../TextInput";
import Dropdown from "./Dropdown";
import Label from "../Label";
import ImportImage from "./ImportImage";
import { useState, useEffect } from "react";

export default function Page1Event(props) {
    const [img, setImg] = useState(props.image);
    const [type,setType]=useState(props.type)
    useEffect(() => { props.setImage(img) }, [img])
    useEffect(()=>props.setType(type),[type]);
    return <>
        <div className="flex-basis-50 pe-5 ">
            <TextInput setValue={e => props.setTitre(e)} id="titre" label="Quel est le titre de l'annonce ?" defaultValue={props.titre?props.titre:""} placeholder="Quel est le titre de l'annonce ?"></TextInput>
            <InlineRadio setValue={(e) => setType(e) } checked={type?type:"proposition"}></InlineRadio>
            <Dropdown setValue={e => props.setCategorie(e)} defaultValue={props.categorie}></Dropdown>
            <Label label="Description de l'activité" id="description"></Label>
            <textarea onChange={e => props.setDescription(e.target.value)} className="form-control d-block h-text-area" placeholder="Décrivez en quelques phrase l'activité que vous proposez" defaultValue={props.description?props.description:""}></textarea>
        </div>
        <div className="flex-basis-50 pe-5 flex-grow-1 align-self-start ">
            <ImportImage setImage={e => setImg(e)} image={props.image}/>
            {type == "demande" ?
                <TextInput label="Lieu de l'évenement" id="lieu"  setValue={(e) => props.setLieu(e)} defaultValue={props.lieu?props.lieu:""} placeholder="Entrez l'adresse de votre lieu de rencontre"></TextInput>
                : ""}
        </div>

    </>
}