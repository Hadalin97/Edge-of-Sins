// ============================================================
// TOUR DATES — add or remove gigs here.
//
// To add a gig, copy any row and fill in:
//   date:  'YYYY-MM-DD'  ← used to detect past shows automatically
//   label: 'DD. MM. YYYY' ← display text on the page
//   event: 'Event name'
//   city:  'City'
//
// Past dates are automatically dimmed and struck through.
// ============================================================
const GIGS = [
  { date: '2026-02-21', label: '21. 02. 2026', event: 'Swenak',                 city: 'Idrija'     },
  { date: '2026-03-13', label: '13. 03. 2026', event: 'Metalnight',             city: 'Kamnik'     },
  { date: '2026-04-25', label: '25. 04. 2026', event: 'CMAK',                   city: 'Cerkno'     },
  { date: '2026-05-15', label: '15. 05. 2026', event: 'KoD Menza',              city: 'Ljubljana'  },
  { date: '2026-06-12', label: '12. 06. 2026', event: 'Plunpitk Metalnight',    city: 'Idrija'     },
  { date: '2026-06-20', label: '20. 06. 2026', event: 'Release Party — Bratva', city: 'Novo Mesto' },
  { date: '2026-08-27', label: '27. 08. 2026', event: 'Kunigunda Festival',     city: 'Velenje'    },
];

(function renderGigs() {
  const list = document.getElementById('gigList');
  if (!list) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  GIGS.forEach(gig => {
    const isPast = new Date(gig.date) < today;
    const li = document.createElement('li');
    li.className = 'gig-item' + (isPast ? ' gig-item--past' : '');
    li.innerHTML = `
      <div class="gig-date">${gig.label}</div>
      <div class="gig-info">
        <div class="gig-event">${gig.event}</div>
        <div class="gig-city">${gig.city}</div>
      </div>`;
    list.appendChild(li);
  });
})();
