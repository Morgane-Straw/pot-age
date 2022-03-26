import axios from "axios";
import { useState, useEffect } from "react"
import ResultatImage from "./ResultatImage";


export default function BanqueImage(props) {
    const [affichageResultats, setAffichageResultats] = useState(<></>);
    const [query, setQuery] = useState(props.query?props.query:"bricolage");
    const [photosResponse, setPhotosResponse] = useState(props.photosResponse?photosResponse:[]);
    const [choixImg, setChoixImg] = useState(props.choixImg?props.choixImg:{ raw: "" });
    useEffect(()=>props.setQuery(query),[query]);    
    useEffect(()=>props.setPhotosResponse(photosResponse),[photosResponse]);
    useEffect(()=>props.setChoixImg(choixImg),[choixImg]);

    useEffect(() =>
        setAffichageResultats(
            <>{photosResponse.map(e => <ResultatImage src={e} choixImg={choixImg} setChoixImg={e=>setChoixImg(e)} ></ResultatImage>)}</>)
        , [choixImg, photosResponse])
    const searchPhotos = async () => {
        axios
            .get(process.env.NEXT_PUBLIC_FRONTEND_ADDRESS + "api/unsplash/" + query)
            .then(results => setPhotosResponse(results.data))
    }
    return <div>
        <form className="form text-center">
            <label className="label" htmlFor="query">

            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={query}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter'? e.preventDefault() && searchPhotos() :""}
            />
            <button
                type="button"
                className="button" onClick={() => searchPhotos()}>
                <i className="fas fa-search"></i>
            </button>
        </form>
        <div className="d-flex flex-row flex-wrap overflow-scroll h-resultats-banque">
            {affichageResultats}
        </div>
    </div>
}
