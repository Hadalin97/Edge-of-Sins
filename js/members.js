// ============================================================
// BAND MEMBERS — edit bios and roles here, or add/remove members.
// photo: path from site root
// role: displayed under the name (bilingual)
// bio: shown on hover (English only)
// ============================================================
const MEMBERS = [
  {
    name:  'Nejc Hadalin',
    photo: 'Pictures and logos/member_nejc.jpg',
    role:  { en: 'Drums', sl: 'Bobni' },
    bio:   {
      en: "The rhythmic engine of Edge of Sins. Nejc's hard-hitting, precise drumming has driven the band since the earliest days — anchoring every tempo shift with power and control.",
      sl: "Ritmični motor Edge of Sins. Nejcevo trdno in natančno udarjanje bobna poganja bend od samih začetkov — vsako spremembo tempa zasidruje z močjo in kontrolo.",
    },
  },
  {
    name:  'Sašo Bogataj',
    photo: 'Pictures and logos/member_saso.jpg',
    role:  { en: 'Bass', sl: 'Bas' },
    bio:   {
      en: "Sašo's driving basslines form the low-end backbone of the band's heaviness. Locking tight with the drums, his groove keeps the wall of sound in constant motion.",
      sl: "Sašove energične basovske linije tvorijo nizkofrekvenčno hrbtenico zvoka benda. V tesnem soglasju z bobni njegov groove ohranja zid zvoka v nenehnem gibanju.",
    },
  },
  {
    name:  'Žiga Gladek',
    photo: 'Pictures and logos/member_zigag.jpg',
    role:  { en: 'Vocals', sl: 'Vokal' },
    bio:   {
      en: "The voice of Edge of Sins. Žiga's range spans haunting melodic cleans to raw, scorching intensity — the emotional core of every song and every live performance.",
      sl: "Glas Edge of Sins. Žigov razpon sega od vznemirljivih melodičnih čistih tonov do surove, žgoče intenzivnosti — čustveno jedro vsake pesmi in vsakega nastopa v živo.",
    },
  },
  {
    name:  'Žiga Kodre',
    photo: 'Pictures and logos/member_zigakodre.jpg',
    role:  { en: 'Guitar', sl: 'Kitara' },
    bio:   {
      en: "Riffs, leads, and everything in between. Žiga's guitar work blends technical precision with raw emotion, always in service of the song's inner force.",
      sl: "Riffi, solaži in vse vmes. Žigova kitarska igra združuje tehnično natančnost s surovo emocijo, vedno v službi notranje sile pesmi.",
    },
  },
  {
    name:  'Blaž Hadalin',
    photo: 'Pictures and logos/member_blaz.jpg',
    role:  { en: 'Guitar / Backing Vocals', sl: 'Kitara / spremljevalni vokal' },
    bio:   {
      en: "Rhythm guitar and vocal harmonies. Blaž brings the crunch of heavy riffing alongside backing vocals, completing the twin-guitar attack that defines the band's heavier sound.",
      sl: "Ritmična kitara in vokalne harmonije. Blaž prinaša grobost težkih riffov skupaj s spremljevalnim vokalom in dopolnjuje napad dveh kitar, ki definira težji zvok benda.",
    },
  },
];

(function renderMembers() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;
  MEMBERS.forEach(m => {
    const card = document.createElement('div');
    card.className = 'member-card reveal';
    card.innerHTML = `
      <div class="member-photo-wrap">
        <img src="${m.photo}" alt="${m.name}" loading="lazy">
        <div class="member-overlay"><p data-en="${m.bio.en}" data-sl="${m.bio.sl}">${m.bio.en}</p></div>
      </div>
      <div class="member-info">
        <div class="member-name">${m.name}</div>
        <div class="member-role" data-en="${m.role.en}" data-sl="${m.role.sl}">${m.role.en}</div>
      </div>`;
    grid.appendChild(card);
  });
})();
