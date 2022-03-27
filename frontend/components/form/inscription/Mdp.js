import MdpCondition from "./MdpCondition";
import MdpInput from "./MdpInput";
import { useState, useEffect } from "react";

export default function Mdp(props) {
    const [password, setPassword] = useState(props.password?props.password:"");
    const test = (p, exp) => {
        const regex = new RegExp(exp);
        return regex.test(p);
    }
    const [conditions, setConditions] = useState({ longueur: false, majuscule: false, minuscule: false, chiffre: false, special: false });
    useEffect(() => {
        setConditions({
            longueur: password.length >= 8,
            majuscule: test(password, "(?=.*?[A-Z])"),
            minuscule: test(password, "(?=.*?[a-z])"),
            chiffre: test(password, "(?=.*?[0-9])"),
            special: test(password, "(?=.*?[#?!@$%^&*-])")
        });
        props.setPassword(password)
    }, [password]);
    useEffect(() => props.setValide(conditions.longueur && conditions.majuscule && conditions.minuscule && conditions.chiffre && conditions.special)
        , [conditions])
    return <div className="mb-3 ">
        <MdpInput password={password} setPassword={setPassword} defaultValue={props.defaultValue}/>
        <div className="d-flex flex-row flex-wrap text-mdp-gray fw-normal">
            <div className="flex-basis-100">Le mot de passe doit contenir</div>

            <MdpCondition active={conditions.longueur}>Au moins 8 caractères</MdpCondition>
            <MdpCondition active={conditions.majuscule}>Une lettre majuscule</MdpCondition>
            <MdpCondition active={conditions.minuscule}>Une lettre minuscule</MdpCondition>
            <MdpCondition active={conditions.chiffre}>Un chiffre</MdpCondition>
            <MdpCondition active={conditions.special} wide>Un caractère spécial (#?!@$%^&*-) </MdpCondition>

        </div>
    </div>
}