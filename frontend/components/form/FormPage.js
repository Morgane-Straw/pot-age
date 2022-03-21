import BoutonProgression from "./BoutonProgression";

export default function FormPage(props) {
return <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center px-5">
    {props.children}
    <div className="flex-basis-100 d-flex flex-row justify-content-between">
    <BoutonProgression label="Retour"></BoutonProgression>
    <BoutonProgression label="Suivant"></BoutonProgression>
</div>
</div>
}