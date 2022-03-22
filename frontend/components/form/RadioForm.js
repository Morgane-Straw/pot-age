import { useState } from 'react';
import RadioInput from "./RadioInput";

export default function RadioForm(props) {
    const [checked, setChecked] = useState(props.values[0].id);
    return <form className="flex-basis-50 d-flex flex-column justify-content-between pe-5">
        <h2 className="text-primary fs-4 text-center">{props.title}</h2>
        <div className="form-group">
            {props.values.map((v) => <RadioInput id={v.id} label={v.label} checked={checked} setChecked={setChecked}></RadioInput>
            )}
        </div>
    </form>
}