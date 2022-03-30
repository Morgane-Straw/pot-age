export default function BoutonParcourir(props) {
    return <button
        className={"d-flex justify-content-center align-items-center d-block rounded py-1 px-3 w-button bg-primary text-white"}
        onClick={() => props.setShowModal(true)}
        type="button"
    >
        <img src="img/pictures.svg" className="h-1 me-2"></img>
        <span>Parcourir</span>
    </button>
}