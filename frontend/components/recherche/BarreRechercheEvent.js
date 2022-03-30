import ElementRecherche from './ElementRecherche'
import { useState,useContext } from 'react';
import RechercheContext from './RechercheContext';

export default function BarreRechercheEvent(props) {
    const value =useContext(RechercheContext);
    let { recherche } = value.recherche;

    function search() {
        alert("ok");
    }
    return <div className='position-relative'>
        {/* {[ville?Object.keys(ville):"",activite,dates?dates.map(e=>e.toLocaleDateString()):"",type]} */}
    <div className="d-flex flex-row me-barre-recherche shadow-barre rounded-3 bg-light-gray h-barre">
        <ElementRecherche
            label="Ville"
            id="ville"
            img='img/Icon metro-home.svg'
            border='border-end'
            type ="address"
            setValue={value.setVille} defaultValue={recherche?.ville} 
            placeholder="Où aller ?"/>
        <ElementRecherche
            label="Activité" id="activite"
            img="img/Icon awesome-running.svg"
            border='border-end'
            setValue={value.setActivite} defaultValue={recherche?.activite} 
            placeholder="Que faire ?"/>
        <ElementRecherche
            label="Dates" id="dates"
            img="img/Icon awesome-calendar-alt.svg"
            border='border-end'
            type="date"
            setValue={value.setDates} defaultValue={recherche?.dates} 
            placeholder="Quand ?"/>
        <ElementRecherche
            label="Type de recherche" id="type"
            img="img/Icon awesome-hand-holding.svg"
            type="radio"
            setValue={value.setType} defaultValue={recherche?.type} 
            placeholder="Propositions ou demandes ?"/>

        <div className='bg-primary text-white fs-4 d-flex flex-row justify-content-center align-items-center p-2 flex-grow-1 rounded-right-1 cursor-pointer'
            onClick={() => search()}
        >
            <i className='fas fa-search p-2'></i>
            Rechercher

        </div>
    </div></div>
}