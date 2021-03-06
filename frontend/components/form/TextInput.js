
import { useEffect } from 'react'
import Label from './Label'
export default function TextInput(props) {
    useEffect(()=>props.defaultValue?props.setValue(props.defaultValue):"",[]);
    return <div className="mb-3">
        <Label id={props.id} label={props.label}>{props.children}</Label>
        <input type={props.type ? props.type : "text"} 
        className="form-control" 
        placeholder={props.placeholder ? props.placeholder : props.label}
        defaultValue={props.defaultValue?props.defaultValue:""}
            onChange={(e) => {
                props.setValue(e.target.value)
            }}
            id={props.id} />
    </div>
}