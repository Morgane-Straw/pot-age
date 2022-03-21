import { useEffect, useState } from "react";
import NumeroPage from "../components/form/NumeroPage";
import FormPage from "../components/form/FormPage";
import Form from "../components/form/Form";
import RadioForm from "../components/form/RadioForm";

export default function Inscription() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const[checked, setChecked]=useState();

  useEffect(() => {
    setPages([{ number: 1, name: 'Type de profil' }, { number: 2, name: 'Identifiants' }, { number: 3, name: 'Informations' }]);
    setFormPages(
      [<FormPage page={pages ?pages[0]:null}>
        <div className="flex-basis-50">
          <img src='img/inscription_page1.svg'></img>
        </div>
        <RadioForm values={
          [
            {id:"proposeAnim", label:"Je souhaite proposer des animations"},
            {id:"rechercheAnim", label:"Je recherche des animations pour mes enfants"},
            {id:"encadrant", label:"Je travaille dans l'animation, l'enseignement ou le secteur médico-social"}
          ]}/>
      </FormPage>]
    );
  }, []);
  return <Form title='Inscription' pages={pages} formPages={formPages}></Form>
}

