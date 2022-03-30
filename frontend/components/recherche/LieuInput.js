import { useState, useEffect } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'


export default function LieuInput(props) {
    const [lieu, setLieu] = useState(props.defaultValue);
    useEffect(()=>props.setValue(lieu),[lieu]);
    // const [autocomplete, setAutocomplete] = useState();


    // useEffect(props.setValue(lieu), [lieu]);
    // return (
    //     <input id={props.id} className="unset" onChange={(e) => setLieu(e.target.value)} defaultValue={props.defaultValue} />


    // )
    function onPlaceSelect(value) {
        setLieu(value);
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

        <GeoapifyGeocoderAutocomplete placeholder={props.placeholder?props.placeholder:"Entrez une adresse"}
            value={props.defaultValue}
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
        />

        {/* <GeoapifyGeocoderAutocomplete
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
            preprocessHook={preprocessHook}
            postprocessHook={postprocessHook}
            suggestionsFilter={suggestionsFilter}
        /> */}
    </GeoapifyContext>
}




