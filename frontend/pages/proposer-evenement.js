import { useEffect, useState } from "react";
import FormEvent from "../components/form/proposer-evenement/FormEvent";
import Page1Event from "../components/form/proposer-evenement/Page1Event"
import Page2Event from "../components/form/proposer-evenement/Page2Event"
import Page3Event from "../components/form/proposer-evenement/Page3Event"

export default function ProposerEvenement() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const [titre, setTitre] = useState();
  const [type, setType] = useState();
  const [categorie, setCategorie] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [horaires, setHoraires] = useState([]);
  const [lieu, setLieu] = useState();
  const [nbParticipants, setNbParticipants] = useState([]);
  const [ageParticipants, setAgeParticipants] = useState([])


  const valider = () => { alert("test") };
  useEffect(() => {
    setPages([{ number: 1, name: 'Description' }, { number: 2, name: 'Organisation' }, { number: 3, name: 'Confirmation' }]);

  }, []);
  useEffect(() => {
    pages ? setFormPages(
      [<Page1Event
        setTitre={(e) => setTitre(e)}
        setType={e => setType(e)}
        setCategorie={e => setCategorie(e)}
        setDescription={e => setDescription(e)}
        setImage={e => setImage(e)} />,
      <Page2Event
        setDate={e => setDate(e)}
        setHoraires={e => setHoraires(e)}
        setNbParticipants={e => setNbParticipants(e)}
        setAgeParticipants={e => setAgeParticipants(e)} />,
      <Page3Event
        titre={titre}
        type={type}
        categorie={categorie}
        description={description}
        image={image}
        date={date}
        horaires={horaires}
        nbParticipants={nbParticipants}
        ageParticipants={ageParticipants} />
      ]
    ) : "";
  }, [pages]);
  return formPages ? <>
    <FormEvent title='Proposer un nouvel évènement' pages={pages} formPages={formPages} valider={() => valider()}  ></FormEvent></> : <></>
}