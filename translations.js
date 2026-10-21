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
      'A trail of projects',
      'Un recorrido de proyectos'
    ],

    [
      '#projetos .section__lede',

      'Projects that show how I think, learn and turn problems into practical solutions through code.',

      'Proyectos que muestran cómo pienso, aprendo y transformo problemas en soluciones prácticas con código.'
    ],


    ["[data-project=\"retrorun\"] .project__desc","A Python terminal game: navigate a 20 × 20 map to the flag with WASD controls and a move counter.","Juego de terminal en Python: recorre un mapa de 20 × 20 hasta la bandera, con controles WASD y contador de movimientos."],

    ['.project:nth-child(5) .project__chapter', 'Stop 05', 'Punto 05'],

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
    // AIR FOOD EXPRESS
    // ================================================================

    ["[data-project=\"air-food-express\"] .project__desc","A Python application for restaurants, menus and orders, with simulated drone deliveries, CSV files and tests.","Aplicación Python para restaurantes, menús y pedidos, con entregas simuladas mediante drones, archivos CSV y pruebas."],


    // ================================================================
    // CHEMISTRY IFMS
    // ================================================================

    [
      '[data-project="quimica-ifms"] .project__title',
      'Chemistry — IFMS',
      'Química — IFMS'
    ],

    ["[data-project=\"quimica-ifms\"] .project__desc","A page created for a Chemistry assignment at IFMS, connecting web development with course content.","Página creada para un trabajo de Química en el IFMS, conectando desarrollo web y contenidos de la asignatura."],

    [
      '[data-project="quimica-ifms"] .project__tags li:nth-child(2)',
      'Education',
      'Educación'
    ],


    // ================================================================
    // COMPLEX PYTHON CODES 4 BEGINNERS
    // ================================================================

    ["[data-project=\"complex-python\"] .project__desc","Python learning projects: sales and statement analysis, word frequency and CPF validation, using files, functions and tests.","Proyectos de estudio en Python: análisis de ventas y extractos, frecuencia de palabras y validación de CPF, con archivos, funciones y pruebas."],


    // ================================================================
    // MINE RPG
    // ================================================================

    ["[data-project=\"mine-rpg\"] .project__desc","A Java terminal RPG with turn-based combat, different heroes and monsters, initiative and persistent rankings.","RPG de terminal en Java con combate por turnos, distintos héroes y monstruos, iniciativa y ranking persistente."],


    // ================================================================
    // PROJECT LINKS
    // ================================================================

    [
      '.project__source-label',
      'View on GitHub ↗',
      'Ver en GitHub ↗'
    ],

    [
      '[data-project="quimica-ifms"] .project__links a:nth-child(2)',
      'Visit website ↗',
      'Visitar página ↗'
    ],



    [
      '.projects__more-label',
      'View more projects on GitHub ↗',
      'Ver más proyectos en GitHub ↗'
    ],


    // ================================================================
    // MINE RPG VIDEO
    // ================================================================
    ['[data-project="mine-rpg"] .project__media figcaption', 'Mine RPG in action — combat, initiative and ranking.', 'Mine RPG en acción — combate, iniciativa y ranking.'],
    ['#rpg-demo-video a', 'Download Mine RPG video', 'Descargar vídeo de Mine RPG'],

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
    ['[data-project="complex-python"] img', 'alt', 'Illustrated Python editor showing real repository projects and a word frequency example.', 'Ilustración de un editor Python con proyectos reales del repositorio y un ejemplo de frecuencia de palabras.'],

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
      '#rpg-demo-video',
      'aria-label',
      'Mine RPG demonstration',
      'Demostración de Mine RPG'
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