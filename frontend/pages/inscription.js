import { useEffect, useState } from "react";

import Form from "../components/form/Form";
import Page1 from "../components/form/inscription/Page1";
import Page2 from "../components/form/inscription/Page2";
import Page3 from "../components/form/inscription/Page3";

export default function Inscription() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();

  // useEffect()

  useEffect(() => {
    setPages([{ number: 1, name: 'Type de profil' }, { number: 2, name: 'Identifiants' }, { number: 3, name: 'Informations' }]);
  }, []);
  useEffect(() => {
    pages ? setFormPages(
      [<Page1></Page1>,
      <Page2></Page2>,
      <Page3></Page3>
      ]
    ) : "";
  }, [pages]);
  return formPages ? <Form title='Inscription' pages={pages} formPages={formPages} valider={(a) => { console.log(a) }}></Form> : <></>
}

