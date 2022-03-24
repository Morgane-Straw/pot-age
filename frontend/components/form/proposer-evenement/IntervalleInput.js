import Label from "../Label";

export default function IntervalleInput(props) {
    // usestate
    return <>
        <Label label={props.label} id={props.id}></Label>

        <div className="d-flex flex-row flex-nowrap mb-3">
            
            <div className=" d-flex flex-column flex-basis-50 pe-3">
                <label htmlFor={props.id + '1'} className="">{props.label1?props.label1:"Minimum"}</label>
                <input type="text" className="form-control" placeholder={props.placeholder1 ? props.placeholder1 : "Pas de minimum"}
                    onChange={(e) => {
                        props.setValue(e.target.value)
                    }}
                    id={props.id} />
            </div>
            
            <div className="d-flex flex-column flex-basis-50 ps-3">
                <label htmlFor={props.id + '2'} className="">{props.label2?props.label2:"Maximum"}</label>
                <input type="text" className="form-control" placeholder={props.placeholder2 ? props.placeholder2 : "Pas de maximum"}
                    onChange={(e) => {
                        props.setValue(e.target.value)
                    }}
                    id={props.id} />
            </div>
        </div>
    </>
}