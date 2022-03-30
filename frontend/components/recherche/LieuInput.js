import { useState, useEffect, useContext } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

import RechercheContext from './RechercheContext';


export default function LieuInput(props) {
    const value = useContext(RechercheContext);
    const [geocoder, setGeocoder] = useState();
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
    </GeoapifyContext>
}




