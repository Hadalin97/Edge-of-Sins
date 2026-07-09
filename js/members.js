// ============================================================
// BAND MEMBERS - edit roles here, or add/remove members.
// photo: path from site root
// role: displayed under the name (bilingual)
// ============================================================
const MEMBERS = [
  {
    name:  'Nejc Hadalin',
    photo: 'Pictures and logos/member_nejc.jpg',
    role:  { en: 'Drums', sl: 'Bobni' },
  },
  {
    name:  'Sašo Bogataj',
    photo: 'Pictures and logos/member_saso.jpg',
    role:  { en: 'Bass', sl: 'Bas' },
  },
  {
    name:  'Žiga Gladek',
    photo: 'Pictures and logos/member_zigag.jpg',
    role:  { en: 'Vocals', sl: 'Vokal' },
  },
  {
    name:  'Žiga Kodre',
    photo: 'Pictures and logos/member_zigakodre.jpg',
    role:  { en: 'Guitar', sl: 'Kitara' },
  },
  {
    name:  'Blaž Hadalin',
    photo: 'Pictures and logos/member_blaz.jpg',
    role:  { en: 'Guitar / Backing Vocals', sl: 'Kitara / spremljevalni vokal' },
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
      </div>
      <div class="member-info">
        <div class="member-name">${m.name}</div>
        <div class="member-role" data-en="${m.role.en}" data-sl="${m.role.sl}">${m.role.en}</div>
      </div>`;
    grid.appendChild(card);
  });
})();
