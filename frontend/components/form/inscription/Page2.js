import TextInput from "../TextInput";
import Mdp from "./Mdp";
import MdpInput from "./MdpInput";
import MdpCondition from "./MdpCondition";
import { useEffect, useState } from "react";

export default function Page2(props) {
    const [password, setPassword] = useState(props.mdp);
    const [confirmPassword, setConfirmPassword] = useState(props.mdp);
    const [samePassword, setSamePassword] = useState(props.mdp?true:false);
    const [valide, setValide] = useState(props.mdp?true:false);
    // const [email, setEmail] = useState();
    useEffect(() => setSamePassword(confirmPassword && confirmPassword == password), [password, confirmPassword]);
    useEffect(() => { props.setMdp( samePassword&&valide ?password: null)  }, [samePassword,valide]);
    const [value, setValue] = useState();
    // useEffect(() => props.setEmail(email), [email]);
    return <>

        <div className="flex-basis-50 d-flex flex-row-reverse pe-4">
            <img src='img/inscription_page2.svg' className="h-img-inscription2"></img>
        </div>
        <div className="flex-basis-50 pe-5 flex-grow-1 ">
            <h2 className="text-primary fs-4 text-center">Identifiants de connexion</h2>

            <TextInput id="email" type="email" label="E-mail" setValue={(e) => { props.setEmail(e); }} defaultValue={props.email}><i className="fas fa-envelope" ></i></TextInput>
            {/* <TextInput id="mdp" label="Mot de passe"><i class="fas fa-lock"></i></TextInput> */}
            <Mdp password={password}
                setPassword={setPassword}
                setValide={setValide}
                defaultValue={props.mdp}></Mdp>
            {/* <TextInput id="confirm-mdp" label="Confirmer le mot de passe"><i className="fas fa-lock"></i></TextInput> */}
            <MdpInput password={confirmPassword} setPassword={(e) => { setConfirmPassword(e); }} label="Confirmer le mot de passe" defaultValue={props.mdp}></MdpInput>
            <MdpCondition active={samePassword} wide>Mots de passes correspondant</MdpCondition>
        </div>
    </>
}