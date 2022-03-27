import { useEffect, useState } from "react";
// import FormEvent from "../components/form/proposer-evenement/FormEvent";
import Page1Event from "../components/form/proposer-evenement/Page1Event"
import Page2Event from "../components/form/proposer-evenement/Page2Event"
import Page3Event from "../components/form/proposer-evenement/Page3Event"
import NumeroPage from "../components/form/NumeroPage";
import BoutonProgression from "../components/form/BoutonProgression";
import BoutonConfirmer from "../components/form/BoutonConfirmer";

export default function ProposerEvenement() {
  const [pages, setPages] = useState();
  const [formPages, setFormPages] = useState();
  const [pageActive, setPageActive] = useState(1);

  // const [titre, setTitre] = useState();
  // const [type, setType] = useState();
  // const [categorie, setCategorie] = useState();
  // const [description, setDescription] = useState();
  // const [image, setImage] = useState({ raw: '' });
  // const [date, setDate] = useState();
  // const [horaires, setHoraires] = useState([]);
  // const [lieu, setLieu] = useState();
  // const [nbParticipants, setNbParticipants] = useState([]);
  // const [ageParticipants, setAgeParticipants] = useState([]);
  // const [boutonConfirmer, setBoutonConfirmer]=useState(<></>)

  //Test

  const [titre, setTitre] = useState("Atelier Poterie");
  const [type, setType] = useState("proposition");
  const [categorie, setCategorie] = useState("manuelle");
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et varius risus, ac venenatis odio. Donec bibendum neque non nisl elementum, ut placerat urna fringilla. Quisque lobortis mauris sit amet leo facilisis, id volutpat nibh aliquet.  ");
  const [image, setImage] = useState({ raw: 'uploads/boy-g73ae189f4_1920.jpg' ,small: 'uploads/boy-g73ae189f4_1920.jpg' ,regular: 'uploads/boy-g73ae189f4_1920.jpg' });
  const [date, setDate] = useState(new Date());
  const [horaires, setHoraires] = useState(["15h","17h"]);
  const [lieu, setLieu] = useState("MJC Lorraine, Nancy");
  const [nbParticipants, setNbParticipants] = useState([5,15]);
  const [ageParticipants, setAgeParticipants] = useState([5,77]);
  const [boutonConfirmer, setBoutonConfirmer]=useState(<></>)

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
        setImage={e => setImage(e)}
        setLieu={e => setLieu(e)}

        titre={titre}
        type={type}
        categorie={categorie}
        description={description}
        image={image}
        lieu={lieu} />,

      <Page2Event
        setDate={e => setDate(e)}
        setHoraires={e => setHoraires(e)}
        setLieu={e => setLieu(e)}
        setNbParticipants={e => setNbParticipants(e)}
        setAgeParticipants={e => setAgeParticipants(e)}
        date={date}
        horaires={horaires}
        lieu={lieu}
        nbParticipants={nbParticipants}
        ageParticipants={ageParticipants} />,
      <Page3Event
        titre={titre}
        type={type}
        categorie={categorie}
        description={description}
        lieu={lieu}
        image={image}
        date={date}
        horaires={horaires}
        nbParticipants={nbParticipants}
        ageParticipants={ageParticipants} />
      ]
    ) : "";
  }, [pages, pageActive]);
  useEffect(() => {formPages ?
    setFormPages([formPages[0], formPages[1],
    <Page3Event
      titre={titre}
      type={type}
      categorie={categorie}
      description={description}
      image={image}
      date={date}
      horaires={horaires}
      nbParticipants={nbParticipants}
      ageParticipants={ageParticipants}
      lieu={lieu} />]) : "";
     setBoutonConfirmer( <BoutonConfirmer data={{
        titre:titre,
        type:type,
        categorie:categorie,
        description:description,
        image:image,
        date:date,
        horaires:horaires,
        nbParticipants:nbParticipants,
        ageParticipants:ageParticipants,
      }} url='evenement'/> )},
    [titre, type, categorie, description, image.raw, date ? date.toString() : date, horaires, lieu, nbParticipants, ageParticipants]);
  return formPages ? <>
    {/* {[titre, type, categorie, description, image.raw, date ? date.toString() : date, horaires, lieu, nbParticipants, ageParticipants]} */}
    <form id="form" className="d-flex flex-column justify-content-center align-items-center h-full ">
      <div className=" ">
        <h1 className="text-primary fw-bold text-center">Proposer un nouvel évènement</h1>
        <NumeroPage pages={pages} active={pageActive} setPageActive={setPageActive}></NumeroPage>
        <div className="d-flex m-auto flex-row flex-wrap shadow-sm rounded-lg w-form-page justify-content-center align-items-center py-4 px-5 ">
          {formPages ? formPages[pageActive - 1] : ""}
          <div className="d-flex  flex-row-reverse justify-content-between flex-basis-100 ms-auto pe-5 pt-2">
            {pageActive < pages.length ? <BoutonProgression label="Suivant" pageActive={pageActive} onClick={(a) => setPageActive(type == "proposition" ? a : 3)}></BoutonProgression> :
              boutonConfirmer}
            {pageActive > 1 ? <BoutonProgression label="Retour" pageActive={pageActive} onClick={(a) => setPageActive(type == "proposition" ? a : 1)}></BoutonProgression> : ""}

          </div>
        </div>
      </div>
    </form>
  </> : <></>
}