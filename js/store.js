// ============================================================
// STORE PRODUCTS - add or edit merchandise here.
//
// To add a product, copy any object and fill in:
//   name:      { en: '...', sl: '...' }
//   desc:      { en: '...', sl: '...' }
//   price:     '€XX'
//   image:     'store/filename.png'  - or '' to show the placeholder symbol
//   available: false  → "Coming Soon" button (inactive)
//              true   → "Buy Now" button (active - also set buyUrl below)
//   buyUrl:    'https://...'  - link when available: true (can omit when false)
// ============================================================
const PRODUCTS = [
  {
    name:      { en: 'Logo Tee',       sl: 'Majica z logotipom' },
    desc:      { en: 'Classic black tee with the Edge of Sins emblem. 100% cotton, unisex cut.',
                 sl: 'Klasična črna majica z znakom Edge of Sins. 100% bombaž, unisex kroj.' },
    price:     '€25',
    image:     'store/tshirt.png',
    available: false,
  },
  {
    name:      { en: 'My Escape Tee',  sl: 'My Escape majica' },
    desc:      { en: 'Debut album anniversary design on premium heavyweight cotton.',
                 sl: 'Dizajn ob obletnici prvega albuma. Tisk na kakovostnem težkem bombaž.' },
    price:     '€25',
    image:     '',
    available: false,
  },
  {
    name:      { en: 'Metal Socks',    sl: 'Metal nogavice' },
    desc:      { en: 'EoS skull-pattern crew socks. Reinforced heel and toe, one size fits most.',
                 sl: 'Nogavice z vzorcem EoS. Ojačana peta in prsti, ena velikost.' },
    price:     '€10',
    image:     'store/socks.png',
    available: false,
  },
  {
    name:      { en: 'EoS Snapback',   sl: 'EoS kapa s šiltom' },
    desc:      { en: 'Structured snapback with embroidered band symbol. Adjustable fit.',
                 sl: 'Strukturirana kapa z vezenem simbolom benda. Nastavljiva velikost.' },
    price:     '€22',
    image:     'store/snapback.png',
    available: false,
  },
  {
    name:      { en: 'EoS Beanie',     sl: 'EoS kapa' },
    desc:      { en: 'Knitted winter beanie with woven EoS logo label. Warm and snug.',
                 sl: 'Pletena zimska kapa z vgraviranim logotipom EoS. Topla in udobna.' },
    price:     '€18',
    image:     'store/beanie.png',
    available: false,
  },
];

(function renderStore() {
  const grid = document.getElementById('storeGrid');
  if (!grid) return;

  PRODUCTS.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';

    const hasImage = !!product.image;
    const imgContent = hasImage
      ? `<img src="${product.image}" alt="${product.name.en}">`
      : `<img src="Pictures and logos/symbol_white.png" alt="">`;

    const btnEn = product.available ? 'Buy Now'       : 'Coming Soon';
    const btnSl = product.available ? 'Kupi zdaj'     : 'Kmalu na voljo';

    let actionBtn;
    if (product.available && product.buyUrl) {
      actionBtn = `<a class="btn primary" href="${product.buyUrl}" target="_blank" rel="noopener"
        style="width:100%; justify-content:center;" data-en="${btnEn}" data-sl="${btnSl}">${btnEn}</a>`;
    } else {
      actionBtn = `<button class="btn" style="width:100%; justify-content:center; opacity:0.6; cursor:default;"
        data-en="${btnEn}" data-sl="${btnSl}" disabled>${btnEn}</button>`;
    }

    card.innerHTML = `
      <div class="product-img${hasImage ? ' product-img--has-image' : ''}">${imgContent}</div>
      <div class="product-body">
        <div class="product-name" data-en="${product.name.en}" data-sl="${product.name.sl}">${product.name.en}</div>
        <div class="product-desc" data-en="${product.desc.en}" data-sl="${product.desc.sl}">${product.desc.en}</div>
        <div class="product-price">${product.price}</div>
        ${actionBtn}
      </div>`;
    grid.appendChild(card);
  });
})();
