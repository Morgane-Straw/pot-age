export default function RechercheRecente(props) {
    return <div className='d-flex flex-column rounded-3 bg-light-gray p-3 flex-basis-30 mx-2 shadow-light cursor-pointer'
        onClick={() => {
            props.setVille(props.recherche.ville);
            props.setActivite(props.recherche.activite);
            props.setType(props.recherche.type);
        }}>

        <div className="fw-bold fs-5">{props.recherche.activite}</div>
        <div>{props.recherche.type == "demandes" ? "Demandes" : "Propositions"}</div>
        <div>{props.recherche.ville}</div>
    </div>
}