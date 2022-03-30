import DatesPicker from "./DatesPicker";
import TypeRadio from "./TypeRadio";
import LieuInput from "./LieuInput";

export default function ElementRecherche(props) {
    const typePicker = <div>

    </div>;
    return (
        <div className={"my-2 px-2 flex-grow-1 border-gray w-elt-barre " + (props.border)}>
            <div className="ms-1 text-primary fw-bold">{props.label}</div>
            <div className="d-flex flex-row align-items-start mt-1">
                <img src={props.img} className='recherche-icon ms-1 me-3 mt-1 ' />
                {props.type=="radio"?
                <TypeRadio setValue={props.setValue} defaultValue={props.defaultValue}></TypeRadio>
                :(props.type=="date"?
                <DatesPicker setValue={(e)=>props.setValue(e)} defaultValue={props.defaultValue}></DatesPicker>:
                props.type=="address"?
                <LieuInput setValue={(e)=>props.setValue(e)} defaultValue={props.defaultValue} placeholder="Entrez une commune"></LieuInput>:
                <input id={props.id} className="unset" onChange={(e) => props.setValue(e.target.value)} defaultValue={props.defaultValue} />)}
            </div>
        </div>)
}