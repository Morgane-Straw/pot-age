import { useRouter } from 'next/router';

export default function MiniBio(props) {
    const router = useRouter();
    return <div className="w-minibio d-flex flex-column  align-items-center rounded-1 shadow-light py-2 px-3">
        <div className="text-center border-bottom border-1 pb-1 px-5 mb-3">Organisateur</div>
        {/* <hr className="minibio"/> */}
        <div className="align-self-start d-flex flex-row align-items-start ps-2 mb-2">
            <img className="rounded-circle wh-img-minibio" src={props.user.avatar.small}></img>
            <span className="text-primary mt-2 ms-2 me-2 ">{props.user.prenom + ' ' + props.user.nom}</span><span className=" mt-2 ">{props.user.age}</span>
        </div>

        <p className="text-justify bg-light-gray p-2 rounded-3">{props.user.introduction}</p>
        <button className="bg-primary text-white rounded-1 align-self-stretch text-center py-1 d-flex flex-row justify-content-center align-items-center"
            onClick={() => router.push('/messages/'+props.user.id, undefined, { shallow: true })}>
            <img src="img/enveloppe_creux_blanc.png" className="tiny-icon me-2" ></img>Contacter</button>
    </div>
}