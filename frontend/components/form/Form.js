import { useEffect, useState } from "react";
import NumeroPage from "./NumeroPage";
import BoutonProgression from "./BoutonProgression";

export default function Form(props) {
  const [pageActive, setPageActive] = useState(1);
  // const [scale, setScale] = useState(1);
  // const [rem, setRem] = useState(16)
  // useEffect(()=>setScale((window.innerHeight-document.body.style.fontSize*7)/document.getElementById('form').clientHeight),[]);
  // useEffect(() => {
  //   const formEl = document.getElementById('form');
  //   setScale((window.innerHeight - 8 * rem) / formEl.clientHeight)
  // }, []);

  return <form id="form" className="d-flex flex-column justify-content-center align-items-center h-full ">
    <div className=" ">
      <h1 className="text-primary fw-bold text-center">{props.title}</h1>
      <NumeroPage pages={props.pages} active={pageActive} setPageActive={setPageActive}></NumeroPage>
      <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center py-4 px-5 ">
        {props.formPages ? props.formPages[pageActive - 1] : ""}
        <div className="d-flex  flex-row-reverse justify-content-between flex-basis-50 ms-auto pe-5 pt-2">
          {pageActive < props.pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> :
            <BoutonProgression label="Confirmer" onClick={() => props.valider()} ></BoutonProgression>}
          {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> : ""}

        </div>
      </div>
    </div>
  </form>
}
