import DatesPicker from "./DatesPicker";
import TypeRadio from "./TypeRadio";

export default function ElementRecherche(props) {
    const typePicker = <div>

    </div>;
    return (
        <div className={"my-2 px-2 flex-grow-1 border-gray w-elt-barre " + (props.border)}>
            <div className="ms-1 text-primary fw-bold">{props.label}</div>
            <div className="d-flex flex-row align-items-start mt-1">
                <img src={props.img} className='recherche-icon ms-1 me-3 mt-1 ' />
                {props.type=="radio"?
                <TypeRadio setValue={props.setValue} value={props.value}></TypeRadio>
                :(props.type=="date"?
                <DatesPicker setValue={(e)=>props.setValue(e)} value={props.dates}></DatesPicker>:
                <input id={props.id} className="unset" onChange={(e) => props.setValue(e.target.value)} />)}
            </div>
        </div>)
}