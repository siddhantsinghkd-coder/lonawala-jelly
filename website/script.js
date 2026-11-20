/* =====================================================
   LONAWALA JELLY — Complete JavaScript
   All interactions: carousel, nostalgia, mood, roulette,
   testimonials, drawer, animations, easter egg
   ===================================================== */

// ── DATA ──────────────────────────────────────────────
const FLAVORS = [
  { id:1,  name:"Mango",                 folder:"Mango",                   img:"IMG_2133.JPG", cat:"fruit",   emoji:"🥭", price:"₹149" },
  { id:2,  name:"Lichi",                 folder:"Lichi",                   img:"IMG_2137.JPG", cat:"fruit",   emoji:"🍒", price:"₹149" },
  { id:3,  name:"Blueberry",             folder:"Blueberry_",              img:"IMG_2141.JPG", cat:"fruit",   emoji:"🫐", price:"₹149" },
  { id:4,  name:"Imli",                  folder:"Imli",                    img:"IMG_2145.JPG", cat:"desi",    emoji:"🌰", price:"₹149" },
  { id:5,  name:"Rose",                  folder:"Rose",                    img:"IMG_2149.JPG", cat:"floral",  emoji:"🌹", price:"₹149" },
  { id:6,  name:"Black Currant",         folder:"Black currant",           img:"IMG_2153.JPG", cat:"fruit",   emoji:"🍇", price:"₹149" },
  { id:7,  name:"Kulfi Sandwich",        folder:"Kulfi Sandwich_",         img:"IMG_2157.JPG", cat:"desi",    emoji:"🍦", price:"₹149" },
  { id:8,  name:"Green Mango",           folder:"Green Mango_",            img:"IMG_2161.JPG", cat:"fruit",   emoji:"🥭", price:"₹149" },
  { id:9,  name:"Watermelon",            folder:"Watermelon_",             img:"IMG_2165.JPG", cat:"fruit",   emoji:"🍉", price:"₹149" },
  { id:10, name:"Strawberry",            folder:"Strawberry_",             img:"IMG_2169.JPG", cat:"fruit",   emoji:"🍓", price:"₹149" },
  { id:11, name:"Guava",                 folder:"Guava",                   img:"IMG_2173.JPG", cat:"fruit",   emoji:"🍈", price:"₹149" },
  { id:12, name:"PAN",                   folder:"PAN",                     img:"IMG_2177.JPG", cat:"desi",    emoji:"🌿", price:"₹149" },
  { id:13, name:"Sandwich",              folder:"Sandwich_",               img:"IMG_2181.JPG", cat:"special", emoji:"🍦", price:"₹149" },
  { id:14, name:"Jalebi",                folder:"Jalebi",                  img:"IMG_2185.JPG", cat:"desi",    emoji:"🍩", price:"₹149" },
  { id:15, name:"Sweetheart",            folder:"Sweetheart_",             img:"IMG_2189.JPG", cat:"special", emoji:"💜", price:"₹149" },
  { id:16, name:"Orange",                folder:"Orange",                  img:"IMG_2193.JPG", cat:"fruit",   emoji:"🍊", price:"₹149" },
  { id:17, name:"Sweetheart Heart Pack", folder:"Sweetheart Heart Packing",img:"IMG_2197.JPG", cat:"special", emoji:"💖", price:"₹199" },
];

const CAT_MAP = { all:"All", fruit:"Fruity", desi:"Desi", floral:"Floral", special:"Special" };

// ── ANNOUNCEMENT BAR ROTATOR ──────────────────────────
(function() {
  const msgs = document.querySelectorAll('.ann-msg');
  if (!msgs.length) return;
  let cur = 0;
  setInterval(() => {
    msgs[cur].classList.remove('active');
    cur = (cur + 1) % msgs.length;
    msgs[cur].classList.add('active');
  }, 3200);
})();

// ── HEADER SCROLL ──────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('scroll-top')?.classList.toggle('vis', window.scrollY > 450);
}, { passive: true });

// ── MOBILE DRAWER ─────────────────────────────────────
(function() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');
  const overlay   = document.getElementById('drawer-overlay');
  const closeBtn  = document.getElementById('drawer-close');

  const open = () => {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    hamburger?.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
})();

// ── SCROLL TO TOP ─────────────────────────────────────
document.getElementById('scroll-top')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// ── PRODUCT CAROUSEL ──────────────────────────────────
let currentCat  = 'all';
let carIndex    = 0;
const CARD_W    = 356; // 340px card + 16px gap

function getVisible() {
  const w = window.innerWidth;
  if (w >= 1200) return 3;
  if (w >= 900)  return 2;
  return 1;
}

function buildCards(list) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  track.innerHTML = '';
  carIndex = 0;
  track.style.transform = 'translateX(0)';

  if (!list.length) {
    track.innerHTML = '<p style="padding:40px 24px;color:var(--text-muted);font-weight:600">No flavours in this category.</p>';
    return;
  }

  list.forEach((f, i) => {
    const card = document.createElement('article');
    card.className = 'pcard';
    card.style.background = i % 2 === 0 ? 'var(--white)' : 'var(--cream-dark)';
    card.innerHTML = `
      <div class="pcard-img">
        <span class="pcard-badge">${CAT_MAP[f.cat] || f.cat}</span>
        <img src="images/${f.folder}/${f.img}" alt="${f.name} Jelly" loading="lazy" width="300" height="300"
          onerror="this.style.display='none'"/>
      </div>
      <h3>${f.name}</h3>
      <p class="pcard-price">${f.price} <small>/ 200g</small></p>
      <a href="https://www.meesho.com/KESARBHAVANIINDUSTRIES?ms=2" target="_blank" rel="noopener" class="pcard-buy" aria-label="Buy ${f.name} on Meesho">🛍️ Buy on Meesho</a>
      <p class="pcard-veg">🌿 Pure Veg · No Gelatin</p>
    `;
    track.appendChild(card);
  });
}

function slideCarousel(dir) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const list = currentCat === 'all' ? FLAVORS : FLAVORS.filter(f => f.cat === currentCat);
  const max  = Math.max(0, list.length - getVisible());
  carIndex   = Math.max(0, Math.min(max, carIndex + dir));
  track.style.transform = `translateX(-${carIndex * CARD_W}px)`;
}

// Init carousel
buildCards(FLAVORS);

document.getElementById('car-prev')?.addEventListener('click', () => slideCarousel(-1));
document.getElementById('car-next')?.addEventListener('click', () => slideCarousel(1));

// Touch swipe on carousel
(function() {
  const vp = document.getElementById('carousel-viewport');
  if (!vp) return;
  let sx = 0;
  vp.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 48) slideCarousel(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

// Filter tabs
document.getElementById('filter-tabs')?.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  currentCat = btn.dataset.cat;
  const list = currentCat === 'all' ? FLAVORS : FLAVORS.filter(f => f.cat === currentCat);
  buildCards(list);
});

// ── TESTIMONIALS ──────────────────────────────────────
const TESTIMONIALS = [
  { q:"These are so good it's insane. The perfect crunch, the right sweetness — the fruit flavours are absolutely authentic!", cite:"— Priya S., Mumbai" },
  { q:"I've tried so many jelly brands but Lonawala is on another level. The Imli and Jalebi taste exactly like the real thing — pure nostalgia!", cite:"— Rahul M., Delhi" },
  { q:"My kids absolutely love the Mango and Strawberry. The sugar coating gives it that satisfying crunch. We order every month!", cite:"— Kavita P., Surat" },
  { q:"The Rose flavour is so unique and delicate! Ordered for a family function and everyone wanted to know where to get more.", cite:"— Anita K., Ahmedabad" },
];

(function() {
  let ti = 0;
  const qEl   = document.getElementById('testi-quote');
  const cEl   = document.getElementById('testi-cite');
  const dots  = document.querySelectorAll('.t-dot');
  const cent  = document.getElementById('testi-center');
  if (!qEl) return;

  cent.style.transition = 'opacity .25s,transform .25s';

  function showTesti(i) {
    ti = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    cent.style.opacity = '0'; cent.style.transform = 'scale(.97)';
    setTimeout(() => {
      qEl.textContent = TESTIMONIALS[ti].q;
      cEl.textContent = TESTIMONIALS[ti].cite;
      cent.style.opacity = '1'; cent.style.transform = 'scale(1)';
    }, 220);
    dots.forEach((d,j) => d.classList.toggle('active', j === ti));
  }

  document.getElementById('testi-prev')?.addEventListener('click', () => showTesti(ti - 1));
  document.getElementById('testi-next')?.addEventListener('click', () => showTesti(ti + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => showTesti(i)));
  setInterval(() => showTesti(ti + 1), 5000);
})();

// ── MOOD SELECTOR ─────────────────────────────────────
const MOOD_MAP = {
  happy:       { emoji:'🥭', flavour:'Mango',         why:'Mango is the happiest fruit on earth — just like you right now!' },
  stressed:    { emoji:'🌰', flavour:'Imli',           why:'Imli\'s sharp tang is the best stress-buster ever made.' },
  bored:       { emoji:'🫐', flavour:'Blueberry',      why:'Something bold and new — snap out of that boredom!' },
  romantic:    { emoji:'🌹', flavour:'Rose',           why:'Rose flavour — delicate, beautiful, made for the moment.' },
  homesick:    { emoji:'🍩', flavour:'Jalebi',         why:'Nothing says ghar jaisi feeling like a Jalebi jelly.' },
  adventurous: { emoji:'💖', flavour:'Sweetheart Heart Pack', why:'You live for surprises — the special edition is yours.' },
};

document.getElementById('mood-cards')?.addEventListener('click', e => {
  const btn = e.target.closest('.mood-card');
  if (!btn) return;
  document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');

  const mood = MOOD_MAP[btn.dataset.mood];
  const res  = document.getElementById('mood-result');
  if (!res || !mood) return;

  res.innerHTML = `
    <div class="mood-result-emoji">${mood.emoji}</div>
    <div class="mood-result-flavour">Your flavour: ${mood.flavour}</div>
    <div class="mood-result-why">${mood.why}</div>
  `;
  res.classList.add('show');
  res.scrollIntoView({ behavior:'smooth', block:'nearest' });
});

// ── FLAVOUR ROULETTE (Canvas Pie Wheel) ───────────────
(function() {
  const canvas  = document.getElementById('spin-canvas');
  const btn     = document.getElementById('spin-btn');
  const result  = document.getElementById('roulette-result');
  if (!canvas || !btn) return;

  const ctx = canvas.getContext('2d');
  const SIZE = canvas.width;          // 340
  const CX   = SIZE / 2;
  const CY   = SIZE / 2;
  const R    = SIZE / 2 - 4;         // radius with tiny padding

  const SEGMENTS = [
    { label:'Mango',           emoji:'🥭', color:'#FF9A3C' },
    { label:'Strawberry',      emoji:'🍓', color:'#E8395A' },
    { label:'Blueberry',       emoji:'🫐', color:'#5E2D91' },
    { label:'Imli',            emoji:'🌰', color:'#A0522D' },
    { label:'Rose',            emoji:'🌹', color:'#E91E8C' },
    { label:'Watermelon',      emoji:'🍉', color:'#4CAF50' },
    { label:'Orange',          emoji:'🍊', color:'#FF6D00' },
    { label:'Jalebi',          emoji:'🍩', color:'#F9A825' },
    { label:'PAN',             emoji:'🌿', color:'#2E7D32' },
    { label:'Black Currant',   emoji:'🍇', color:'#6A1B9A' },
    { label:'Lichi',           emoji:'🍒', color:'#D81B60' },
    { label:'Sweetheart',      emoji:'💜', color:'#7B1FA2' },
    { label:'Guava',           emoji:'🍈', color:'#8BC34A' },
    { label:'Kulfi Sandwich',  emoji:'🍦', color:'#00ACC1' },
    { label:'Green Mango',     emoji:'🥭', color:'#558B2F' },
  ];

  const N          = SEGMENTS.length;
  const ARC        = (2 * Math.PI) / N;
  let   currentAngle = 0;   // tracks cumulative rotation in radians
  let   spinning   = false;

  /* ── Draw the wheel at a given rotation ── */
  function drawWheel(rot) {
    ctx.clearRect(0, 0, SIZE, SIZE);

    SEGMENTS.forEach((seg, i) => {
      const start = rot + i * ARC;
      const end   = start + ARC;

      // Slice fill
      ctx.beginPath();
      ctx.moveTo(CX, CY);
      ctx.arc(CX, CY, R, start, end);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();

      // Slice border
      ctx.lineWidth   = 2;
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.stroke();

      // Emoji label
      const midAngle = start + ARC / 2;
      const labelR   = R * 0.68;
      const lx       = CX + Math.cos(midAngle) * labelR;
      const ly       = CY + Math.sin(midAngle) * labelR;

      ctx.save();
      ctx.translate(lx, ly);
      ctx.rotate(midAngle + Math.PI / 2);
      ctx.font      = '20px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(seg.emoji, 0, 0);
      ctx.restore();
    });

    // Outer ring highlight
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, 2 * Math.PI);
    ctx.lineWidth   = 5;
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.stroke();
  }

  // Initial draw
  drawWheel(currentAngle);

  /* ── Easing: ease-out quintic ── */
  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  /* ── Spin ── */
  btn.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    btn.textContent = '🌀 Spinning...';
    btn.classList.add('spinning');
    if (result) result.classList.remove('show');

    // Pick winner
    const winnerIndex  = Math.floor(Math.random() * N);
    // We want the winner segment's centre to land at the top (−π/2)
    // The segment centre of winnerIndex is at: currentAngle + winnerIndex*ARC + ARC/2
    // We need: currentAngle + winnerIndex*ARC + ARC/2 ≡ -π/2  (mod 2π) pointing up
    // Add extra full spins for drama: 5–9 rotations
    const extraSpins   = 5 + Math.floor(Math.random() * 5);
    const targetOffset = -(currentAngle + winnerIndex * ARC + ARC / 2) - Math.PI / 2;
    const totalRad     = extraSpins * 2 * Math.PI + ((targetOffset % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    const startAngle   = currentAngle;
    const duration     = 4000 + Math.random() * 1500; // 4–5.5s
    const startTime    = performance.now();

    function animate(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuint(progress);

      currentAngle   = startAngle + eased * totalRad;
      drawWheel(currentAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Normalise angle
        currentAngle = currentAngle % (2 * Math.PI);
        spinning     = false;
        btn.classList.remove('spinning');
        btn.textContent = '🎰 SPIN AGAIN';

        const seg = SEGMENTS[winnerIndex];
        if (result) {
          result.innerHTML = `
            <div style="font-size:2.6rem;margin-bottom:4px">${seg.emoji}</div>
            <div class="roulette-result-flavour">Your Flavour: ${seg.label}!</div>
            <div class="roulette-result-cta">
              <a href="https://www.meesho.com/KESARBHAVANIINDUSTRIES?ms=2" target="_blank" rel="noopener"
                 style="color:var(--purple);font-weight:800;text-decoration:underline">
                Buy ${seg.label} Jelly →
              </a>
            </div>
          `;
          result.classList.add('show');
        }
      }
    }
    requestAnimationFrame(animate);
  });
})();

// ── NEWSLETTER FORM ───────────────────────────────────
document.getElementById('nl-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('nl-email');
  const msg   = document.getElementById('nl-msg');
  const email = input?.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (msg) { msg.textContent = '⚠️ Please enter a valid email.'; msg.style.color = '#c0392b'; }
    return;
  }
  if (msg) { msg.textContent = '✅ You\'re on the list! Sweet updates coming soon. 🍬'; msg.style.color = 'var(--purple)'; }
  input.value = '';
});

// ── REVEAL ON SCROLL ──────────────────────────────────
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    obs.observe(el);
  });
})();

// ── EASTER EGG: Logo click 5 times → crunch sound ────
(function() {
  let clicks = 0;
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;
  logo.addEventListener('click', e => {
    e.preventDefault();
    clicks++;
    if (clicks >= 5) {
      clicks = 0;
      // Create AudioContext crunch sound
      try {
        const ctx  = new AudioContext();
        const buf  = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const gain = ctx.createGain();
        gain.gain.value = 0.4;
        src.connect(gain); gain.connect(ctx.destination);
        src.start();
        // Show secret toast
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--purple);color:#fff;padding:14px 24px;border-radius:50px;font-weight:800;font-size:.9rem;z-index:9999;animation:pop-in .3s ease;white-space:nowrap';
        toast.textContent = '🍬 Crunch! You found the Easter Egg!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2800);
      } catch(err) { /* audio not available */ }
    }
  });
})();
