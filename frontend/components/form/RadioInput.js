export default function RadioInput(props) {
    return <div className={" p-2 my-3 border rounded d-flex flex-row " + (props.checked==props.id ? "border-primary text-primary shadow-sm" : "border-light-gray") }onClick={()=> props.setChecked(props.id)}>
        <input className="m-2 " type="radio" name={props.name ? props.name : props.label} id={props.id} value={props.value ? props.value : props.label} checked={props.checked==props.id} />
        <label className="" htmlFor={props.id}>
            {props.label}
        </label>
    </div>
}