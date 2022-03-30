import { useEffect, useState } from "react";

import Form from "../components/form/Form";
import Page1 from "../components/form/inscription/Page1";
import Page2 from "../components/form/inscription/Page2";
import Page3 from "../components/form/inscription/Page3";

export default function Inscription() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const [situation, setSituation] = useState();
  const [email, setEmail] = useState();
  const [mdp, setmMdp] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [dateDeNaissance, setDateDeNaissance] = useState();
  const [ville, setVille] = useState();
  // const [data, setData] = useState();
  // const valider= ()=>{alert([situation, email, mdp, nom, prenom, dateDeNaissance, ville])};
  const valider= ()=>{alert("test")};
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
    <Form title='Inscription' pages={pages} formPages={formPages} valider={() => valider()}  ></Form></> : <></>
}

