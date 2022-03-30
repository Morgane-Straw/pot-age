import DatesPicker from "./DatesPicker";
import TypeRadio from "./TypeRadio";
import LieuInput from "./LieuInput";
import { useState,useEffect } from "react";


export default function ElementRecherche(props) {

    const [input, setInput] = useState();
    useEffect(()=>setInput(<input className="unset" setValue={props.setValue} defaultValue={props.defaultValue} placeholder={props.placeholder}/>),[props.value]);
    return (
        <div className={"my-2 px-2 flex-grow-1 border-gray w-elt-barre " + (props.border)}>
            <div className="ms-1 text-primary fw-bold">{props.label}</div>
            <div className="d-flex flex-row align-items-start mt-1">
                <img src={props.img} className='recherche-icon ms-1 me-3 mt-1 ' />
                {props.type == "radio" ?
                    <TypeRadio setValue={props.setValue} defaultValue={props.defaultValue} placeholder={props.placeholder}></TypeRadio>
                    : (props.type == "date" ?
                        <DatesPicker placeholder={props.placeholder}></DatesPicker> :
                        props.type == "address" ?
                            <LieuInput placeholder={props.placeholder} ></LieuInput> :
                            input)}
            </div>
        </div>)
}