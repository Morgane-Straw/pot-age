import { useState, useEffect } from "react";
import CarteEvenement from "../components/event/CarteEvenement";
import { useRouter } from 'next/router';
import RowEvents from "../components/event/RowEvents";
//avancer dans les evenements

export default function MesEvenements() {
  const router = useRouter();
  const [events_participe, setEventsParticipe] = useState([]);
  const [events_organise, setEventsOrganise] = useState([]);
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [i1, setI1] = useState(0);
  const [i2, setI2] = useState(0);
  useEffect(() => {
    setEventsParticipe([{
      id: 'basketball1',
      titre: "Basketball1",
      img: {
        raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
        regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
      },
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
      horaires: ['14:00', "16:00"],
      lieu: "MJC Lorraine",
      ageParticipants: [6, 10],
      description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
      nbParticipants: [5, 15],
      participe: false,
    }]);
    setEventsOrganise([{
      id: 'basketball1',
      titre: "Basketball1",
      img: {
        raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
        regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
      },
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
      horaires: ['14:00', "16:00"],
      lieu: "MJC Lorraine",
      ageParticipants: [6, 10],
      description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
      nbParticipants: [5, 15],
      participe: false,
    }]);
  }, []);

  return <div className="ms-5">
    <img src='img/pexels-photo-2050994.png' alt='femme âgée souriant dans un buisson de fleurs' className='position-fixed top-right-0 z-index-bottom h-img-mes-event'></img>
    <h1 className="text-primary">
      Mes évènements
    </h1>
    <h2 className="text-primary mb-3">
      Evènements auxquels je participe
    </h2>
    <div className="d-flex flex-row  align-items-stretch mb-5">
      <RowEvents events={events_participe}></RowEvents>
    </div>
    <h2 className="text-primary mb-3">
      Evènements que j'organise
    </h2>
    <div className="d-flex flex-row">
    <RowEvents events={events_organise}></RowEvents>
    </div>
  </div>
}

