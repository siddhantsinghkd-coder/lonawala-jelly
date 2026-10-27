/* ============================================
   LONAWALA JELLY — Main JavaScript
   ============================================ */

// ---------- Flavours Data ----------
const FLAVORS = [
  {
    id: 1,
    name: "Mango",
    folder: "Mango",
    image: "IMG_2133.JPG",
    color: "#F9A825",
    colorDark: "#E65100",
    emoji: "🥭",
    category: "fruit",
    desc: "Sweet & tropical mango flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 2,
    name: "Lichi",
    folder: "Lichi",
    image: "IMG_2137.JPG",
    color: "#F48FB1",
    colorDark: "#C2185B",
    emoji: "🍒",
    category: "fruit",
    desc: "Juicy & fragrant lychee flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 3,
    name: "Blueberry",
    folder: "Blueberry_",
    image: "IMG_2141.JPG",
    color: "#5C6BC0",
    colorDark: "#1A237E",
    emoji: "🫐",
    category: "fruit",
    desc: "Fresh & vibrant blueberry flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 4,
    name: "Imli",
    folder: "Imli",
    image: "IMG_2145.JPG",
    color: "#A1887F",
    colorDark: "#4E342E",
    emoji: "🌰",
    category: "desi",
    desc: "Tangy & zingy tamarind flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 5,
    name: "Rose",
    folder: "Rose",
    image: "IMG_2149.JPG",
    color: "#F06292",
    colorDark: "#880E4F",
    emoji: "🌹",
    category: "floral",
    desc: "Delicate & floral rose flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 6,
    name: "Black Currant",
    folder: "Black currant",
    image: "IMG_2153.JPG",
    color: "#7E57C2",
    colorDark: "#311B92",
    emoji: "🫐",
    category: "fruit",
    desc: "Rich & bold black currant flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 7,
    name: "Kulfi Sandwich",
    folder: "Kulfi Sandwich_",
    image: "IMG_2157.JPG",
    color: "#26C6DA",
    colorDark: "#006064",
    emoji: "🍦",
    category: "desi",
    desc: "Creamy & indulgent kulfi sandwich flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 8,
    name: "Green Mango",
    folder: "Green Mango_",
    image: "IMG_2161.JPG",
    color: "#66BB6A",
    colorDark: "#1B5E20",
    emoji: "🥭",
    category: "fruit",
    desc: "Tangy & sharp raw mango flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 9,
    name: "Watermelon",
    folder: "Watermelon_",
    image: "IMG_2165.JPG",
    color: "#EF5350",
    colorDark: "#B71C1C",
    emoji: "🍉",
    category: "fruit",
    desc: "Refreshing & juicy watermelon flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 10,
    name: "Strawberry",
    folder: "Strawberry_",
    image: "IMG_2169.JPG",
    color: "#EC407A",
    colorDark: "#880E4F",
    emoji: "🍓",
    category: "fruit",
    desc: "Sweet & luscious strawberry flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 11,
    name: "Guava",
    folder: "Guava",
    image: "IMG_2173.JPG",
    color: "#FF7043",
    colorDark: "#BF360C",
    emoji: "🍈",
    category: "fruit",
    desc: "Tropical & tangy guava flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 12,
    name: "PAN",
    folder: "PAN",
    image: "IMG_2177.JPG",
    color: "#43A047",
    colorDark: "#1B5E20",
    emoji: "🌿",
    category: "desi",
    desc: "Classic & aromatic paan flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 13,
    name: "Sandwich",
    folder: "Sandwich_",
    image: "IMG_2181.JPG",
    color: "#AB47BC",
    colorDark: "#4A148C",
    emoji: "🍦",
    category: "special",
    desc: "Unique & delightful sandwich flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 14,
    name: "Jalebi",
    folder: "Jalebi",
    image: "IMG_2185.JPG",
    color: "#FFA726",
    colorDark: "#E65100",
    emoji: "🍩",
    category: "desi",
    desc: "Desi & sweet jalebi flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 15,
    name: "Sweetheart",
    folder: "Sweetheart_",
    image: "IMG_2189.JPG",
    color: "#F48FB1",
    colorDark: "#880E4F",
    emoji: "💜",
    category: "special",
    desc: "Sweet & charming sweetheart flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 16,
    name: "Orange",
    folder: "Orange",
    image: "IMG_2193.JPG",
    color: "#FF5722",
    colorDark: "#BF360C",
    emoji: "🍊",
    category: "fruit",
    desc: "Zesty & refreshing orange flavoured jelly",
    price: "₹149",
    meesho: "#"
  },
  {
    id: 17,
    name: "Sweetheart Heart Pack",
    folder: "Sweetheart Heart Packing",
    image: "IMG_2197.JPG",
    color: "#E91E63",
    colorDark: "#880E4F",
    emoji: "💖",
    category: "special",
    desc: "Special heart-pack edition — perfect for gifting!",
    price: "₹149",
    meesho: "#"
  }
];

// ---------- Floating Candies (Hero) ----------
function createFloatingCandies() {
  const container = document.querySelector('.floating-candies');
  if (!container) return;

  const candyEmojis = ['🍬', '🍭', '🍡', '🍊', '🥭', '🍓', '🫐', '🍉', '🌹', '🍒'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const candy = document.createElement('div');
    candy.classList.add('candy');
    candy.textContent = candyEmojis[Math.floor(Math.random() * candyEmojis.length)];
    candy.style.left = `${Math.random() * 100}%`;
    candy.style.animationDuration = `${8 + Math.random() * 12}s`;
    candy.style.animationDelay = `${Math.random() * 10}s`;
    candy.style.fontSize = `${1.5 + Math.random() * 2}rem`;
    container.appendChild(candy);
  }
}

// ---------- Render Flavor Cards ----------
function renderFlavorCards(flavors) {
  const grid = document.getElementById('flavours-grid');
  if (!grid) return;

  grid.innerHTML = '';

  flavors.forEach((f, i) => {
    const imagePath = `../Lonawala Jelly/${f.folder}/${f.image}`;

    const card = document.createElement('div');
    card.className = 'flavor-card fade-in';
    card.style.setProperty('--flavor-color', f.color);
    card.style.animationDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <div class="card-image-wrap">
        <img
          src="${imagePath}"
          alt="${f.name} Jelly"
          loading="lazy"
          onerror="this.style.display='none'"
        />
        <div class="card-emoji">${f.emoji}</div>
        <div class="card-weight-badge">200 gm</div>
      </div>
      <div class="card-body">
        <span class="card-flavor-tag">${f.category.toUpperCase()}</span>
        <h3>${f.name}</h3>
        <p>${f.desc}</p>
        <div class="card-footer">
          <div class="card-price">
            ${f.price} <span>/ 200gm</span>
          </div>
          <a href="${f.meesho}" target="_blank" rel="noopener" class="btn-meesho">
            🛍️ Buy on Meesho
          </a>
        </div>
        <div class="pure-veg">Pure Veg &nbsp;|&nbsp; No Gelatin</div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Trigger fade-in for new cards
  requestAnimationFrame(() => {
    document.querySelectorAll('.flavor-card.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

// ---------- Filter Logic ----------
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      const filtered = category === 'all'
        ? FLAVORS
        : FLAVORS.filter(f => f.category === category);

      renderFlavorCards(filtered);
    });
  });
}

// ---------- Navbar Scroll Behaviour ----------
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });
}

// ---------- Scroll-to-Top ----------
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Intersection Observer (fade-in on scroll) ----------
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.flavor-card)').forEach(el => {
    observer.observe(el);
  });
}

// ---------- Active Nav Link on Scroll ----------
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active-link', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  createFloatingCandies();
  renderFlavorCards(FLAVORS);
  initFilters();
  initNavbar();
  initScrollTop();
  initScrollAnimations();
  initActiveNav();
});

