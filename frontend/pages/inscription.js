import { useEffect, useState } from "react";
import NumeroPage from "../components/form/NumeroPage";
import BoutonProgression from "../components/form/BoutonProgression";
// import Form from "../components/form/Form";
import Page1 from "../components/form/inscription/Page1";
import Page2 from "../components/form/inscription/Page2";
import Page3 from "../components/form/inscription/Page3";

export default function Inscription() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const [pageActive, setPageActive] = useState(1);


  const [situation, setSituation] = useState();
  const [email, setEmail] = useState();
  const [mdp, setmMdp] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [dateDeNaissance, setDateDeNaissance] = useState();
  const [ville, setVille] = useState();
  // const [data, setData] = useState();
  // const valider= ()=>{alert([situation, email, mdp, nom, prenom, dateDeNaissance, ville])};
  const valider = () => { alert("test") };
  // { alert([situation, email, mdp, nom, prenom, dateDeNaissance, ville]) }
  useEffect(() => {
    setPages([{ number: 1, name: 'Type de profil' }, { number: 2, name: 'Identifiants' }, { number: 3, name: 'Informations' }]);
    // valider();
    // alert('test');
  }, []);
  useEffect(() => {
    pages ? setFormPages(
      [<Page1 setSituation={(a) => setSituation(a)}></Page1>,
      <><Page2 setEmail={(e) => { setEmail(e) }} setMdp={(a) => setmMdp(a)}></Page2></>,
      <Page3 setNom={(a) => setNom(a)} setPrenom={(a) => setPrenom(a)} setDateDeNaissance={(a) => setDateDeNaissance(a)} setVille={(a) => setVille(a)}></Page3>
      ]
    ) : "";
  }, [pages]);
  return formPages ? <>
    {/* <Form title='Inscription' pages={pages} formPages={formPages} valider={() => valider()}  ></Form></> : <></> */}
    <form id="form" className="d-flex flex-column justify-content-center align-items-center h-full ">
      <div className=" ">
        <h1 className="text-primary fw-bold text-center">Inscription</h1>
        <NumeroPage pages={pages} active={pageActive} setPageActive={setPageActive}></NumeroPage>
        <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center py-4 px-5 ">
          {formPages ? formPages[pageActive - 1] : ""}
          <div className="d-flex  flex-row-reverse justify-content-between flex-basis-50 ms-auto pe-5 pt-2">
            {pageActive < pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> :
              <BoutonProgression label="Confirmer" onClick={() => valider()} ></BoutonProgression>}
            {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> : ""}

          </div>
        </div>
      </div>
    </form>
  </> : <></>
}

