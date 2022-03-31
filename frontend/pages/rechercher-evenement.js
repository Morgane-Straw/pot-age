import BarreRechercheEvent from '../components/recherche/BarreRechercheEvent';
import CarteEvenement from '../components/event/CarteEvenement';
import RechercheRecente from '../components/recherche/RechercheRecente';
import RechercheContext from '../components/recherche/RechercheContext';
import dummy_events from '../utils/dummy_events';

import { useState, useEffect } from 'react';
export default function RechercherEvenement(props) {
  const [activite, setActivite] = useState();
  const [lieu, setLieu] = useState();
  const [type, setType] = useState();
  const [dates, setDates] = useState([]);
  const [distance,setDistance]=useState(0);

  const [resultats, setResultats] = useState();
  const [barre, setBarre] = useState(<BarreRechercheEvent
    setResultats={(e) => setResultats(e)}
  />);

  return <RechercheContext.Provider
    value={{
      recherche: {
        activite: activite,
        lieu: lieu,
        type: type,
        dates: dates,
        distance:distance
      },
      setLieu: setLieu,
      setActivite: setActivite,
      setLieu: setLieu,
      setType: setType,
      setDates: setDates,
      setDistance:setDistance
    }}
  >
    <div className=' mts-event'>
      <img src='img/gr9y07ie.svg' alt='femme âgée avec une une jeune femme' className='position-absolute top-right-0 z-index-bottom w-img-bg-event'></img>

      <h1 className='text-primary'>
        Rechercher un évènement
      </h1>
      {barre}

      {props.recherches_recentes ? <div>
        <h2 className='mt-5 text-primary ms-5'>
          Recherches récentes</h2>
        <div className='d-flex flex-row'>
          {props.recherches_recentes.slice(0, 3).map(recherche =>
            <RechercheRecente
              recherche={recherche}
              setLieu={(e) => setLieu(e)}
              setActivite={(e) => setActivite(e)}
              setType={(e) => setType(e)}
              update={() => setBarre(<BarreRechercheEvent
                setResultats={(e) => setResultats(e)}
              />)}
            ></RechercheRecente>)}
        </div>
      </div>
        : ""
      }
      {resultats ? <div>
        <h2 className='mt-5 text-primary ms-5'>Resultats</h2>
        <div className='d-flex flex-row flex-wrap mt-3 me-5 justify-content-center'>
          {resultats.map(event =>
            <CarteEvenement
              event={event}
            />
          )}
        </div>
      </div> :
        <div>
          <h2 className='mt-5 text-primary ms-5'>Evènements à Proximité</h2>
          <div className='d-flex flex-row flex-wrap mt-3 me-5 justify-content-center'>
            {props.events_proximite?.map(event =>
              <CarteEvenement
                event={event}
              />
            )}
          </div>
        </div>}
    </div>
  </RechercheContext.Provider>
}

export async function getServerSideProps() {
  return {
    props: {
      recherches_recentes: [{
        lieu: { properties: { name: "Nancy", city: "Nancy", postcode: "54000" } },
        activite: "Poterie",
        type: "demandes"
      }, {
        lieu: { properties: { name: "Nancy", city: "Nancy", postcode: "54000" } },
        activite: "Pâte à modeler",
        type: "propositions"
      }, {
        lieu: { properties: { name: "Mirecourt", city: "Mirecourt", postcode: "88500" } },
        activite: "Choucroute",
        type: "demandes"
      }, {
        lieu: { properties: { name: "Nancy", city: "Nancy", postcode: "54000" } },
        activite: "Peinture",
        type: "demandes"
      }],
      events_proximite: dummy_events
    }
  }
}
