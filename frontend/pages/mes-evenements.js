import { useState, useEffect } from "react";
import CarteEvenement from "../components/event/CarteEvenement";
import { useRouter } from 'next/router';
import RowEvents from "../components/event/RowEvents";
//avancer dans les evenements

export default function MesEvenements(props) {
  const router = useRouter();
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);



  useEffect(() => setRow1(props.events_participe ? <RowEvents events={props.events_participe}>
    <div className="card d-flex flex-column justify-content-center align-items-center text-primary fs-4 text-center p-5 cursor-pointer flex-grow-1 flex-shrink-0"
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
    <img src='img/pexels-photo-2050994.png' alt='femme âgée souriant dans un buisson de fleurs' className='position-fixed top-right-0 z-index-bottom h-img-mes-event '></img>
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
      events_participe: [{
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
      }],
      events_organise: [{
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
