/**
 * animate.js – scroll reveal, parallax, header scroll state
 */
(function () {
  'use strict';

  /* Skip all animation logic for users who prefer reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── Scroll Reveal ────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -55px 0px' }
  );

  function initReveal() {
    /* Sections */
    document.querySelectorAll('.section').forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

    /* Stagger grid children (cards, articles, figures) */
    document.querySelectorAll('.grid').forEach((grid) => {
      const items = Array.from(
        grid.querySelectorAll(':scope > .card, :scope > article, :scope > figure, :scope > div, :scope > a')
      );
      items.forEach((item, i) => {
        item.classList.add('reveal', 'reveal-stagger');
        item.style.setProperty('--stagger', i);
        revealObserver.observe(item);
      });
    });

    /* Info strips that aren't inside .section (to avoid double-add) */
    document.querySelectorAll('.info-strip').forEach((el) => {
      if (!el.closest('.section')) {
        el.classList.add('reveal');
        revealObserver.observe(el);
      }
    });
  }

  /* ── Parallax Hero ───────────────────────────────────────── */
  function initParallax() {
    const hero = document.querySelector('.hero-home');
    if (!hero) return;

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            hero.style.setProperty('--parallax-y', scrolled * 0.28 + 'px');
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ── Header Scroll State ─────────────────────────────────── */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            header.classList.toggle('scrolled', window.pageYOffset > 40);
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ── Counter Animation (for .kpi elements with data-count) ── */
  function animateCounter(el) {
    const raw = el.dataset.count || el.textContent.replace(/[^\d.]/g, '');
    const target = parseFloat(raw);
    if (isNaN(target)) return;

    const suffix = el.dataset.suffix || el.textContent.replace(/[\d.]/g, '').trim();
    const isDecimal = target % 1 !== 0;
    const duration = 1400;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.kpi[data-count]').forEach((el) => {
      counterObserver.observe(el);
    });
  }

  /* ── Init ────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initReveal();
    initParallax();
    initHeader();
    initCounters();
  }
})();
