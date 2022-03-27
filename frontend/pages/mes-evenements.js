import CarteEvenement from "../components/event/CarteEvenement";

export default function MesEvenements() {
  return <div>
    <CarteEvenement
      event={{
        titre: "Basketball",
        img: { regular: "/uploads/apple-pie-g2708a1c90_1920.jpg" },
        date:new Date(),
        horaires: ['14h', "16h"],
        lieu:"MJC Lorraine",
        ageParticipants: [5, 12],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aofficiis! Aniectetur unde autem inventore.",
        nbParticipants:[5,15],
      }}
    />

  </div>
}

