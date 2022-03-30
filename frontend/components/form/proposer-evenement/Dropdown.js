import { useState } from "react"

export default function Dropdown(props) {
    // const[ariaExpanded, setAriaExpanded]=useState(false)
    return <div className="mb-3">
        <label className="d-block text-primary fw-bold ms-1 w-select">Catégorie</label>
        <select id="categorie" className="form-select" 
        // onSelect={aaaaa}
        >
            <option >Sélectionnez un type d'activité</option>
            <option>Activités manuelles</option>
            <option>Sport</option>
            <option>Activités artistiques</option>
            <option>Découverte de la nature</option>
            <option>Jardinage</option>
        </select>
    </div>
}