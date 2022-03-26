import Label from "../Label";
import { useState } from "react";
import ImageModale from "./ImageModale";
import BoutonParcourir from "./BoutonParcourir";
export default function ImportImage(props) {
    const [showModal, setShowModal] = useState(false);
    return <>
        <Label label="Insérez une image (optionnel)" id="image"></Label>
        <div className="d-flex flex-row justify-content-center  my-2 pe-3">
            <BoutonParcourir setShowModal={e => setShowModal(e)}/>
            <ImageModale show={showModal} handleClose={() => setShowModal(false)} />

        </div>
    </>
}