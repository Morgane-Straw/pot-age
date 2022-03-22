import { useState, useEffect } from "react";
export default function MdpInput(props) {
    const [hidden, setHidden] = useState(true);
    const [password, setPassword] = useState(props.password);
    useEffect(()=> props.setPassword(password), [password]);
    return <>
        <label className="text-primary fw-bold " htmlFor="mdp">
            <i className="fas fa-lock mx-2" />{props.label ? props.label:"Mot de passe"}
        </label>
        <div className="input-group">
            <input className="form-control" type={hidden ? 'password' : 'text'} defaultValue={props.password}
                onChange={(e) => setPassword(e.target.value)} name="pass" placeholder={props.label ? props.label : "Mot de passe"} id="pass" />
            <div className="input-group-text">
                <i onClick={() => setHidden(!hidden)} className="fas fa-eye"></i>
            </div>
        </div></>
}