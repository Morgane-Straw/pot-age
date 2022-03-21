import { useEffect, useState } from "react";
import NumeroPage from "./NumeroPage";

export default function Form(props) {
  const [pageActive, setPageActive]=useState(1);
  return <div className="d-flex flex-column justify-content-center align-items-center">
    <div className=" ">
      <h1 className="text-primary fw-bold text-center">{props.title}</h1>
      <NumeroPage pages={props.pages} active={pageActive}></NumeroPage>
        {props.formPages ? props.formPages[pageActive-1] :""}
    </div>
  </div>
}
