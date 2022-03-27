import TextInput from "../TextInput";

export default function Page3(props) {
    const today = () => {
        const d = new Date();
        return d.getDate() + "/" + (d.getMonth() + 1) + '/' + (1900 + d.getYear());
    };
    return <>
        <div className="flex-basis-50 d-flex flex-row-reverse pe-4">
            <img src='img/inscription_page3.svg' className="h-img-inscription3"></img>
        </div>
        <div className="flex-basis-50 pe-5 flex-grow-1">
            <h2 className="text-primary fs-4 text-center">Informations personnelles</h2>
            <TextInput id="nom" label="Nom" setValue={(a)=>props.setNom(a)} defaultValue={props.nom}></TextInput>
            <TextInput id="prenom" label="Prénom" setValue={(a)=>props.setPrenom(a)} defaultValue={props.prenom}></TextInput>
            <TextInput id="date-de-naissance" label="Date de naissance" placeholder={today()} setValue={(a)=>props.setDateDeNaissance(a)} defaultValue={props.dateDeNaissance}></TextInput>
            <TextInput id="ville" label="Ville de résidence"  setValue={(a)=>props.setVille(a)} defaultValue={props.ville} ></TextInput>

        </div>
    </>
}