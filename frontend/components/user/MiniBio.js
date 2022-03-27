export default function MiniBio(props){
    return<div className="w-minibio">
        <div className="text-center">Organisateur</div>
        <hr></hr>
        <div className="d-flex flex-row align-items-end"><img className="rounded-circle wh-img-minibio" src={props.user.avatar.small}></img>
        <span className="text-primary mb-1 me-2 ">{props.user.prenom+' '+props.user.nom}</span><span className="mb-1">{props.user.age}</span></div>

        <p className="text-justify">{props.user.introduction}</p>
        <button>Contacter</button>
    </div>
}