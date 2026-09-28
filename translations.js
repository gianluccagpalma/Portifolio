// Portuguese content is kept in the HTML, including the fallback download link.
// Each entry maps a selector to English and Spanish; repeated selectors share copy.

(() => {
  const copy = [

    // ================================================================
    // NAVIGATION
    // ================================================================

    ['.nav__toggle-label', 'Menu', 'Menú'],

    [
      '.nav__links a[href="#sobre"], #sobre .section__eyebrow',
      'About',
      'Sobre mí'
    ],

    [
      '.nav__links a[href="#habilidades"], #habilidades .section__eyebrow',
      'Skills',
      'Habilidades'
    ],

    [
      '.nav__links a[href="#projetos"], #projetos .section__eyebrow',
      'Projects',
      'Proyectos'
    ],

    [
      '.nav__links a[href="#contato"], #contato .section__eyebrow',
      'Contact',
      'Contacto'
    ],

    [
      '.nav__cta',
      "Let’s talk",
      'Hablemos'
    ],


    // ================================================================
    // HERO
    // ================================================================

    [
      '.hero .eyebrow',
      'Software Developer',
      'Desarrollador de Software'
    ],

    [
      '.hero__tagline',

      'I hold a technical diploma in IT from <strong>IFMS</strong> and am currently studying Systems Analysis and Development at <strong>Infnet</strong> and Software Development at <strong>BYU</strong>. I build with Python, Java, C#, SQL and web interfaces — in Portuguese, English and Spanish.',

      'Soy técnico en Informática por el <strong>IFMS</strong> y actualmente estudio Análisis y Desarrollo de Sistemas en <strong>Infnet</strong> y Desarrollo de Software en <strong>BYU</strong>. Desarrollo con Python, Java, C#, SQL e interfaces web — en portugués, inglés y español.'
    ],

    [
      '.hero__actions a[href="#projetos"]',
      'View projects',
      'Ver proyectos'
    ],

    [
      '#resumeDownload',
      'Download résumé',
      'Descargar currículum'
    ],


    // ================================================================
    // ABOUT
    // ================================================================

    [
      '.about-title',
      'Education and journey',
      'Formación y trayectoria'
    ],

    [
      '.timeline__item:nth-child(1) .timeline__label',
      'Technical Diploma in IT',
      'Técnico en Informática'
    ],

    [
      '.timeline__item:nth-child(2) .timeline__label',
      'Systems Analysis and Development',
      'Análisis y Desarrollo de Sistemas'
    ],

    [
      '.timeline__item:nth-child(2) .timeline__meta',
      'Faculdade Infnet — in progress',
      'Faculdade Infnet — en curso'
    ],

    [
      '.timeline__item:nth-child(3) .timeline__label',
      'Software Development',
      'Desarrollo de Software'
    ],

    [
      '.timeline__item:nth-child(3) .timeline__meta',
      'Brigham Young University (BYU) — in progress',
      'Brigham Young University (BYU) — en curso'
    ],


    // ================================================================
    // LANGUAGES
    // ================================================================

    [
      '.languages__label',
      'Languages',
      'Idiomas'
    ],

    [
      '.lang-tag:nth-child(1)',
      'Portuguese <em>native</em>',
      'Portugués <em>nativo</em>'
    ],

    [
      '.lang-tag:nth-child(2)',
      'English <em>fluent</em>',
      'Inglés <em>fluido</em>'
    ],

    [
      '.lang-tag:nth-child(3)',
      'Spanish <em>fluent</em>',
      'Español <em>fluido</em>'
    ],


    // ================================================================
    // SKILLS
    // ================================================================

    [
      '#habilidades .section__title',
      'Tools of the trade',
      'Herramientas del oficio'
    ],

    [
      '#habilidades .section__lede',
      'The languages and technologies I use to turn problems into software.',
      'Los lenguajes y tecnologías que utilizo para transformar problemas en software.'
    ],


    // ================================================================
    // PROJECTS
    // ================================================================

    [
      '#projetos .section__title',
      'Selected work',
      'Trabajos seleccionados'
    ],

    [
      '#projetos .section__lede',

      'Projects that show how I think, learn and turn problems into practical solutions through code.',

      'Proyectos que muestran cómo pienso, aprendo y transformo problemas en soluciones prácticas con código.'
    ],


    // Project numbers

    [
      '.project:nth-child(1) .project__chapter',
      'Stop 01',
      'Punto 01'
    ],

    [
      '.project:nth-child(2) .project__chapter',
      'Stop 02',
      'Punto 02'
    ],

    [
      '.project:nth-child(3) .project__chapter',
      'Stop 03',
      'Punto 03'
    ],

    [
      '.project:nth-child(4) .project__chapter',
      'Stop 04',
      'Punto 04'
    ],


    // ================================================================
    // PROJECT 01 — AIR FOOD EXPRESS
    // ================================================================

    [
      '.project:nth-child(1) .project__desc',

      'An academic Python application for managing restaurants, menus and orders, with simulated drone deliveries. Uses CSV files for data persistence and includes tests with Pytest.',

      'Aplicación académica en Python para gestionar restaurantes, menús y pedidos, con entregas simuladas mediante drones. Utiliza archivos CSV para persistir los datos e incluye pruebas con Pytest.'
    ],


    // ================================================================
    // PROJECT 02 — CHEMISTRY IFMS
    // ================================================================

    [
      '.project:nth-child(2) .project__title',
      'Chemistry — IFMS',
      'Química — IFMS'
    ],

    [
      '.project:nth-child(2) .project__desc',

      'A website developed in 2022 for a high school Chemistry assignment at IFMS. A project connecting web development with the presentation of course content.',

      'Página desarrollada en 2022 para un trabajo de Química en el IFMS, durante la educación secundaria. Un proyecto que conecta el desarrollo web con la presentación de contenidos de la asignatura.'
    ],

    [
      '.project:nth-child(2) .project__tags li:nth-child(2)',
      'Education',
      'Educación'
    ],


    // ================================================================
    // PROJECT 03 — COMPLEX PYTHON CODES 4 BEGINNERS
    // ================================================================

    [
      '.project:nth-child(3) .project__desc',

      'A growing collection of Python projects covering shopping receipts, password evaluation, water pressure and molar mass. Brings together logic, functions, CSV files and automated tests, with more projects on the way.',

      'Colección en expansión de proyectos Python sobre recibos de compras, evaluación de contraseñas, presión del agua y masa molar. Reúne lógica, funciones, archivos CSV y pruebas automatizadas, con nuevos proyectos en camino.'
    ],


    // ================================================================
    // PROJECT 04 — MINE RPG
    // ================================================================

    [
      '.project:nth-child(4) .project__desc',

      'A terminal-based RPG developed in Java, featuring different heroes and monsters, turn-based combat, initiative mechanics and a persistent ranking system. The project applies Object-Oriented Programming concepts such as inheritance, encapsulation, abstraction and polymorphism.',

      'RPG de terminal desarrollado en Java, con diferentes héroes y monstruos, combate por turnos, sistema de iniciativa y ranking persistente. El proyecto aplica conceptos de Programación Orientada a Objetos como herencia, encapsulamiento, abstracción y polimorfismo.'
    ],


    // ================================================================
    // PROJECT LINKS
    // ================================================================

    [
      '.project__links a:first-child',
      'Source code ↗',
      'Código fuente ↗'
    ],

    [
      '.project:nth-child(2) .project__links a:nth-child(2)',
      'Visit website ↗',
      'Visitar página ↗'
    ],

    [
      '.project:nth-child(3) .project__links a:nth-child(2)',
      'View example ↗',
      'Ver ejemplo ↗'
    ],

    [
      '#open-rpg-demo',
      'View example ↗',
      'Ver ejemplo ↗'
    ],

    [
      '.projects__actions a',
      'View more projects on GitHub ↗',
      'Ver más proyectos en GitHub ↗'
    ],


    // ================================================================
    // MINE RPG DEMO MODAL
    // ================================================================

    [
      '.demo-modal__eyebrow',
      'Demo',
      'Demostración'
    ],

    [
      '#rpg-demo-title',
      'Mine RPG',
      'Mine RPG'
    ],

    [
      '.demo-modal__header > p:last-child',

      'See the combat, initiative and ranking systems running directly in the terminal.',

      'Mira los sistemas de combate, iniciativa y ranking funcionando directamente en la terminal.'
    ],


    // ================================================================
    // CONTACT
    // ================================================================

    [
      '#contato .section__title',
      'Let’s talk',
      'Conversemos'
    ],

    [
      '#contato .section__lede',

      'I am looking for an internship or a junior developer role. If my work fits what you are looking for, get in touch.',

      'Estoy buscando una oportunidad de prácticas o un puesto como desarrollador júnior. Si mi trabajo encaja con lo que buscas, escríbeme.'
    ],

    [
      '#contato .btn',
      'Send a message',
      'Enviar mensaje'
    ],

    [
      '.social a[href^="mailto:"]',
      'Email',
      'Correo electrónico'
    ],


    // ================================================================
    // FOOTER
    // ================================================================

    [
      '.footer__credit',
      'Made by Gianlucca Palma',
      'Hecho por Gianlucca Palma'
    ],
  ];


  // ===================================================================
  // TRANSLATABLE ATTRIBUTES
  // ===================================================================

  const attributes = [

    [
      '#navToggle',
      'aria-label',
      'Navigation menu',
      'Menú de navegación'
    ],

    [
      '.nav__mark',
      'aria-label',
      'Home',
      'Inicio'
    ],

    [
      '#languageSelect',
      'aria-label',
      'Page language',
      'Idioma de la página'
    ],

    [
      '.scroll-hint',
      'aria-label',
      'Scroll to the About section',
      'Ir a la sección Sobre mí'
    ],

    [
      '.hero__bg img',
      'alt',
      'Lake and mountains in Patagonia',
      'Lago y montañas de la Patagonia'
    ],

    [
      '.hero__portrait img',
      'alt',
      'Portrait of Gianlucca',
      'Retrato de Gianlucca'
    ],

    [
      '#close-rpg-demo',
      'aria-label',
      'Close demo',
      'Cerrar demostración'
    ],

    [
      'meta[name="description"]',
      'content',

      'Portfolio of Gianlucca Palma, a software developer specializing in Python, Java, C# and SQL.',

      'Portafolio de Gianlucca Palma, desarrollador de software especializado en Python, Java, C# y SQL.'
    ],
  ];


  // ===================================================================
  // RÉSUMÉS
  // ===================================================================

  const resumes = {
    'pt-BR': 'Curriculos/Curriculo_Gianlucca_Palma_PT-BR.pdf',
    en: 'Curriculos/Resume_Gianlucca_Palma_EN.pdf',
    es: 'Curriculos/Curriculum_Gianlucca_Palma_ES.pdf',
  };


  // ===================================================================
  // PAGE TITLES
  // ===================================================================

  const titles = {
    'pt-BR': document.title,
    en: 'Gianlucca Palma — Software Developer',
    es: 'Gianlucca Palma — Desarrollador de Software',
  };


  // ===================================================================
  // PREPARE CONTENT
  // ===================================================================

  const content = copy.flatMap(([selector, en, es]) =>
    Array.from(
      document.querySelectorAll(selector),
      element => ({
        element,
        values: {
          'pt-BR': element.innerHTML,
          en,
          es,
        },
      })
    )
  );


  // ===================================================================
  // PREPARE ATTRIBUTES
  // ===================================================================

  const labels = attributes
    .map(([selector, attribute, en, es]) => {

      const element = document.querySelector(selector);

      // Prevent errors if an optional element does not exist.
      if (!element) return null;

      return {
        element,
        attribute,
        values: {
          'pt-BR': element.getAttribute(attribute),
          en,
          es,
        },
      };

    })
    .filter(Boolean);


  // ===================================================================
  // LANGUAGE SELECT
  // ===================================================================

  const select = document.getElementById('languageSelect');


  // ===================================================================
  // APPLY LANGUAGE
  // ===================================================================

  function applyLanguage(language) {

    const locale =
      Object.hasOwn(resumes, language)
        ? language
        : 'pt-BR';


    // HTML language
    document.documentElement.lang = locale;


    // Page title
    document.title = titles[locale];


    // Text content
    content.forEach(({ element, values }) => {
      element.innerHTML = values[locale];
    });


    // Attributes
    labels.forEach(({ element, attribute, values }) => {
      element.setAttribute(attribute, values[locale]);
    });


    // Résumé
    const download = document.getElementById('resumeDownload');

    if (download) {
      download.href = resumes[locale];
      download.hreflang = locale;
    }


    // Language selector
    if (select) {
      select.value = locale;
    }


    // Translated text changes section heights
    // and navigation link widths.
    requestAnimationFrame(() => {

      if (typeof setActiveLink === 'function') {
        setActiveLink();
      }

      if (typeof updateProgress === 'function') {
        updateProgress();
      }

    });
  }


  // ===================================================================
  // SAVED LANGUAGE
  // ===================================================================

  let savedLanguage = 'pt-BR';

  try {

    savedLanguage =
      localStorage.getItem('portfolio-language')
      || savedLanguage;

  } catch {

    // Storage may be unavailable.

  }


  // Apply language when page loads.
  applyLanguage(savedLanguage);


  // ===================================================================
  // LANGUAGE CHANGE
  // ===================================================================

  if (select) {

    select.addEventListener('change', () => {

      applyLanguage(select.value);

      try {

        localStorage.setItem(
          'portfolio-language',
          select.value
        );

      } catch {

        // Switching still works without storage.

      }

    });

  }

})();