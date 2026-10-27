/* =====================================================
   LONAWALA JELLY — Premium JavaScript
   Partakefoods.com style interactions
   ===================================================== */

// ── Flavours Data ──────────────────────────────────────
const FLAVORS = [
  { id: 1,  name: "Mango",                folder: "Mango",                   img: "IMG_2133.JPG", cat: "fruit",   emoji: "🥭", price: "₹149" },
  { id: 2,  name: "Lichi",                folder: "Lichi",                   img: "IMG_2137.JPG", cat: "fruit",   emoji: "🍒", price: "₹149" },
  { id: 3,  name: "Blueberry",            folder: "Blueberry_",              img: "IMG_2141.JPG", cat: "fruit",   emoji: "🫐", price: "₹149" },
  { id: 4,  name: "Imli",                 folder: "Imli",                    img: "IMG_2145.JPG", cat: "desi",    emoji: "🌰", price: "₹149" },
  { id: 5,  name: "Rose",                 folder: "Rose",                    img: "IMG_2149.JPG", cat: "floral",  emoji: "🌹", price: "₹149" },
  { id: 6,  name: "Black Currant",        folder: "Black currant",           img: "IMG_2153.JPG", cat: "fruit",   emoji: "🍇", price: "₹149" },
  { id: 7,  name: "Kulfi Sandwich",       folder: "Kulfi Sandwich_",         img: "IMG_2157.JPG", cat: "desi",    emoji: "🍦", price: "₹149" },
  { id: 8,  name: "Green Mango",          folder: "Green Mango_",            img: "IMG_2161.JPG", cat: "fruit",   emoji: "🥭", price: "₹149" },
  { id: 9,  name: "Watermelon",           folder: "Watermelon_",             img: "IMG_2165.JPG", cat: "fruit",   emoji: "🍉", price: "₹149" },
  { id: 10, name: "Strawberry",           folder: "Strawberry_",             img: "IMG_2169.JPG", cat: "fruit",   emoji: "🍓", price: "₹149" },
  { id: 11, name: "Guava",                folder: "Guava",                   img: "IMG_2173.JPG", cat: "fruit",   emoji: "🍈", price: "₹149" },
  { id: 12, name: "PAN",                  folder: "PAN",                     img: "IMG_2177.JPG", cat: "desi",    emoji: "🌿", price: "₹149" },
  { id: 13, name: "Sandwich",             folder: "Sandwich_",               img: "IMG_2181.JPG", cat: "special", emoji: "🍦", price: "₹149" },
  { id: 14, name: "Jalebi",               folder: "Jalebi",                  img: "IMG_2185.JPG", cat: "desi",    emoji: "🍩", price: "₹149" },
  { id: 15, name: "Sweetheart",           folder: "Sweetheart_",             img: "IMG_2189.JPG", cat: "special", emoji: "💜", price: "₹149" },
  { id: 16, name: "Orange",               folder: "Orange",                  img: "IMG_2193.JPG", cat: "fruit",   emoji: "🍊", price: "₹149" },
  { id: 17, name: "Sweetheart Heart Pack",folder: "Sweetheart Heart Packing",img: "IMG_2197.JPG", cat: "special", emoji: "💖", price: "₹199" },
];

const CAT_LABELS = { fruit: "Fruity", desi: "Desi", floral: "Floral", special: "Special" };
const CARD_BG = ["#ffffff", "#F1E8DE", "#ffffff", "#F1E8DE", "#ffffff", "#EDF7F5", "#ffffff", "#F1E8DE"];

// ── Build Carousel Cards ──────────────────────────────
function buildCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  FLAVORS.forEach((f, i) => {
    const imgPath = `images/${f.folder}/${f.img}`;
    const bg = CARD_BG[i % CARD_BG.length];

    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.background = bg;

    card.innerHTML = `
      <div class="card-img-area">
        <span class="card-badge">${CAT_LABELS[f.cat] || f.cat}</span>
        <img
          src="${imgPath}"
          alt="${f.name} Jelly — Lonawala"
          loading="lazy"
          width="320" height="380"
          onerror="this.src='';this.style.display='none'"
        />
      </div>
      <h3>${f.name}</h3>
      <a href="#" class="card-buy" aria-label="Buy ${f.name} Jelly on Meesho">
        🛍️ Buy on Meesho
      </a>
    `;
    track.appendChild(card);
  });
}

// ── Horizontal Carousel Logic ─────────────────────────
(function initCarousel() {
  let currentIndex = 0;
  const CARD_WIDTH = 376; // 360px card + 16px gap

  function getVisible() {
    const vw = window.innerWidth;
    if (vw >= 1200) return 3;
    if (vw >= 900) return 2;
    return 1;
  }

  function slide(dir) {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    const maxIndex = FLAVORS.length - getVisible();
    currentIndex = Math.max(0, Math.min(maxIndex, currentIndex + dir));
    track.style.transform = `translateX(-${currentIndex * CARD_WIDTH}px)`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildCarousel();

    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (prevBtn) prevBtn.addEventListener('click', () => slide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => slide(1));

    // Touch / swipe support
    const viewport = document.getElementById('carousel-viewport');
    if (viewport) {
      let startX = 0;
      viewport.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      viewport.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) slide(dx < 0 ? 1 : -1);
      }, { passive: true });
    }
  });
})();

// ── Testimonials Data + Rotator ───────────────────────
const TESTIMONIALS = [
  { quote: "These are so good it's insane. The perfect crunch, the right amount of sweetness — the fruit flavours are absolutely authentic! Dangerously addictive.", cite: "— Priya S., Mumbai" },
  { quote: "I've tried so many jelly brands but Lonawala is on another level. The Imli and Jalebi flavours taste exactly like the real thing — pure nostalgia!", cite: "— Rahul M., Delhi" },
  { quote: "My kids absolutely love the Mango and Strawberry. The sugar coating gives it that satisfying crunch. We order 3–4 packs every month now!", cite: "— Kavita P., Surat" },
  { quote: "The Rose flavour is so unique and delicate! Ordered for a family function and everyone wanted to know where to get more. Absolutely premium taste.", cite: "— Anita K., Ahmedabad" },
];

(function initTestimonials() {
  let idx = 0;
  const quoteEl = document.getElementById('testi-quote');
  const citeEl  = document.getElementById('testi-cite');
  const dots    = document.querySelectorAll('.testi-dot');
  const center  = document.getElementById('testi-center');

  function show(i) {
    if (!quoteEl || !citeEl) return;
    idx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;

    center.style.opacity = '0';
    center.style.transform = 'scale(.97)';

    setTimeout(() => {
      quoteEl.textContent = TESTIMONIALS[idx].quote;
      citeEl.textContent  = TESTIMONIALS[idx].cite;
      center.style.opacity = '1';
      center.style.transform = 'scale(1)';
    }, 220);

    dots.forEach((d, j) => d.classList.toggle('active', j === idx));
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('testi-center')) return;

    document.getElementById('testi-center').style.transition = 'opacity .25s, transform .25s';

    document.getElementById('testi-prev')?.addEventListener('click', () => show(idx - 1));
    document.getElementById('testi-next')?.addEventListener('click', () => show(idx + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));

    // Auto-rotate every 5 seconds
    setInterval(() => show(idx + 1), 5000);
  });
})();

// ── Header scroll state ───────────────────────────────
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

// ── Mobile Drawer ────────────────────────────────────
(function initDrawer() {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const drawer    = document.getElementById('mobile-drawer');
    const overlay   = document.getElementById('drawer-overlay');
    const closeBtn  = document.getElementById('drawer-close');

    function open() {
      drawer?.classList.add('open');
      overlay?.classList.add('open');
      hamburger?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer?.classList.remove('open');
      overlay?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', close);

    // Close on nav link click
    drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    // Close on Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  });
})();

// ── Scroll-to-top button ──────────────────────────────
(function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ── Newsletter Form ───────────────────────────────────
(function initNewsletter() {
  document.addEventListener('DOMContentLoaded', () => {
    const form    = document.getElementById('newsletter-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (success) { success.textContent = '⚠️ Please enter a valid email address.'; success.style.color = '#c0392b'; }
        return;
      }
      if (success) {
        success.textContent = '✅ You\'re on the list! Expect sweet updates soon.';
        success.style.color = 'var(--teal)';
      }
      form.reset();
    });
  });
})();

// ── Intersection Observer: fade-in sections ───────────
(function initFadeIns() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.addEventListener('DOMContentLoaded', () => {
    ['.why-badge', '.about-section', '.contact-card'].forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s`;
        observer.observe(el);
      });
    });
  });
})();
