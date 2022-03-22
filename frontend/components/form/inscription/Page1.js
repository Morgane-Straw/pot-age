import RadioForm from '../RadioForm';
import { useEffect, useState } from "react";

export default function Page1(props) {
    const [checked, setChecked] = useState();

    return <>
        <div className="flex-basis-50">
            <img src='img/inscription_page1.svg'></img>
        </div>

        <RadioForm title= "Quelle est votre situation ?" values={
            [
                { id: "proposeAnim", label: "Je souhaite proposer des animations" },
                { id: "rechercheAnim", label: "Je recherche des animations pour mes enfants" },
                { id: "encadrant", label: "Je travaille dans l'animation, l'enseignement ou le secteur médico-social" }
            ]} />
    </>
};