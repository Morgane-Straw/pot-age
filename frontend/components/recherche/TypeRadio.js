import { useState, useEffect, useRef } from "react"

export default function TypeRadio(props) {
    const [checked, setChecked] = useState(props.defaultValue ? props.defaultValue : '');
    const [show, setShow] = useState(false);
    useEffect(() => props.setValue(checked), [checked]);
    return <div className="d-flex flex-column">
        <div onClick={() => setShow(!show)}>
            {checked ?
                checked == "propositions" ?
                    "Propositions" : "Demandes"
                : <span className="placeholder">
                    {props.placeholder}</span>
            }</div>
        {/* <div className={showHideClassName} onClick={() => setShow(!show)}> */}
        {show ? <div className="bg-light-gray ps-2 pe-5 pb-2" onClick={() => setShow(!show)}>

            <div className="d-flex flex-column mt-2">
                <div onClick={() => { setChecked("propositions"); setShow(false) }}>
                    <input
                        className="m-2 " type="radio"
                        name="propositions" id="propositions"
                        value="propositions" checked={checked == "propositions"}
                    />
                    <label htmlFor="propositions">Proposition</label></div>

                <div onClick={() => { setChecked("demandes"); setShow(false) }}>
                    <input className="m-2 " type="radio"
                        name="demandes" id="demandes"
                        value="demandes" checked={checked == "demandes"}
                    />
                    <label htmlFor="demandes">Demande</label></div>
            </div>
        </div> : <></>}
    </div>
}

