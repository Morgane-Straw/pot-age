import Label from "../Label";
import { useState, useEffect } from "react";
import ImageModale from "./ImageModale";
import BoutonParcourir from "./BoutonParcourir";
export default function ImportImage(props) {
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState({ raw: "" });
    useEffect(() => props.setImage(img), [img]);
    return <>
        <Label label="Insérez une image (optionnel)" id="image"></Label>
        <div className="d-flex flex-column justify-content-center align-items-center my-2  pe-3">
            <BoutonParcourir setShowModal={e => setShowModal(e)} />
            <ImageModale show={showModal} handleClose={() => setShowModal(false)} setImg={(e) => setImg(e)} img={img} />
            <div>
                {img.raw ? <img className='h-img-banque  rounded-3  my-2' src={img.small}></img> : <></>}
            </div>
        </div>
    </>
}