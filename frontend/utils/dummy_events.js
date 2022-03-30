const dummy_events=[{
    id: 'basketball',
    titre: "Basketball",
    img: {
      raw: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1",
      regular: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTMxMDh8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsfGVufDB8fHx8MTY0ODQ1ODc2OA&ixlib=rb-1.2.1&q=80&w=400"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un match de basketball sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Football',
    titre: "Football",
    img: {
      raw: "https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      regular: "https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      small: "https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un match de football sur le terrain de la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Hip Hop',
    titre: "Hip Hop",
    img: {
      raw: "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      regular: "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      small: "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un cours de hip hop à la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Poterie',
    titre: "Poterie",
    img: {
      raw: "https://images.unsplash.com/photo-1607556671927-78a6605e290b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      regular: "https://images.unsplash.com/photo-1607556671927-78a6605e290b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      small: "https://images.unsplash.com/photo-1607556671927-78a6605e290b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un atelier poterie à la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Loisirs créatifs',
    titre: "Loisirs créatifs ",
    img: {
      raw: "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80",
      regular: "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80",
      small: "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un atelier loisirs créatifs à la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'atelier cuisine',
    titre: "atelier cuisine",
    img: {
      raw: "https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      regular: "https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      small: "https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un atelier cuisine à la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Initiation au crochet',
    titre: "Initiation au crochet",
    img: {
      raw: "https://images.unsplash.com/photo-1648217736318-fbc4abc138ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY290fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      regular: "https://images.unsplash.com/photo-1648217736318-fbc4abc138ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY290fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      small: "https://images.unsplash.com/photo-1648217736318-fbc4abc138ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY290fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [6, 10],
    description: "Bonjour ! Je propose d’organiser un atelier d'initiation au crochet à la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 15],
    participe: false,
  }, {
    id: 'Jeux avec chiens et chats',
    titre: "Jeux avec chiens et chats",
    img: {
      raw: "https://images.unsplash.com/photo-1581171383994-afd540b6a4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80",
      regular: "https://images.unsplash.com/photo-1581171383994-afd540b6a4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80",
      small: "https://images.unsplash.com/photo-1581171383994-afd540b6a4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [3, 10],
    description: "Bonjour ! Je propose d’organiser une partie de jeux avec mes animaux Tigrou et Tigrette à mon domicile pour des enfants âgés entre 3 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [1, 2],
    participe: false,
  }, {
    id: 'Initiation à la photographie',
    titre: "Initiation à la photographie",
    img: {
      raw: "https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      regular: "https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      small: "https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    date: new Date().toString(),
    horaires: ['14:00', "16:00"],
    lieu: "MJC Lorraine",
    ageParticipants: [9, 16],
    description: "Bonjour ! Je propose d’organiser un atelier d'initation à la photographie avec pour point de départ la MJC Lorraine de Vandoeuvre pour des enfants âgés entre 6 et 10 ans. Les parents sont également les bienvenus pour partager un échange convivial. N’hésitez pas à me contacter par message si vous souhaitez en discuter davantage ! Amicalement, Jean",
    nbParticipants: [5, 7],
    participe: false,
  }];
  export default dummy_events;