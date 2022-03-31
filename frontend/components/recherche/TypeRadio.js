import { useState, useEffect, useContext } from "react"
import RechercheContext from "./RechercheContext";

export default function TypeRadio(props) {
    const value = useContext(RechercheContext);

    const [show, setShow] = useState(false);
    return <div className="d-flex flex-column">
        <div onClick={() => setShow(!show)}>
            {value.recherche.type ?
                value.recherche.type == "propositions" ?
                    "Propositions" : "Demandes"
                : <span className="placeholder">
                    {props.placeholder}</span>
            }</div>
        {/* <div className={showHideClassName} onClick={() => setShow(!show)}> */}
        {show ? <div className="bg-light-gray ps-2 pe-5 pb-2" onClick={() => setShow(!show)}>

            <div className="d-flex flex-column mt-2">
                <div onClick={() => { value.setType("propositions"); setShow(false) }}>
                    <input
                        className="m-2 " type="radio"
                        name="propositions" id="propositions"
                        value="propositions" checked={value.recherche.type == "propositions"}
                    />
                    <label htmlFor="propositions">Proposition</label></div>

                <div onClick={() => { value.setType("demandes"); setShow(false) }}>
                    <input className="m-2 " type="radio"
                        name="demandes" id="demandes"
                        value="demandes" checked={value.recherche.type == "demandes"}
                    />
                    <label htmlFor="demandes">Demande</label></div>
            </div>
        </div> : <></>}
    </div>
}

