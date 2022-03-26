import { useState, useEffect } from "react";
import ImageUpload from "../../ImageUpload";
import Label from "../Label";
import BanqueImage from "./BanqueImage";
import BoutonProgression from '../BoutonProgression'
// import BoutonParcourir from "./BoutonParcourir";
export default function ImageModale(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    const [choixImage, setChoixImage] = useState(props.img);
    const [imgUpload, setImgUpload] = useState(<ImageUpload img={choixImage ? choixImage : null} setFile={(e) => setChoixImage(e)}></ImageUpload>);
    const [query, setQuery] = useState("bricolage");
    const [photosResponse, setPhotosResponse] = useState([]);
    const [banque, setBanque] = useState(<BanqueImage choixImg={choixImage} setQuery={(q) => setQuery(q)} setPhotosResponse={(p) => setPhotosResponse(p)} setChoixImg={(i) => setChoixImage(i)}></BanqueImage>);
    useEffect(
        () => {
            setImgUpload(<ImageUpload img={choixImage ? choixImage : null} setFile={(e) => setChoixImage(e)}></ImageUpload>);
            setBanque(<BanqueImage query={query} photosResponse={photosResponse} choixImg={choixImage} setQuery={(q) => setQuery(q)} setPhotosResponse={(p) => setPhotosResponse(p)} setChoixImg={(i) => setChoixImage(i)} />);
        }, [choixImage]);
    return (
        <div className={showHideClassName}>
            <section className="modal-main py-1 px-3">
                <div className="text-end ">
                    <button type="button" onClick={props.handleClose}
                        className="rounded bg-danger text-white px-2 py-1 my-1">
                            <img src="img/xmark-solid.svg" className="h-1 me-2"></img>
                        Fermer
                        {/* icon close */}
                    </button>
                </div>
                <div >
                    <h2 className="ms-8 text-primary text-center">Insérer une image</h2>

                    <div className=" d-flex flex-row ">
                        <div className="flex-basis-50 px-5 d-flex flex-column justify-content-start align-items-center w-40" >
                            <div className="fst-italic  py-2">OU Choisir une image sur mon appareil</div>
                            {imgUpload}
                        </div>
                        <div className="flex-basis-50 px-5 w-40">
                            <div className="fst-italic text-center py-2">OU Choisir une image dans la banque d'image (Unsplash)</div>
                            {banque}
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse  my-2 mx-5">
                        <button
                            className={"d-flex justify-content-center align-items-center d-block rounded py-1 px-3 w-button bg-primary text-white"}
                            onClick={() => { props.setImg(choixImage); props.handleClose(); }}
                            type="button"
                        >
                            <img src="img/check-solid.svg" className="h-1 me-2"></img>
                            <span>Confirmer</span>
                        </button>


                    </div>
                </div>
            </section>
        </div>
    );
}