import RechercheContext from './RechercheContext';
import { useContext } from 'react';

export default function RechercheRecente(props) {
    const value =useContext(RechercheContext);
    // let { recherche } = value.state;
    return <div className='d-flex flex-column rounded-3 bg-light-gray p-3 flex-basis-30 mx-2 shadow-light cursor-pointer'
        onClick={() => {
            value.setVille(props.recherche.ville);
            value.setActivite(props.recherche.activite);
            value.setType(props.recherche.type);
        }}>

        <div className="fw-bold fs-5">{props.recherche.activite}</div>
        <div>{props.recherche.type == "demandes" ? "Demandes" : "Propositions"}</div>
        <div>{props.recherche?.ville?.properties?.name}</div>
    </div>
}