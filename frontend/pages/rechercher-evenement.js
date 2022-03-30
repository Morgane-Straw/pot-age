import BarreRechercheEvent from '../components/recherche/BarreRechercheEvent';
import CarteEvenement from '../components/event/CarteEvenement';
import RechercheRecente from '../components/recherche/RechercheRecente';
import RechercheContext from '../components/recherche/RechercheContext';

import { useState, useEffect } from 'react';
export default function RechercherEvenement(props) {
  const [ville, setVille] = useState();
  const [activite, setActivite] = useState();
  const [type, setType] = useState();
  const [dates, setDates] = useState([]);

  const [resultats, setResultats] = useState();

  return <RechercheContext.Provider
    value={{
      state: {
        ville: { ville },
        activite: { activite },
        type: { type },
        dates:{dates}
      },
      setVille: setVille,
      setActivite: setActivite,
      setType: setType,
      setDates:setDates
    }}
  >
    <div className=' mts-event'>
      {[ville?.properties?.name, activite, type]}
      <img src='img/gr9y07ie.svg' alt='femme âgée avec une une jeune femme' className='position-absolute top-right-0 z-index-bottom w-img-bg-event'></img>

      <h1 className='text-primary'>
        Rechercher un évènement
      </h1>
      <BarreRechercheEvent
        setResultats={(e) => setResultats(e)}
      />

      {props.recherches_recentes ? <div>
        <h2 className='mt-5 text-primary ms-5'>
          Recherches Recentes</h2>
        <div className='d-flex flex-row'>
          {props.recherches_recentes.slice(0, 3).map(recherche =>
            <RechercheRecente
              recherche={recherche}
              setVille={(e) => setVille(e)}
              setActivite={(e) => setActivite(e)}
              setType={(e) => setType(e)}
            ></RechercheRecente>)}
        </div>
      </div>
        : ""
      }
      {resultats ? <div>
        <h2 className='mt-5 text-primary ms-5'>Resultats</h2>
        <div className='d-flex flex-row flex-wrap mt-3'>
          {resultats.map(event =>
            <CarteEvenement
              event={event}
            />
          )}
        </div>
      </div> :
        <div>
          <h2 className='mt-5 text-primary ms-5'>Evènements à Proximité</h2>
          <div className='d-flex flex-row flex-wrap mt-3'>
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
        ville: "Nancy",
        activite: "Poterie",
        type: "demandes"
      }, {
        ville: "Nancy",
        activite: "Poterie",
        type: "propositions"
      }, {
        ville: "Mirecourt",
        activite: "Poterie",
        type: "demandes"
      }, {
        ville: "Nancy",
        activite: "Peinture",
        type: "demandes"
      }],
      events_proximite: [{
        id: 'basketball1',
        titre: "Basketball1",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball2",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball3",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball4",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball5",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball6",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball7",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball8",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }, {
        id: 'basketball1',
        titre: "Basketball9",
        img: {
          raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
          regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
          small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
        },
        date: new Date().toString(),
        horaires: ['14:00', "16:00"],
        lieu: "MJC Lorraine",
        ageParticipants: [6, 10],
        description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
        nbParticipants: [5, 15],
        participe: false,
      }]
    }
  }
}