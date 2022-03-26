import { useEffect, useState } from "react";
// import FormEvent from "../components/form/proposer-evenement/FormEvent";
import Page1Event from "../components/form/proposer-evenement/Page1Event"
import Page2Event from "../components/form/proposer-evenement/Page2Event"
import Page3Event from "../components/form/proposer-evenement/Page3Event"
import NumeroPage from "../components/form/NumeroPage";
import BoutonProgression from "../components/form/BoutonProgression";

export default function ProposerEvenement() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const [pageActive, setPageActive] = useState(1);

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
        setLieu={e => setLieu(e)}
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
    {[titre, type, categorie, description, image, date ? date.toString() : date, horaires, lieu, nbParticipants, ageParticipants]}
    <form id="form" className="d-flex flex-column justify-content-center align-items-center h-full ">
      <div className=" ">
        <h1 className="text-primary fw-bold text-center">Proposer un nouvel évènement</h1>
        <NumeroPage pages={pages} active={pageActive} setPageActive={setPageActive}></NumeroPage>
        <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center py-4 px-5 ">
          {formPages ? formPages[pageActive - 1] : ""}
          <div className="d-flex  flex-row-reverse justify-content-between flex-basis-100 ms-auto pe-5 pt-2">
            {pageActive < pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> :
              <BoutonProgression label="Confirmer" onClick={() => valider()} ></BoutonProgression>}
            {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(a)}></BoutonProgression> : ""}

          </div>
        </div>
      </div>
    </form>
  </>:<></>}