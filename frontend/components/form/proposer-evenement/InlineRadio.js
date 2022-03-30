import { useState, useEffect } from "react"

export default function InlineRadio(props) {
    const[checked,setChecked]=useState(props.checked)
    useEffect(()=>props.setValue(checked), [checked]);
    return <div className="mb-3 ">
        
        <div className="text-primary fw-bold ms-1" >
            Type d'annonce
        </div>
        <div className="d-flex flex-row mt-2">
            <input className="m-2 " type="radio" name="proposition" id="proposition" value="proposition" checked={checked=="proposition"} onClick={()=>setChecked("proposition")} /><label htmlFor="proposition">Proposition</label>
            <input className="m-2 " type="radio" name="demande" id="demande" value="demande" checked={checked=="demande"} onClick={()=>setChecked("demande")}/><label htmlFor="demande">Demande</label>
        </div>
    </div>
}