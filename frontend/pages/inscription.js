import { useEffect, useState } from "react";
import NumeroPage from "../components/form/NumeroPage";
import BoutonProgression from "../components/form/BoutonProgression";
import BoutonConfirmer from "../components/form/BoutonConfirmer";

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

  const [boutonsProgression, setBoutonsProgression] = useState(<></>);
  const [boutonConfirmer, setBoutonConfirmer] = useState(<></>);

  const valider = (e) => { alert(e) };
  useEffect(() => {
    setPages([{ number: 1, name: 'Type de profil' }, { number: 2, name: 'Identifiants' }, { number: 3, name: 'Informations' }]);

  }, []);
  useEffect(() => {
    pages ? setFormPages(
      [<Page1 setSituation={(a) => setSituation(a)} situation={situation}></Page1>,
      <><Page2 setEmail={(e) => { setEmail(e) }} email={email} setMdp={(a) => setmMdp(a)} mdp={mdp}></Page2></>,
      <Page3 setNom={(a) => setNom(a)} nom={nom}
        setPrenom={(a) => setPrenom(a)} prenom={prenom}
        setDateDeNaissance={(a) => setDateDeNaissance(a)} dateDeNaissance={dateDeNaissance}
        setVille={(a) => setVille(a)} ville={ville}></Page3>
      ]
    ) : "";
    pages ? setBoutonsProgression(<div className="d-flex  flex-row-reverse justify-content-between flex-basis-50 ms-auto pe-5 pt-2">
      {pageActive < pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> :
        boutonConfirmer}
      {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> : ""}

    </div>) : "";

  }, [pages, pageActive]);

  useEffect(() => {

    setBoutonConfirmer(<BoutonConfirmer data={{
      situation: situation,
      email: email,
      mdp: mdp,
      nom: nom,
      prenom: prenom,
      dateDeNaissance: dateDeNaissance,
      ville: ville,
    }} url='inscription' />);
    pages ? setBoutonsProgression(<div className="d-flex  flex-row-reverse justify-content-between flex-basis-50 ms-auto pe-5 pt-2">
      {pageActive < pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> :
        boutonConfirmer}
      {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> : ""}

    </div>) : "";
  },
    [situation, email, mdp, nom, prenom, dateDeNaissance, ville]);

  return formPages ? <>
    {/* <Form title='Inscription' pages={pages} formPages={formPages} valider={() => valider()}  ></Form></> : <></> */}
    <form id="form" className="d-flex flex-column  align-items-center  ">
      <div className=" ">
        <h1 className="text-primary fw-bold text-center">Inscription</h1>
        <NumeroPage pages={pages} active={pageActive} setPageActive={setPageActive}></NumeroPage>
        <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center py-4 px-5 ">
          {formPages ? formPages[pageActive - 1] : ""}
          {boutonsProgression}
        </div>
      </div>
    </form>
  </> : <></>
}

