/* =============================================
   LONAWALA JELLY — Premium JavaScript
   ============================================= */

// ── Flavours Data ──────────────────────────────
const FLAVORS = [
  { id:1,  name:"Mango",                folder:"Mango",                   img:"IMG_2133.JPG", emoji:"🥭", cat:"fruit",   desc:"Sweet & tropical mango-flavoured sugar-coated jelly.",         price:"₹149" },
  { id:2,  name:"Lichi",                folder:"Lichi",                   img:"IMG_2137.JPG", emoji:"🍒", cat:"fruit",   desc:"Juicy & fragrant lychee-flavoured sugar-coated jelly.",         price:"₹149" },
  { id:3,  name:"Blueberry",            folder:"Blueberry_",              img:"IMG_2141.JPG", emoji:"🫐", cat:"fruit",   desc:"Fresh & vibrant blueberry-flavoured sugar-coated jelly.",       price:"₹149" },
  { id:4,  name:"Imli",                 folder:"Imli",                    img:"IMG_2145.JPG", emoji:"🌰", cat:"desi",    desc:"Tangy & zingy tamarind-flavoured sugar-coated jelly.",           price:"₹149" },
  { id:5,  name:"Rose",                 folder:"Rose",                    img:"IMG_2149.JPG", emoji:"🌹", cat:"floral",  desc:"Delicate & floral rose-flavoured sugar-coated jelly.",           price:"₹149" },
  { id:6,  name:"Black Currant",        folder:"Black currant",           img:"IMG_2153.JPG", emoji:"🫐", cat:"fruit",   desc:"Rich & bold black currant-flavoured sugar-coated jelly.",       price:"₹149" },
  { id:7,  name:"Kulfi Sandwich",       folder:"Kulfi Sandwich_",         img:"IMG_2157.JPG", emoji:"🍦", cat:"desi",    desc:"Creamy & indulgent kulfi sandwich-flavoured jelly.",             price:"₹149" },
  { id:8,  name:"Green Mango",          folder:"Green Mango_",            img:"IMG_2161.JPG", emoji:"🥭", cat:"fruit",   desc:"Tangy & sharp raw mango-flavoured sugar-coated jelly.",          price:"₹149" },
  { id:9,  name:"Watermelon",           folder:"Watermelon_",             img:"IMG_2165.JPG", emoji:"🍉", cat:"fruit",   desc:"Refreshing & juicy watermelon-flavoured sugar-coated jelly.",   price:"₹149" },
  { id:10, name:"Strawberry",           folder:"Strawberry_",             img:"IMG_2169.JPG", emoji:"🍓", cat:"fruit",   desc:"Sweet & luscious strawberry-flavoured sugar-coated jelly.",     price:"₹149" },
  { id:11, name:"Guava",                folder:"Guava",                   img:"IMG_2173.JPG", emoji:"🍈", cat:"fruit",   desc:"Tropical & tangy guava-flavoured sugar-coated jelly.",           price:"₹149" },
  { id:12, name:"PAN",                  folder:"PAN",                     img:"IMG_2177.JPG", emoji:"🌿", cat:"desi",    desc:"Classic & aromatic paan-flavoured sugar-coated jelly.",          price:"₹149" },
  { id:13, name:"Sandwich",             folder:"Sandwich_",               img:"IMG_2181.JPG", emoji:"🍦", cat:"special", desc:"Unique & delightful sandwich-flavoured sugar-coated jelly.",    price:"₹149" },
  { id:14, name:"Jalebi",               folder:"Jalebi",                  img:"IMG_2185.JPG", emoji:"🍩", cat:"desi",    desc:"Desi & sweet jalebi-flavoured sugar-coated jelly.",              price:"₹149" },
  { id:15, name:"Sweetheart",           folder:"Sweetheart_",             img:"IMG_2189.JPG", emoji:"💜", cat:"special", desc:"Sweet & charming sweetheart-flavoured sugar-coated jelly.",     price:"₹149" },
  { id:16, name:"Orange",               folder:"Orange",                  img:"IMG_2193.JPG", emoji:"🍊", cat:"fruit",   desc:"Zesty & refreshing orange-flavoured sugar-coated jelly.",       price:"₹149" },
  { id:17, name:"Sweetheart Heart Pack",folder:"Sweetheart Heart Packing",img:"IMG_2197.JPG", emoji:"💖", cat:"special", desc:"Special heart-pack edition — the perfect sweet gift!",          price:"₹149" },
];

const CAT_LABELS = {
  fruit:   "Fruity",
  desi:    "Desi",
  floral:  "Floral",
  special: "Special",
};

// ── Render cards ───────────────────────────────
function renderCards(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:40px 0">No flavours found.</p>';
    return;
  }

  list.forEach((f, i) => {
    const imgPath = `images/${f.folder}/${f.img}`;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          src="${imgPath}"
          alt="${f.name} Jelly — Lonawala"
          loading="lazy"
          width="400" height="300"
          onerror="this.closest('.card-img-wrap').style.background='var(--cream-dark)';this.style.display='none'"
        />
        <span class="card-badge">${CAT_LABELS[f.cat] || f.cat}</span>
        <span class="card-emoji">${f.emoji}</span>
      </div>
      <div class="card-body">
        <h3>${f.name}</h3>
        <p>${f.desc}</p>
        <div class="card-footer">
          <div class="card-price">${f.price} <small>/ 200g</small></div>
          <a href="#" class="btn-buy" aria-label="Buy ${f.name} Jelly on Meesho">
            🛍️ Meesho
          </a>
        </div>
        <div class="veg-tag"><span class="veg-dot"></span> Pure Veg &nbsp;·&nbsp; No Gelatin</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Filter tabs ────────────────────────────────
function initFilters() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      renderCards(cat === 'all' ? FLAVORS : FLAVORS.filter(f => f.cat === cat));
    });
  });
}

// ── Sticky header shadow ───────────────────────
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ── Mobile drawer ──────────────────────────────
function initDrawer() {
  const burger  = document.getElementById('hamburger');
  const drawer  = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const close   = document.getElementById('drawer-close');

  function open()  { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close_() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

  burger?.addEventListener('click', open);
  close?.addEventListener('click', close_);
  overlay?.addEventListener('click', close_);
  document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', close_));
}

// ── Scroll-to-top ──────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    btn?.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Intersection Observer (scroll animations) ──
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ── Active nav link on scroll ──────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => {
          l.style.color = l.getAttribute('href') === `#${e.target.id}` ? 'var(--teal)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards(FLAVORS);
  initFilters();
  initHeader();
  initDrawer();
  initScrollTop();
  initAnimations();
  initActiveNav();
});
