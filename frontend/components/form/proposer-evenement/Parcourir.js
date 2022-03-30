import Label from "../Label";

export default function Parcourir(props) {
    return <>
        <Label label="Insérez une image (optionnel)" id="image"></Label>
        <div className="d-flex flex-row justify-content-center my-2 pe-3">
            <button
                className={"d-flex justify-content-center d-block rounded py-1 px-3 w-button bg-primary text-white"}
                onClick={() => props.onClick()}
                type="button"
            >
                <span><i className="fas fa-image-left pe-3"></i>Parcourir</span>
            </button>
        </div>
    </>
}