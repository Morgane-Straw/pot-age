import TextInput from "../TextInput";
import Mdp from "./Mdp";
import MdpInput from "./MdpInput";
import MdpCondition from "./MdpCondition";
import { useEffect, useState } from "react";

export default function Page2(props) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [samePassword, setSamePassword] = useState(false)
    useEffect(() => setSamePassword(confirmPassword && confirmPassword == password), [password]);
    return <>
        <div className="flex-basis-50">
            <img src='img/inscription_page2.svg'></img>
        </div>
        <div className="flex-basis-50 pe-5">
            <h2 className="text-primary fs-4 text-center">Identifiants de connexion</h2>

            <TextInput id="email" type="email" label="E-mail"><i className="fas fa-envelope"></i></TextInput>
            {/* <TextInput id="mdp" label="Mot de passe"><i class="fas fa-lock"></i></TextInput> */}
            <Mdp password={password} setPassword={setPassword}></Mdp>
            {/* <TextInput id="confirm-mdp" label="Confirmer le mot de passe"><i className="fas fa-lock"></i></TextInput> */}
            <MdpInput password={confirmPassword} setPassword={setConfirmPassword} label="Confirmer le mot de passe" ></MdpInput>
            <MdpCondition active={confirmPassword && confirmPassword == password} wide>Mots de passes correspondant</MdpCondition>
        </div>
    </>
}