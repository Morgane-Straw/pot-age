import axios from "axios";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useUser } from "../../context/user";
const BoutonParticiper = (props) => {
    const user = useUser();

    const [participe, setParticipe] = useState(props.participe ? props.participe : false);
    const sendParticipe = (e) => { axios.post(process.env.NEXT_PUBLIC_FRONTEND_ADDRESS + 'api/participer-evenement', { eventId: props.eventId, user: user.id, participe: participe }) };
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        //pour empecher le useEffect de run au chargement de la page et donc run seulement aux changements
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }else{
            sendParticipe(participe)
        }
    },[participe]);

    return <button className="button1 card-button1 rounded-1 bg-primary text-white text-center w-button-participer py-1" type="submit"
        onClick={() => {
            setParticipe(!participe);

        }}>
        {participe ? <span><i className='fas fa-check me-1'></i>Participe</span> : "Participer"}</button>;
}
export default BoutonParticiper;