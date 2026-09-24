/**
 * Ideal Clinic — facelift runtime (2026)
 *
 * Scroll reveals, count-up figures, the header scroll state and the reviews
 * carousel. Motion values mirror the Ideal Hair build: 0.8s on
 * cubic-bezier(.25,.46,.45,.94), observers firing once at a -80px margin.
 *
 * Runs after components.js has injected the shared header/footer/reviews.
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll reveal ─────────────────────────────────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '-80px' });

    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /** Stagger a group of siblings so they cascade rather than land together. */
  function applyStagger() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-reveal-group]'), function (group) {
      var step = parseFloat(group.getAttribute('data-reveal-group')) || 0.08;
      Array.prototype.forEach.call(group.querySelectorAll('[data-reveal]'), function (el, i) {
        el.style.setProperty('--reveal-delay', (i * step).toFixed(2) + 's');
      });
    });
  }

  /* ── Count-up figures ──────────────────────────────────────────────── */
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    function format(value, decimals) {
      return value.toLocaleString('sv-SE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    }

    function run(el) {
      var target   = parseFloat(el.getAttribute('data-count'));
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var duration = parseFloat(el.getAttribute('data-duration') || '1.8') * 1000;

      if (reduceMotion) { el.textContent = format(target, decimals); return; }

      var start = performance.now();
      (function step(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);           // easeOutCubic
        el.textContent = format(eased * target, decimals);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = format(target, decimals);
      })(start);
    }

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, run);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { rootMargin: '-40px' });

    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ── Header scroll state + active link ─────────────────────────────── */
  function initHeader() {
    var header = document.querySelector('header');
    if (!header) return;

    var last = null;
    function onScroll() {
      var scrolled = window.scrollY > 40;
      if (scrolled === last) return;
      last = scrolled;
      header.classList.toggle('ic-scrolled', scrolled);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // mark the link for the page we are on
    var here = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    Array.prototype.forEach.call(header.querySelectorAll('.nav-links > li > a'), function (a) {
      var href = (a.getAttribute('href') || '').split('#')[0].split('/').pop().toLowerCase();
      if (href && href === here) a.classList.add('ic-active');
    });
  }

  /* ── Reviews carousel ──────────────────────────────────────────────── */
  function initCarousel(root) {
    var viewport = root.querySelector('[data-carousel-viewport]');
    var track    = root.querySelector('[data-carousel-track]');
    var slides   = track ? Array.prototype.slice.call(track.children) : [];
    var prevBtn  = root.querySelector('[data-carousel-prev]');
    var nextBtn  = root.querySelector('[data-carousel-next]');
    var dotsWrap = root.querySelector('[data-carousel-dots]');
    if (!viewport || !track || slides.length === 0) return;

    var index = 0;
    var timer = null;
    var AUTOPLAY_MS = 5200;

    function perView() {
      var w = window.innerWidth;
      if (w <= 639) return 1;
      if (w <= 991) return 2;
      return 3;
    }
    function pageCount() { return Math.max(1, slides.length - perView() + 1); }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var i = 0; i < pageCount(); i++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'ic-dot';
        b.setAttribute('aria-label', 'Visa omdöme ' + (i + 1));
        b.addEventListener('click', (function (n) {
          return function () { go(n); restart(); };
        })(i));
        dotsWrap.appendChild(b);
      }
    }

    function paint() {
      var slideW = slides[0].getBoundingClientRect().width;
      var gap    = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 0;
      track.style.transform = 'translateX(' + (-index * (slideW + gap)) + 'px)';

      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
          d.classList.toggle('is-active', i === index);
        });
      }
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index >= pageCount() - 1;

      slides.forEach(function (s, i) {
        var visible = i >= index && i < index + perView();
        s.setAttribute('aria-hidden', visible ? 'false' : 'true');
      });
    }

    function go(n) {
      var max = pageCount() - 1;
      index = Math.min(Math.max(n, 0), max);
      paint();
    }
    function next() { go(index >= pageCount() - 1 ? 0 : index + 1); }
    function prev() { go(index <= 0 ? pageCount() - 1 : index - 1); }

    function start() {
      if (reduceMotion || pageCount() <= 1) return;
      stop();
      timer = setInterval(next, AUTOPLAY_MS);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { next(); restart(); }
      if (e.key === 'ArrowLeft')  { prev(); restart(); }
    });

    // touch swipe
    var startX = 0, startY = 0, dragging = false;
    viewport.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      dragging = true;
      stop();
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      if (!dragging) return;
      dragging = false;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next(); else prev();
      }
      start();
    }, { passive: true });

    var lastPerView = perView();
    window.addEventListener('resize', function () {
      if (perView() !== lastPerView) {
        lastPerView = perView();
        buildDots();
        go(Math.min(index, pageCount() - 1));
      } else {
        paint();
      }
    });

    buildDots();
    paint();
    start();
  }

  function initCarousels() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), initCarousel);
  }

  /* ── Boot ──────────────────────────────────────────────────────────── */
  function boot() {
    applyStagger();
    initReveal();
    initCounters();
    initHeader();
    initCarousels();
  }

  // components.js injects markup on DOMContentLoaded; queue after it.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 0); });
  } else {
    setTimeout(boot, 0);
  }
})();
