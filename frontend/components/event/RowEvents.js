import { useState, useEffect } from "react"
import CarteEvenement from "./CarteEvenement";

export default function RowEvents(props) {
  const [i, setI1] = useState(0);
  const [row, setRow] = useState();
  useEffect(
    () => {
      setRow([props.children,
      ...props.events.map(event =>
          <CarteEvenement
            event={event}
          />
        )])
    }, []);

  return <div className=" mt-4 mb-3  d-block d-flex flex-row">
    
    <div className={"d-flex  justify-content-center align-items-center ms-2"}
      onClick={() => i>0?setI1(i - 3):""}>
      <i className={"fas fa-angle-left text-gray fs-giant-icon "+(i>0?"":"opacity-0")} />
    </div>
    <div className="  d-flex flex-row">
      {row?.slice(i,i+3)}
    </div>{
      props.events.length > 2 ?
        <div className="d-flex  justify-content-center align-items-center  z-index-top ms-3"
          onClick={() => row?i+3>row.length?"":setI1(i + 3):""}>
          <i className={"fas fa-angle-right text-gray fs-giant-icon "+(row?i+3>row.length?"opacity-0":"":"")} />
        </div> : ""
    }
  </div>
}