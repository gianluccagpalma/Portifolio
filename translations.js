// Portuguese content is kept in the HTML, including the fallback download link.
// Each entry maps a selector to English and Spanish; repeated selectors share copy.
(() => {
  const copy = [
    ['.nav__links a[href="#sobre"], #sobre .section__eyebrow', 'About', 'Sobre mí'],
    ['.nav__links a[href="#habilidades"], #habilidades .section__eyebrow', 'Skills', 'Habilidades'],
    ['.nav__links a[href="#projetos"], #projetos .section__eyebrow', 'Projects', 'Proyectos'],
    ['.nav__links a[href="#contato"], #contato .section__eyebrow', 'Contact', 'Contacto'],
    ['.nav__cta', "Let’s talk", 'Hablemos'],
    ['.hero .eyebrow', 'Software Developer', 'Desarrollador de Software'],
    ['.hero__tagline', 'I hold a technical diploma in IT from <strong>IFMS</strong> and am currently studying Systems Analysis and Development at <strong>Infnet</strong> and Software Development at <strong>BYU</strong>. I build with Python, Java, C#, SQL and web interfaces — in Portuguese, English and Spanish.', 'Soy técnico en Informática por el <strong>IFMS</strong> y actualmente estudio Análisis y Desarrollo de Sistemas en <strong>Infnet</strong> y Desarrollo de Software en <strong>BYU</strong>. Desarrollo con Python, Java, C#, SQL e interfaces web — en portugués, inglés y español.'],
    ['.hero__actions a[href="#projetos"]', 'View projects', 'Ver proyectos'],
    ['#resumeDownload', 'Download résumé', 'Descargar currículum'],
    ['.about-title', 'Education and journey', 'Formación y trayectoria'],
    ['.timeline__item:nth-child(1) .timeline__label', 'Technical Diploma in IT', 'Técnico en Informática'],
    ['.timeline__item:nth-child(2) .timeline__label', 'Systems Analysis and Development', 'Análisis y Desarrollo de Sistemas'],
    ['.timeline__item:nth-child(2) .timeline__meta', 'Faculdade Infnet — in progress', 'Faculdade Infnet — en curso'],
    ['.timeline__item:nth-child(3) .timeline__label', 'Software Development', 'Desarrollo de Software'],
    ['.timeline__item:nth-child(3) .timeline__meta', 'Brigham Young University (BYU) — in progress', 'Brigham Young University (BYU) — en curso'],
    ['.languages__label', 'Languages', 'Idiomas'],
    ['.lang-tag:nth-child(1)', 'Portuguese <em>native</em>', 'Portugués <em>nativo</em>'],
    ['.lang-tag:nth-child(2)', 'English <em>fluent</em>', 'Inglés <em>fluido</em>'],
    ['.lang-tag:nth-child(3)', 'Spanish <em>fluent</em>', 'Español <em>fluido</em>'],
    ['#habilidades .section__title', 'Tools of the trade', 'Herramientas del oficio'],
    ['#habilidades .section__lede', 'The languages and technologies I use to turn problems into software.', 'Los lenguajes y tecnologías que utilizo para transformar problemas en software.'],
    ['#projetos .section__title', 'Selected work', 'Trabajos seleccionados'],
    ['#projetos .section__lede', 'Projects that show how I think, learn and turn problems into practical solutions through code.', 'Proyectos que muestran cómo pienso, aprendo y transformo problemas en soluciones prácticas con código.'],
    ['.project:nth-child(1) .project__chapter', 'Stop 01', 'Punto 01'],
    ['.project:nth-child(2) .project__chapter', 'Stop 02', 'Punto 02'],
    ['.project:nth-child(3) .project__chapter', 'Stop 03', 'Punto 03'],
    ['.project:nth-child(4) .project__chapter', 'Stop 04', 'Punto 04'],
    ['.project:nth-child(1) .project__desc', 'An academic Python application for managing restaurants, menus and orders, with simulated drone deliveries. Uses CSV files for data persistence and includes tests with Pytest.', 'Aplicación académica en Python para gestionar restaurantes, menús y pedidos, con entregas simuladas mediante drones. Utiliza archivos CSV para persistir los datos e incluye pruebas con Pytest.'],
    ['.project:nth-child(2) .project__title', 'Chemistry — IFMS', 'Química — IFMS'],
    ['.project:nth-child(2) .project__desc', 'A website developed in 2022 for a high school Chemistry assignment at IFMS. A project connecting web development with the presentation of course content.', 'Página desarrollada en 2022 para un trabajo de Química en el IFMS, durante la educación secundaria. Un proyecto que conecta el desarrollo web con la presentación de contenidos de la asignatura.'],
    ['.project:nth-child(2) .project__tags li:nth-child(2)', 'Education', 'Educación'],
    ['.project:nth-child(3) .project__desc', 'A growing collection of Python projects covering shopping receipts, password evaluation, water pressure and molar mass. Brings together logic, functions, CSV files and automated tests, with more projects on the way.', 'Colección en expansión de proyectos Python sobre recibos de compras, evaluación de contraseñas, presión del agua y masa molar. Reúne lógica, funciones, archivos CSV y pruebas automatizadas, con nuevos proyectos en camino.'],
    ['.project:nth-child(4) .project__desc', 'A role-playing game in Java, currently in development. I will be sharing the details and source code here soon.', 'Juego de rol en Java, actualmente en desarrollo. Pronto compartiré los detalles y el código fuente aquí.'],
    ['.project:nth-child(4) .project__tags li:nth-child(2)', 'In development', 'En desarrollo'],
    ['.project__links a:first-child', 'Source code ↗', 'Código fuente ↗'],
    ['.project:nth-child(2) .project__links a:nth-child(2)', 'Visit website ↗', 'Visitar página ↗'],
    ['.project:nth-child(3) .project__links a:nth-child(2)', 'View example ↗', 'Ver ejemplo ↗'],
    ['.projects__actions a', 'View more projects on GitHub ↗', 'Ver más proyectos en GitHub ↗'],
    ['#contato .section__title', 'Let’s talk', 'Conversemos'],
    ['#contato .section__lede', 'I am looking for an internship or a junior developer role. If my work fits what you are looking for, get in touch.', 'Estoy buscando una oportunidad de prácticas o un puesto como desarrollador júnior. Si mi trabajo encaja con lo que buscas, escríbeme.'],
    ['#contato .btn', 'Send a message', 'Enviar mensaje'],
    ['.social a[href^="mailto:"]', 'Email', 'Correo electrónico'],
    ['.footer__credit', 'Made by Gianlucca Palma', 'Hecho por Gianlucca Palma'],
  ];

  const attributes = [
    ['.nav__mark', 'aria-label', 'Home', 'Inicio'],
    ['#languageSelect', 'aria-label', 'Page language', 'Idioma de la página'],
    ['.scroll-hint', 'aria-label', 'Scroll to the About section', 'Ir a la sección Sobre mí'],
    ['.hero__bg img', 'alt', 'Lake and mountains in Patagonia', 'Lago y montañas de la Patagonia'],
    ['.hero__portrait img', 'alt', 'Portrait of Gianlucca', 'Retrato de Gianlucca'],
    ['meta[name="description"]', 'content', 'Portfolio of Gianlucca Palma, a software developer specializing in Python, Java, C# and SQL.', 'Portafolio de Gianlucca Palma, desarrollador de software especializado en Python, Java, C# y SQL.'],
  ];
  const resumes = {
    'pt-BR': 'Curriculos/Curriculo_Gianlucca_Palma_PT-BR.pdf',
    en: 'Curriculos/Resume_Gianlucca_Palma_EN.pdf',
    es: 'Curriculos/Curriculum_Gianlucca_Palma_ES.pdf',
  };
  const titles = {
    'pt-BR': document.title,
    en: 'Gianlucca Palma — Software Developer',
    es: 'Gianlucca Palma — Desarrollador de Software',
  };
  const content = copy.flatMap(([selector, en, es]) =>
    Array.from(document.querySelectorAll(selector), element => ({
      element, values: { 'pt-BR': element.innerHTML, en, es },
    }))
  );
  const labels = attributes.map(([selector, attribute, en, es]) => {
    const element = document.querySelector(selector);
    return { element, attribute, values: { 'pt-BR': element.getAttribute(attribute), en, es } };
  });
  const select = document.getElementById('languageSelect');

  function applyLanguage(language) {
    const locale = Object.hasOwn(resumes, language) ? language : 'pt-BR';
    document.documentElement.lang = locale;
    document.title = titles[locale];
    // Only trusted, static translations are inserted as HTML (strong/em formatting).
    content.forEach(({ element, values }) => { element.innerHTML = values[locale]; });
    labels.forEach(({ element, attribute, values }) => element.setAttribute(attribute, values[locale]));
    const download = document.getElementById('resumeDownload');
    download.href = resumes[locale];
    download.hreflang = locale;
    select.value = locale;
    // Translated text changes section heights and navigation link widths.
    requestAnimationFrame(() => {
      setActiveLink();
      updateProgress();
    });
  }

  let savedLanguage = 'pt-BR';
  try { savedLanguage = localStorage.getItem('portfolio-language') || savedLanguage; } catch { /* Storage may be unavailable. */ }
  applyLanguage(savedLanguage);
  select.addEventListener('change', () => {
    applyLanguage(select.value);
    try { localStorage.setItem('portfolio-language', select.value); } catch { /* Switching still works without storage. */ }
  });
})();
