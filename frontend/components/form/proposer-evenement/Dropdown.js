import { useState } from "react"

export default function Dropdown(props) {
    // const[ariaExpanded, setAriaExpanded]=useState(false)
    return <div className="mb-3">
        <label className="d-block text-primary fw-bold ms-1 w-select">Catégorie</label>
        <select id="categorie" className="form-select" 
        onChange={(e)=>props.setValue(e.target.value)}
        >
            <option value="none">Sélectionnez un type d'activité</option>
            <option value="manuelle">Activités manuelles</option>
            <option value="sport">Sport</option>
            <option value="artistique">Activités artistiques</option>
            <option value="nature">Découverte de la nature</option>
            <option value="jardinage">Jardinage</option>
        </select>
    </div>
}