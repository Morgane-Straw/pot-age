import { useState, useEffect } from "react";
import CarteEvenement from "../components/event/CarteEvenement";
import { useRouter } from 'next/router';
import RowEvents from "../components/event/RowEvents";
import dummy_events from "../utils/dummy_events";
//avancer dans les evenements

export default function MesEvenements(props) {
  const router = useRouter();
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);



  useEffect(() => setRow1(props.events_participe ? <RowEvents events={props.events_participe}>
    <div className="card d-flex flex-column justify-content-center align-items-center text-primary fs-4 text-center p-5 cursor-pointer flex-grow-1 flex-shrink-0 mb-3"
      onClick={() => router.push('/rechercher-evenement', undefined, { shallow: true })}>

      <i className="fas fa-search  fs-giant-icon mb-3"></i>
      <span>Rechercher un évènement</span>
    </div>
  </RowEvents> : ""), [props.events_participe]);
  useEffect(() => setRow2(props.events_organise ? <RowEvents events={props.events_organise}>
    <div className="card d-flex flex-column justify-content-center align-items-center text-primary fs-4 text-center p-5 cursor-pointer flex-grow-1 flex-shrink-0"
      onClick={() => router.push('/proposer-evenement', undefined, { shallow: true })}>
      <img src='img/plus.png' className="  fs-giant-icon mb-3" />
      <span>Proposer une activité</span>
    </div>
  </RowEvents> : ""), [props.events_organise]);
  return <div className="">
    <img src='img/pexels-photo-2050994.png' alt='femme âgée souriant dans un buisson de fleurs' className='position-fixed top-right-0 z-index-bottom h-img-mes-event mb-3'></img>
    <h1 className="text-primary ms-5">
      Mes évènements
    </h1>
    <h2 className="text-primary mb-3 ms-5">
      Evènements auxquels je participe
    </h2>
    {row1}
    <h2 className="text-primary mb-3 ms-5">
      Evènements que j'organise
    </h2>
    {row2}
  </div>
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const data = await res.json()

  // Pass data to the page via props
  return {
    props: {
      events_participe: dummy_events,
      events_organise: dummy_events
    }
  }
}
