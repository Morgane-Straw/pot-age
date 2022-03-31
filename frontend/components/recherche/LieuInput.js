import { useState, useEffect, useContext } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

import RechercheContext from './RechercheContext';


export default function LieuInput(props) {
    const value = useContext(RechercheContext);
    const [geocoder, setGeocoder] = useState();
    const [show, setShow] = useState();
    useEffect(() => setGeocoder(<GeoapifyGeocoderAutocomplete placeholder={props.placeholder ? props.placeholder : "Entrez une adresse"}
        value={value.recherche.lieu?.properties?.name}
        type={props.type}
        lang="fr"
        // position={position}
        limit={5}
        // filterByCountryCode={filterByCountryCode}
        // filterByCircle={filterByCircle}
        // filterByRect={filterByRect}
        // biasByCountryCode={biasByCountryCode}
        // biasByCircle={biasByCircle}
        // biasByRect={biasByRect}
        // biasByProximity={biasByProximity}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
    />), [value.recherche.lieu])


    function onPlaceSelect(v) {
        value?.setLieu(v);
    }

    function onSuggectionChange(value) {
        console.log(value);
    }

    function preprocessHook(value) {
        return `${value}, Munich, Germany`
    }

    function postprocessHook(feature) {
        return feature.properties.street;
    }

    function suggestionsFilter(suggestions) {
        const processedStreets = [];

        const filtered = suggestions.filter(value => {
            if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
                return false;
            } else {
                processedStreets.push(value.properties.street);
                return true;
            }
        })

        return filtered;
    }

    return <GeoapifyContext apiKey={process.env.NEXT_PUBLIC_Geoapify_Key}>

        {/* <GeoapifyGeocoderAutocomplete
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
        /> */}

        {geocoder}

        {/* <GeoapifyGeocoderAutocomplete
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
            preprocessHook={preprocessHook}
            postprocessHook={postprocessHook}
            suggestionsFilter={suggestionsFilter}
        /> */}
            <span className='placeholder px-2 cursor-pointer'
                onClick={() => setShow(!show)}>{value.recherche.distance ? value.recherche.distance : "..."}km</span>
            {show ? <div className='bg-light-gray p-1 z-index-top w-elt-lieu distance-picker d-flex flex-column align-items-stretch'>
                <div className='bg-white p-1'>
                    <label for="customRange3" className="form-label">A quelle distance maximum ?</label>
                    <div className="px-3 d-flex flex-row" >0km
                    <input type="range" value={value.recherche.distance} className="px-3 form-range bg-white" min="0" max="30" step="5" id="customRange3" 
                    onChange={(e)=>value.setDistance(e.target.value)}/>
                    30km</div>
                    <div className='d-flex flex-row justify-content-between align-items-center mx-5 px-3'><i className='fas fa-angle-left' onClick={()=>value.setDistance(value.recherche.distance-(5)>0?value.recherche.distance-(5):0)}></i>{value.recherche.distance}km
                    <i className='fas fa-angle-right' onClick={()=>value.setDistance(value.recherche.distance+(5)<30?value.recherche.distance+(5):30)}></i></div>
                </div>
                <button className="bg-primary text-white rounded-1 align-self-stretch text-center py-1 d-flex flex-row justify-content-center align-items-center my-1 mx-2"
                onClick={() => setShow(!show)}>
                Valider</button>
            </div>
                : ""
            }
    </GeoapifyContext>
}




