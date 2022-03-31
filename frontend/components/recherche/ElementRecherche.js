import DatesPicker from "./DatesPicker";
import TypeRadio from "./TypeRadio";
import LieuInput from "./LieuInput";
import { useState,useEffect, useContext } from "react";
import RechercheContext from "./RechercheContext";



export default function ElementRecherche(props) {
    const value = useContext(RechercheContext);

    return (
        <div className={"my-2 px-2 flex-grow-1 border-gray  "+(props.type=="address"?"w-elt-lieu ":"w-elt-barre ") + (props.border)}>
            <div className="ms-1 text-primary fw-bold">{props.label}</div>
            <div className="d-flex flex-row align-items-start mt-1">
                <img src={props.img} className='recherche-icon ms-1 me-3 mt-1 ' />
                {props.type == "radio" ?
                    <TypeRadio  placeholder={props.placeholder}></TypeRadio>
                    : (props.type == "date" ?
                        <DatesPicker placeholder={props.placeholder}></DatesPicker> :
                        props.type == "address" ?
                            <LieuInput placeholder={props.placeholder} ></LieuInput> :
                            <input className="unset" onChange={(e)=>value.setActivite(e.target.value)} defaultValue={value.recherche.activite} placeholder={props.placeholder}/>)}
            </div>
        </div>)
}