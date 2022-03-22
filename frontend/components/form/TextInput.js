export default function TextInput(props) {
    return <div className="mb-3 text-primary fw-bold fs-">
        <label className="" htmlFor={props.id}>
            <span className={props.children?'mx-2':'me-1'}>{props.children}</span>{props.label}
        </label>        
        <input type={props.type? props.type:"text"}  className="form-control" placeholder={props.placeholder ? props.placeholder : props.label}
        //  name={props.name ? props.name : props.label} 
         id={props.id} />
    </div>
}