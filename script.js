// ===================================================================
// Setup
// ===================================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

// ===================================================================
// Loader
// ===================================================================
const loader = document.getElementById('loader');
const hideLoader = () => loader && loader.classList.add('loader--hidden');
if (prefersReducedMotion) {
  hideLoader();
} else {
  window.addEventListener('load', () => setTimeout(hideLoader, 450));
  // Fallback in case 'load' fires very late (slow font loading, etc.)
  setTimeout(hideLoader, 2500);
}

// ===================================================================
// Scroll progress bar
// ===================================================================
const progressBar = document.getElementById('progressBar');
let ticking = false;

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${pct}%`;
  ticking = false;
};

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
updateProgress();

// ===================================================================
// Nav — scrolled state + sliding active indicator
// ===================================================================
const nav = document.getElementById('nav');
const navLinksWrap = document.getElementById('navLinks');
const navIndicator = document.getElementById('navIndicator');
const navLinks = navLinksWrap ? Array.from(navLinksWrap.querySelectorAll('a')) : [];
const sections = document.querySelectorAll('section[id]');

const moveIndicator = (link) => {
  if (!navIndicator || !link) return;
  const wrapRect = navLinksWrap.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  navIndicator.style.width = `${linkRect.width}px`;
  navIndicator.style.transform = `translateX(${linkRect.left - wrapRect.left}px)`;
  navIndicator.classList.add('is-visible');
};

const setActiveLink = () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);

  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) current = section.id;
  });

  let activeLink = null;
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', isActive);
    if (isActive) activeLink = link;
  });

  if (activeLink) {
    moveIndicator(activeLink);
  } else if (navIndicator) {
    navIndicator.classList.remove('is-visible');
  }
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('resize', setActiveLink);
setActiveLink();

// ===================================================================
// Scroll reveal (IntersectionObserver)
// ===================================================================
const revealGroups = document.querySelectorAll('.reveal-group');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealGroups.forEach((group) => group.classList.add('in-view'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
  );
  revealGroups.forEach((group) => revealObserver.observe(group));
}

// ===================================================================
// Spotlight hover (project cards + skill sigils)
// ===================================================================
if (hasFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    });
  });
}

// ===================================================================
// 3D tilt (project cards)
// ===================================================================
if (hasFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.tilt').forEach((card) => {
    const maxTilt = 6;

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.classList.add('is-tilting');
      card.style.transform =
        `perspective(1200px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.transform = '';
    });
  });
}

// ===================================================================
// Magnetic buttons
// ===================================================================
if (hasFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.btn--magnetic').forEach((btn) => {
    const strength = 12;

    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      btn.style.transform = `translate(${(px * strength).toFixed(1)}px, ${(py * strength).toFixed(1)}px)`;
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
}

// ===================================================================
// Hero background photo — subtle mouse parallax
// ===================================================================
const heroBgImg = document.querySelector('.hero__bg img');
if (heroBgImg && hasFinePointer && !prefersReducedMotion) {
  const heroSection = document.querySelector('.hero');
  const maxShift = 14;

  heroSection.addEventListener('pointermove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    heroBgImg.style.transform =
      `scale(1.06) translate(${(px * maxShift).toFixed(1)}px, ${(py * maxShift).toFixed(1)}px)`;
  });

  heroSection.addEventListener('pointerleave', () => {
    heroBgImg.style.transform = '';
  });
}
