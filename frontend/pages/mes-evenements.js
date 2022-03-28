import { useState, useEffect } from "react";
import CarteEvenement from "../components/event/CarteEvenement";

export default function MesEvenements() {
  const setParticipe = (a, e) => { alert(a + e) };
  const [events, setEvents] = useState([]);
  useEffect(()=>setEvents([{
    id: 'basketball1',
    titre: "Basketball",
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
    setParticipe: (e) => setParticipe('basketball1', e),
  }]), [])
  return <div>
    {events.map(event => <CarteEvenement
      event={event}
    />)}

  </div>
}

