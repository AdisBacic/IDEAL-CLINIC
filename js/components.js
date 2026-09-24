/**
 * Shared components for Ideal Clinic website.
 * Injects header, footer, social link bar, and cookie consent into each page.
 *
 * Usage: Add <script src="./js/components.js" defer></script> to each page.
 * Then add placeholder elements: <div id="site-header"></div>, <div id="site-footer"></div>, etc.
 */

// ─── Configuration ───────────────────────────────────────────────────────────
const SITE_CONFIG = {
  phone: '010-333-3553',
  phoneFull: 'tel:010-333-3553',
  email: 'info@idealclinic.se',
  address: 'Smedjegatan 7, 722 13 Västerås',
  bookingVasteras: 'https://www.bokadirekt.se/places/ideal-clinic-50596',
  bookingStockholm: 'https://www.bokadirekt.se/places/ideal-clinic-stockholm-132696',
  instagram: 'https://www.instagram.com/idealclinic.se/',
  facebook: 'https://www.facebook.com/profile.php?id=100089815122494',
  rating: {
    score: 4.9,
    // Bokadirekt ratings, both clinics combined (Västerås 1144 + Stockholm 1199).
    // Re-check occasionally and bump — these only ever go up.
    count: 2343,
  },
  gaId: 'G-B4SEPMXTJT',
  metaPixelId: '1221241009892785',
};

const NAV_LINKS = [
  { label: 'Behandlingar', href: 'index.html#treatments-section' },
  { label: 'Priser', href: 'priser.html' },
  { label: 'Hårtransplantation', href: 'https://idealhair.se/' },
  { label: 'Om oss', href: 'omoss.html' },
  { label: 'Kontakt', href: 'kontakt.html' },
];

const NAV_CTA = {
  type: 'dropdown',
  label: 'Boka konsultation',
  items: [
    { label: 'Västerås', href: SITE_CONFIG.bookingVasteras },
    { label: 'Stockholm', href: SITE_CONFIG.bookingStockholm },
  ]
};

// ─── Header ──────────────────────────────────────────────────────────────────
function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;

  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

  const navItems = NAV_LINKS.map(link => {
    let href = link.href;
    if (link.label === 'Behandlingar' && isIndex) {
      href = '#treatments-section';
    }
    return `<li><a href="${href}">${link.label}</a></li>`;
  }).join('\n');

  const ctaDropdownItems = NAV_CTA.items.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  const mobileBookingItems = NAV_CTA.items.map(item =>
    `<li class="mobile-booking-item"><a href="${item.href}">Boka — ${item.label}</a></li>`
  ).join('');

  // The landing page has a full-bleed hero, so its header starts clear and only
  // solidifies on scroll. Every other page keeps the solid bar from the top.
  const headerClass = isIndex ? 'ic-header--overlay' : '';

  el.innerHTML = `
    <header class="${headerClass}">
      <div class="logo-container">
        <a href="index.html" id="MainLogo">
          <span class="logo-main">IDEAL CLINIC</span>
          <span class="logo-sub">Västerås &amp; Stockholm</span>
        </a>
      </div>
      <nav class="nav-center">
        <ul class="nav-links">
          ${navItems}
          ${mobileBookingItems}
        </ul>
      </nav>
      <div class="nav-cta-wrapper">
        <div class="dropdown">
          <a href="#" id="bokaText" class="nav-cta-btn dropdown-toggle">${NAV_CTA.label}</a>
          <ul class="dropdown-menu">${ctaDropdownItems}</ul>
        </div>
      </div>
      <div class="hamburger-on"></div>
    </header>`;
}

// ─── Social Link Bar ─────────────────────────────────────────────────────────
function renderLinkBar() {
  const el = document.getElementById('site-linkbar');
  if (!el) return;

  el.innerHTML = `
    <section id="linkBar">
      <div class="containera">
        <div class="">
          <div class="col" id="links">
            <a href="${SITE_CONFIG.facebook}"><i class="bi bi-facebook"></i></a>
            <a href="${SITE_CONFIG.instagram}"><i class="bi bi-instagram"></i></a>
            <a href="${SITE_CONFIG.phoneFull}" class="phone-link" onclick="handlePhoneClick(event)">
              <i class="bi bi-telephone-fill"></i>
            </a>
            <a href="mailto:${SITE_CONFIG.email}">
              <i class="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
// Single source of truth for customer reviews. These were previously hard-coded
// into omoss.html; they now feed both the landing-page carousel and the about
// page, so a review only ever has to be edited in one place.
//
// To add a new one from Bokadirekt: append an object below and bump
// SITE_CONFIG.rating.count. Nothing else needs to change.
const REVIEWS = [
  {
    text: 'Den mest professionellaste behandlare i hela Västerås. Elias är väldigt seriös, kunnig, trevlig mm. Elias ser alltid en helhet hos mig. Återkommer bara till honom i fortsättningen',
    author: 'Jaha T.',
    clinic: 'Västerås',
    stars: 5,
  },
  {
    text: 'Elias är grym! Otroligt proffsig och samtidigt så snäll och avslappnad. Alltid nöjd när jag lämnar!',
    author: 'Malin E.',
    clinic: 'Västerås',
    stars: 5,
  },
  {
    text: 'Woud är grym! Alltid nöjd efter mina behandlingar hos henne. Ni kan känna er trygg hos henne',
    author: 'Hamida H.',
    clinic: 'Stockholm',
    stars: 5,
  },
  {
    text: 'Kanonbra bemötande av Wuod, alltid så trevlig! Jag är väldigt nöjd med mina behandlingar!',
    author: 'Issis M.',
    clinic: 'Stockholm',
    stars: 5,
  },
  {
    text: 'Proffsig! Känner mig alltid trygg med att få bästa resultat hos Elias.',
    author: 'Sandra R.',
    clinic: 'Västerås',
    stars: 5,
  },
  {
    text: 'Jätte nöjd, super trevlig personal och jätte fint bemötande mot kunder, bra service. Kan varmt rekommendera alla.',
    author: 'Zakaria K.',
    clinic: 'Västerås',
    stars: 5,
  },
];

// Each surface leads with a different review so the two pages do not read
// as a copy of one another.
const REVIEW_ORDER = {
  home:  [0, 1, 2, 3, 4, 5],
  about: [4, 2, 5, 0, 3, 1],
};

function starsMarkup(n) {
  var out = '';
  for (var i = 0; i < n; i++) out += '<i class="bi bi-star-fill"></i>';
  return out;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function renderReviews() {
  var el = document.getElementById('site-reviews');
  if (!el) return;

  var variant = el.getAttribute('data-reviews-variant') || 'home';
  var order = REVIEW_ORDER[variant] || REVIEW_ORDER.home;
  var heading = el.getAttribute('data-reviews-heading') || 'Vad våra kunder säger';
  var eyebrow = el.getAttribute('data-reviews-eyebrow') || 'Omdömen';
  var lede = el.getAttribute('data-reviews-lede') || '';

  var score = SITE_CONFIG.rating.score;
  var count = SITE_CONFIG.rating.count.toLocaleString('sv-SE');

  var cards = order.map(function (i) {
    var r = REVIEWS[i];
    if (!r) return '';
    return (
      '<article class="ic-review">' +
        '<div class="ic-review-mark" aria-hidden="true">&ldquo;</div>' +
        '<div class="ic-review-stars" role="img" aria-label="' + r.stars + ' av 5 stjärnor">' +
          starsMarkup(r.stars) +
        '</div>' +
        '<p class="ic-review-text">' + escapeHtml(r.text) + '</p>' +
        '<div class="ic-review-author">' + escapeHtml(r.author) + '</div>' +
        '<div class="ic-review-meta">Ideal Clinic ' + escapeHtml(r.clinic) + '</div>' +
      '</article>'
    );
  }).join('');

  el.innerHTML =
    '<section class="ic-section ic-reviews">' +
      '<div class="ic-shell">' +
        '<div class="ic-head" data-reveal>' +
          '<span class="ic-eyebrow">' + escapeHtml(eyebrow) + '</span>' +
          '<h2 class="ic-title">' + heading + '</h2>' +
          (lede ? '<p class="ic-lede">' + escapeHtml(lede) + '</p>' : '') +
          '<div class="ic-rule"></div>' +
        '</div>' +

        '<div class="ic-rating" data-reveal>' +
          '<div class="ic-rating-stars" role="img" aria-label="' + String(score).replace('.', ',') + ' av 5 i snittbetyg">' +
            starsMarkup(5) +
          '</div>' +
          '<p class="ic-rating-text">' +
            '<strong><span data-count="' + score + '" data-decimals="1" data-duration="1.6">0,0</span> av 5</strong>' +
            ' · <span data-count="' + SITE_CONFIG.rating.count + '" data-duration="2">0</span> omdömen på ' +
            '<a class="ic-rating-link" href="' + SITE_CONFIG.bookingVasteras + '" target="_blank" rel="noopener noreferrer">Bokadirekt</a>' +
          '</p>' +
        '</div>' +

        '<div class="ic-carousel" data-carousel tabindex="0" role="region" aria-label="Omdömen från våra kunder" data-reveal>' +
          '<div class="ic-viewport" data-carousel-viewport>' +
            '<div class="ic-track" data-carousel-track>' + cards + '</div>' +
          '</div>' +
          '<div class="ic-carousel-controls">' +
            '<button type="button" class="ic-arrow" data-carousel-prev aria-label="Föregående omdömen"><i class="bi bi-chevron-left"></i></button>' +
            '<div class="ic-dots" data-carousel-dots></div>' +
            '<button type="button" class="ic-arrow" data-carousel-next aria-label="Nästa omdömen"><i class="bi bi-chevron-right"></i></button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const year = new Date().getFullYear();
  el.innerHTML = `
    <footer>
      <div class="footer-inner">
        <span class="footer-brand">IDEAL CLINIC</span>
        <span class="footer-copy">&copy; ${year} Ideal Clinic. All rights reserved.</span>
      </div>
    </footer>`;
}

// ─── Cookie Consent ──────────────────────────────────────────────────────────
function renderCookieConsent() {
  const el = document.getElementById('site-cookie-consent');
  if (!el) return;

  el.innerHTML = `
    <div id="cookieConsent" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background-color: rgba(26, 35, 50, 0.98); color: white; padding: 20px; box-shadow: 0 -2px 10px rgba(0,0,0,0.3); z-index: 9999; font-family: 'Poppins', sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div id="cookieMain" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
          <p style="margin: 0; flex: 1; min-width: 250px; font-size: 14px; line-height: 1.5;">
            Vi använder <strong>Analyscookies</strong> och <strong>Marknadsföringscookies</strong> för att analysera trafik och förbättra din upplevelse. Du kan acceptera alla, avvisa eller anpassa dina inställningar.
          </p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="acceptAll" style="background-color: white; color: #1a2332; border: none; padding: 10px 24px; border-radius: 5px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s; white-space: nowrap;">
              Acceptera alla
            </button>
            <button id="declineAll" style="background-color: transparent; color: white; border: 2px solid white; padding: 10px 24px; border-radius: 5px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s; white-space: nowrap;">
              Avvisa
            </button>
            <button id="showSettings" style="background-color: transparent; color: white; border: none; padding: 10px 16px; cursor: pointer; font-size: 13px; text-decoration: underline; transition: opacity 0.3s;">
              Inställningar
            </button>
          </div>
        </div>
        <div id="cookieSettings" style="display: none; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
              <input type="checkbox" id="analyticsCookies" checked style="width: 18px; height: 18px; cursor: pointer;">
              <span style="font-size: 14px;"><strong>Analyscookies</strong> - För att förstå hur besökare använder webbplatsen</span>
            </label>
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
              <input type="checkbox" id="marketingCookies" checked style="width: 18px; height: 18px; cursor: pointer;">
              <span style="font-size: 14px;"><strong>Marknadsföringscookies</strong> - För att mäta effektivitet av annonser</span>
            </label>
            <button id="saveSettings" style="background-color: white; color: #1a2332; border: none; padding: 10px 24px; border-radius: 5px; cursor: pointer; font-weight: 600; font-size: 13px; align-self: flex-start;">
              Spara inställningar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style="position: fixed; bottom: 10px; right: 10px; z-index: 9998;">
      <button id="reopenCookieSettings" style="display: none; background-color: rgba(26, 35, 50, 0.9); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 10px 14px; border-radius: 50%; cursor: pointer; font-size: 24px; font-family: 'Poppins', sans-serif; line-height: 1; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" title="Cookie-inställningar">
        🍪
      </button>
    </div>`;

  initCookieConsent();
}

function loadGoogleAnalytics() {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE_CONFIG.gaId;
  document.head.appendChild(gaScript);
  gaScript.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.gaId);
  };
}

function loadMetaPixel() {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', SITE_CONFIG.metaPixelId);
  fbq('track', 'PageView');
}

function loadTrackingScripts() {
  var consent = JSON.parse(localStorage.getItem('cookieConsent') || '{}');
  if (consent.analytics) loadGoogleAnalytics();
  if (consent.marketing) loadMetaPixel();
}

function initCookieConsent() {
  var existingConsent = localStorage.getItem('cookieConsent');
  if (existingConsent) {
    loadTrackingScripts();
    document.getElementById('reopenCookieSettings').style.display = 'block';
  } else {
    document.getElementById('cookieConsent').style.display = 'block';
  }

  document.getElementById('acceptAll').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', JSON.stringify({analytics: true, marketing: true}));
    document.getElementById('cookieConsent').style.display = 'none';
    document.getElementById('reopenCookieSettings').style.display = 'block';
    loadTrackingScripts();
  });

  document.getElementById('declineAll').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', JSON.stringify({analytics: false, marketing: false}));
    document.getElementById('cookieConsent').style.display = 'none';
    document.getElementById('reopenCookieSettings').style.display = 'block';
  });

  document.getElementById('showSettings').addEventListener('click', function() {
    document.getElementById('cookieSettings').style.display = 'block';
    this.style.display = 'none';
  });

  document.getElementById('saveSettings').addEventListener('click', function() {
    var analytics = document.getElementById('analyticsCookies').checked;
    var marketing = document.getElementById('marketingCookies').checked;
    localStorage.setItem('cookieConsent', JSON.stringify({analytics: analytics, marketing: marketing}));
    document.getElementById('cookieConsent').style.display = 'none';
    document.getElementById('reopenCookieSettings').style.display = 'block';
    loadTrackingScripts();
  });

  document.getElementById('reopenCookieSettings').addEventListener('click', function() {
    document.getElementById('cookieConsent').style.display = 'block';
    document.getElementById('cookieSettings').style.display = 'none';
    document.getElementById('showSettings').style.display = 'block';
    var consent = JSON.parse(localStorage.getItem('cookieConsent') || '{"analytics":true,"marketing":true}');
    document.getElementById('analyticsCookies').checked = consent.analytics;
    document.getElementById('marketingCookies').checked = consent.marketing;
  });

  ['acceptAll', 'declineAll', 'saveSettings'].forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener('mouseenter', function() {
      if (id === 'acceptAll' || id === 'saveSettings') {
        this.style.backgroundColor = '#f0f0f0';
      } else {
        this.style.backgroundColor = 'rgba(255,255,255,0.1)';
      }
    });
    btn.addEventListener('mouseleave', function() {
      if (id === 'acceptAll' || id === 'saveSettings') {
        this.style.backgroundColor = 'white';
      } else {
        this.style.backgroundColor = 'transparent';
      }
    });
  });
}

// ─── Initialize all shared components ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  renderHeader();
  renderLinkBar();
  renderReviews();
  renderFooter();
  renderCookieConsent();
});
