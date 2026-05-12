  var currentLang = 'pt';

  var translations = {
    pt: {
      'nav.home':       'Início',
      'nav.about':      'Sobre mim',
      'nav.projects':   'Projetos',
      'nav.experience': 'Experiência',
      'nav.contact':    'Contato',
      'nav.certs':      'Certificados',
      'hero.im':        'I\'m',
      'hero.developer': 'Developer',
      'hero.cta':       'Ver Projetos',
      'about.label': 'SOBRE',
      'about.title': 'Sobre mim',
      'about.desc': 'Desenvolvedor Full Stack de 27 anos, com experiência em automação utilizando Inteligência Artificial. <strong>Focado em criar soluções eficientes e escaláveis</strong>, unindo desenvolvimento web e tecnologia para resolver problemas reais.',
      'about.stats.years': 'Anos estudando programação',
      'about.stats.projects': 'Projetos desenvolvidos',
      'about.stats.stack': 'Tecnologias na stack',
      'about.stats.dedication': 'Dedicação e evolução contínua',
      'about.skills.title': 'Experiência',
      'about.skills.sub': 'Desenvolvedor Full Stack em formação, com atuação orientada por produto, organização técnica e evolução constante.',
      'about.skills.backend': 'Backend',
      'about.skills.frontend': 'Frontend',
      'about.skills.database': 'Banco de Dados',
      'about.skills.devops': 'DevOps',
      'about.skills.docs': 'Documentação & Versionamento',
      'about.skills.agile': 'Metodologias Ágeis',
      'about.skills.languages': 'Idiomas',
      'about.highlights.frontend': 'Frontend moderno',
      'about.highlights.backend': 'Backend escalável',
      'about.highlights.ai': 'Automações com IA',
      'about.photo.badge': 'Perfil Profissional',
      'about.photo.kicker': 'Full Stack Developer',
      'about.photo.title': 'Construindo produtos web com olhar técnico, clareza visual e foco em resultado.',
      'about.photo.copy': 'Desenvolvimento frontend, backend e automações com IA aplicados a problemas reais e soluções escaláveis.',
      'about.photo.alt': 'Keven Matheus em seu ambiente de trabalho',
      'education.title': 'Formação Acadêmica',
      'education.card1.course': 'Análise e Desenvolvimento de Sistemas',
      'education.card1.type': 'Graduação · Tecnólogo',
      'education.card2.course': 'Marketing',
      'education.card2.type': 'Graduação · Bacharelado',
      'education.card3.course': 'Programação Full Stack',
      'education.card3.type': 'Curso Profissionalizante',
      'education.status.inProgress': 'Cursando',
      'education.status.completing': 'Concluindo',
      'projects.eyebrow': 'Portfólio',
      'projects.title': 'Projetos',
      'projects.copy': 'Projetos que desenvolvi aplicando na prática produto, experiência do usuário, arquitetura e tecnologia para criar soluções completas.',
      'projects.feature.label': 'Projeto 01',
      'projects.feature.title': 'FluxoPay — Gestão completa para assinaturas e cobranças',
      'projects.feature.desc': 'Sistema completo desenvolvido para gerenciamento de assinaturas, clientes e cobranças, com dashboard intuitivo e foco em automação financeira. O FluxoPay é uma solução SaaS voltada para empresas que trabalham com modelos de assinatura e cobranças recorrentes, centralizando o fluxo financeiro e operacional com mais controle, eficiência e escalabilidade.',
      'projects.feature.ctaPrimary': 'Ver sistema',
      'projects.feature.ctaSecondary': 'Ver mais projetos',
      'projects.tech.subscriptions': 'Assinaturas',
      'projects.tech.billing': 'Cobranças',
      'projects.tech.finAutomation': 'Automação Financeira',
      'projects.video.toggle': 'Pausar/Reproduzir vídeo',
      'projects.second.label': 'Projeto 02',
      'projects.second.title': 'Catalogo PP Sports — vitrine digital para produtos esportivos',
      'projects.second.desc': 'Landing page comercial criada para apresentar catalogo, categorias e destaques com navegacao simples, visual direto e foco em conversao. O objetivo do projeto e transformar a apresentacao dos produtos em uma experiencia mais clara, organizada e profissional para o cliente final.',
      'projects.second.ctaPrimary': 'Ver projeto',
      'projects.second.ctaSecondary': 'Mais projetos',
      'projects.third.label': 'Projeto 03',
      'projects.third.title': 'CSS Gerador com IA — plataforma inteligente de geração de código',
      'projects.third.desc': 'Gerador IA Self é uma plataforma inteligente que transforma ideias em código e conteúdo de forma rápida e prática. Com uma interface moderna e intuitiva, o site permite gerar soluções criativas usando inteligência artificial, facilitando o desenvolvimento de projetos digitais, automações e experiências visuais.',
      'projects.third.ctaPrimary': 'Ver projeto',
      'projects.third.ctaSecondary': 'Mais projetos',
      'projects.second.mockup.eyebrow': 'Catalogo online',
      'projects.second.mockup.title': 'Vitrine pensada para destacar categorias, ofertas e produtos com clareza.',
      'projects.second.mockup.copy': 'Estrutura leve, blocos bem organizados e navegacao visual para acelerar a descoberta dos itens principais.',
      'projects.second.mockup.sideTitle': 'Categorias',
      'projects.second.mockup.cat1': 'Futebol',
      'projects.second.mockup.cat2': 'Academia',
      'projects.second.mockup.cat3': 'Corrida',
      'projects.second.mockup.listTitle': 'Produtos em destaque',
      'projects.second.mockup.badge': 'Atualizado',
      'projects.second.mockup.item1': 'Chuteira Speed Pro',
      'projects.second.mockup.item1meta': 'Alta rotacao · campanha principal',
      'projects.second.mockup.item2': 'Kit treino essentials',
      'projects.second.mockup.item2meta': 'Itens combinados · oferta da semana',
      'projects.second.mockup.metric1': '+120',
      'projects.second.mockup.metric1label': 'Produtos organizados em secoes objetivas',
      'projects.second.mockup.metric2': '24h',
      'projects.second.mockup.metric2label': 'Tempo medio para atualizar destaques e banners',
      'experience.eyebrow': 'Experiência',
      'experience.title': 'Minha evolução vem de estudo consistente, prática e construção contínua.',
      'experience.copy': 'Estou em formação como Desenvolvedor Full Stack, fortalecendo base técnica, visão de produto e capacidade de transformar ideia em solução funcional.',
      'experience.card1.tag': 'Formação',
      'experience.card1.title': 'Análise e Desenvolvimento de Sistemas',
      'experience.card1.copy': 'Construção de base sólida em desenvolvimento, lógica, estrutura de sistemas e fundamentos importantes para evolução profissional consistente.',
      'experience.card2.tag': 'Especialização',
      'experience.card2.title': 'Programação Full Stack',
      'experience.card2.copy': 'Aprofundamento em aplicações web modernas, integração entre camadas, boas práticas de código e desenvolvimento orientado a entrega.',
      'experience.card3.tag': 'Desenvolvimento',
      'experience.card3.meta': 'Foco Atual',
      'experience.card3.title': 'Projetos, prática e evolução constante',
      'experience.card3.copy': 'Estudo contínuo com aplicação prática em interfaces, APIs, banco de dados e automações com IA para acelerar aprendizado e maturidade técnica.',
      'contact.eyebrow': 'Contato',
      'contact.title': 'Vamos conversar sobre oportunidades, projetos e parcerias.',
      'contact.copy': 'Se quiser trocar ideia sobre desenvolvimento web, automações ou uma oportunidade profissional, você pode falar comigo pelos canais abaixo.',
      'contact.linkedin': 'Conexão profissional e networking',
      'contact.github': 'Projetos, estudos e repositórios',
      'contact.open': 'abrir',
      'contact.availability.eyebrow': 'Disponibilidade',
      'contact.availability.title': 'Aberto para construir soluções com mais organização, performance e resultado.',
      'contact.availability.copy': 'Busco oportunidades para contribuir com projetos que valorizem evolução constante, qualidade técnica e experiência bem resolvida para o usuário.',
      'contact.title2': 'Meus Contatos',
      'contact.label.email': 'Email',
      'contact.label.location': 'Localização',
      'contact.location.value': 'Distrito de Gravatá, São João do Rio do Peixe — PB',
      'contact.cta': 'Conectar',
      'footer.nav.title': 'Navegação',
      'footer.contact.title': 'Contato',
      'footer.location': 'São João do Rio do Peixe, PB — Brasil',
      'footer.backtop': 'Voltar ao topo',
      'footer.copy': '© 2025 Keven Matheus · Todos os direitos reservados',
      'whatsapp.label': 'Falar no WhatsApp',
      'certs.eyebrow': 'Certificados',
      'certs.title': 'Formação e conquistas',
      'certs.copy': 'Certificações que comprovam o aprendizado contínuo e o domínio das tecnologias que aplico nos projetos.',
      'certs.cert1.title': 'Desenvolvimento HTML',
      'certs.cert2.title': 'Desenvolvimento CSS',
      'certs.badge': 'Concluído',
      'footer.nav.home': 'Início',
      'footer.nav.about': 'Sobre mim',
      'footer.nav.projects': 'Projetos',
      'footer.nav.certs': 'Certificados',
      'footer.nav.contact': 'Contato'
    },
    en: {
      'nav.home':       'Home',
      'nav.about':      'About me',
      'nav.projects':   'Projects',
      'nav.experience': 'Experience',
      'nav.contact':    'Contact',
      'nav.certs':      'Certificates',
      'hero.im':        'I\'m',
      'hero.developer': 'Developer',
      'hero.cta':       'View Projects',
      'about.label': 'ABOUT',
      'about.title': 'About me',
      'about.desc': '27-year-old Full Stack Developer with experience in automation using Artificial Intelligence. <strong>Focused on building efficient and scalable solutions</strong>, combining web development and technology to solve real problems.',
      'about.stats.years': 'Years studying programming',
      'about.stats.projects': 'Projects developed',
      'about.stats.stack': 'Technologies in my stack',
      'about.stats.dedication': 'Dedication and continuous growth',
      'about.skills.title': 'Experience',
      'about.skills.sub': 'Full Stack Developer in training, with a product-oriented mindset, technical organization, and constant improvement.',
      'about.skills.backend': 'Backend',
      'about.skills.frontend': 'Frontend',
      'about.skills.database': 'Databases',
      'about.skills.devops': 'DevOps',
      'about.skills.docs': 'Documentation & Versioning',
      'about.skills.agile': 'Agile Methodologies',
      'about.skills.languages': 'Languages',
      'about.highlights.frontend': 'Modern frontend',
      'about.highlights.backend': 'Scalable backend',
      'about.highlights.ai': 'AI automations',
      'about.photo.badge': 'Professional Profile',
      'about.photo.kicker': 'Full Stack Developer',
      'about.photo.title': 'Building web products with technical vision, visual clarity, and a strong focus on results.',
      'about.photo.copy': 'Frontend, backend, and AI automation development applied to real problems and scalable solutions.',
      'about.photo.alt': 'Keven Matheus in his workspace',
      'education.title': 'Academic Background',
      'education.card1.course': 'Systems Analysis and Development',
      'education.card1.type': 'Degree · Technologist',
      'education.card2.course': 'Marketing',
      'education.card2.type': 'Degree · Bachelor\'s',
      'education.card3.course': 'Full Stack Programming',
      'education.card3.type': 'Professional Course',
      'education.status.inProgress': 'In Progress',
      'education.status.completing': 'Completing',
      'projects.eyebrow': 'Portfolio',
      'projects.title': 'Projects',
      'projects.copy': 'Projects I developed by applying product thinking, user experience, architecture, and technology to build complete solutions.',
      'projects.feature.label': 'Project 01',
      'projects.feature.title': 'FluxoPay — Complete subscription and billing management',
      'projects.feature.desc': 'A complete system built to manage subscriptions, customers, and billing, with an intuitive dashboard and a strong focus on financial automation. FluxoPay is a SaaS solution designed for companies working with subscription models and recurring billing, centralizing financial and operational flow with more control, efficiency, and scalability.',
      'projects.feature.ctaPrimary': 'View system',
      'projects.feature.ctaSecondary': 'View more projects',
      'projects.tech.subscriptions': 'Subscriptions',
      'projects.tech.billing': 'Billing',
      'projects.tech.finAutomation': 'Financial Automation',
      'projects.video.toggle': 'Pause/Play video',
      'projects.second.label': 'Project 02',
      'projects.second.title': 'Catalogo PP Sports — digital storefront for sports products',
      'projects.second.desc': 'A commercial landing page created to showcase the catalog, categories, and featured items with simple navigation, direct visuals, and a strong focus on conversion. The goal of the project is to turn product presentation into a clearer, more organized, and more professional experience for the end customer.',
      'projects.second.ctaPrimary': 'View project',
      'projects.second.ctaSecondary': 'More projects',
      'projects.third.label': 'Project 03',
      'projects.third.title': 'CSS Generator with AI — intelligent code generation platform',
      'projects.third.desc': 'Gerador IA Self is an intelligent platform that transforms ideas into code and content quickly and practically. With a modern and intuitive interface, the site allows generating creative solutions using artificial intelligence, facilitating the development of digital projects, automations and visual experiences.',
      'projects.third.ctaPrimary': 'View project',
      'projects.third.ctaSecondary': 'More projects',
      'projects.second.mockup.eyebrow': 'Online catalog',
      'projects.second.mockup.title': 'A storefront designed to highlight categories, offers, and products with clarity.',
      'projects.second.mockup.copy': 'Lightweight structure, well-organized blocks, and visual navigation to speed up discovery of the main items.',
      'projects.second.mockup.sideTitle': 'Categories',
      'projects.second.mockup.cat1': 'Football',
      'projects.second.mockup.cat2': 'Fitness',
      'projects.second.mockup.cat3': 'Running',
      'projects.second.mockup.listTitle': 'Featured products',
      'projects.second.mockup.badge': 'Updated',
      'projects.second.mockup.item1': 'Speed Pro Cleats',
      'projects.second.mockup.item1meta': 'High turnover · main campaign',
      'projects.second.mockup.item2': 'Essentials training kit',
      'projects.second.mockup.item2meta': 'Bundled items · weekly offer',
      'projects.second.mockup.metric1': '+120',
      'projects.second.mockup.metric1label': 'Products organized into objective sections',
      'projects.second.mockup.metric2': '24h',
      'projects.second.mockup.metric2label': 'Average time to refresh highlights and banners',
      'experience.eyebrow': 'Experience',
      'experience.title': 'My growth comes from consistent study, practice, and continuous building.',
      'experience.copy': 'I am training as a Full Stack Developer, strengthening my technical foundation, product vision, and ability to turn ideas into functional solutions.',
      'experience.card1.tag': 'Education',
      'experience.card1.title': 'Systems Analysis and Development',
      'experience.card1.copy': 'Building a solid foundation in development, logic, system structure, and key fundamentals for consistent professional growth.',
      'experience.card2.tag': 'Specialization',
      'experience.card2.title': 'Full Stack Programming',
      'experience.card2.copy': 'Deepening knowledge in modern web applications, layer integration, code best practices, and delivery-oriented development.',
      'experience.card3.tag': 'Development',
      'experience.card3.meta': 'Current Focus',
      'experience.card3.title': 'Projects, practice, and constant growth',
      'experience.card3.copy': 'Continuous study with hands-on application in interfaces, APIs, databases, and AI automations to accelerate learning and technical maturity.',
      'contact.eyebrow': 'Contact',
      'contact.title': 'Let\'s talk about opportunities, projects, and partnerships.',
      'contact.copy': 'If you want to chat about web development, automation, or a professional opportunity, you can reach me through the channels below.',
      'contact.linkedin': 'Professional connection and networking',
      'contact.github': 'Projects, studies, and repositories',
      'contact.open': 'open',
      'contact.availability.eyebrow': 'Availability',
      'contact.availability.title': 'Open to building solutions with more organization, performance, and results.',
      'contact.availability.copy': 'I am looking for opportunities to contribute to projects that value continuous improvement, technical quality, and a well-crafted user experience.',
      'contact.title2': 'My Contacts',
      'contact.label.email': 'Email',
      'contact.label.location': 'Location',
      'contact.location.value': 'Gravatá District, São João do Rio do Peixe — PB, Brazil',
      'contact.cta': 'Connect',
      'footer.nav.title': 'Navigation',
      'footer.contact.title': 'Contact',
      'footer.location': 'São João do Rio do Peixe, PB — Brazil',
      'footer.backtop': 'Back to top',
      'footer.copy': '© 2025 Keven Matheus · All rights reserved',
      'whatsapp.label': 'Chat on WhatsApp',
      'certs.eyebrow': 'Certificates',
      'certs.title': 'Training and achievements',
      'certs.copy': 'Certifications that prove continuous learning and mastery of the technologies I apply in my projects.',
      'certs.cert1.title': 'HTML Development',
      'certs.cert2.title': 'CSS Development',
      'certs.badge': 'Completed',
      'footer.nav.home': 'Home',
      'footer.nav.about': 'About me',
      'footer.nav.projects': 'Projects',
      'footer.nav.certs': 'Certificates',
      'footer.nav.contact': 'Contact'
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[lang][key]) el.setAttribute('alt', translations[lang][key]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
    });

    var pill = document.getElementById('toggle-pill');
    var ptLabel = document.getElementById('lang-pt');
    var enLabel = document.getElementById('lang-en');

    if (lang === 'en') {
      pill.classList.add('en');
      ptLabel.style.opacity = '0.4';
      enLabel.style.opacity = '1';
    } else {
      pill.classList.remove('en');
      ptLabel.style.opacity = '1';
      enLabel.style.opacity = '0.4';
    }
  }

  function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLang(currentLang);
  }

  applyLang(currentLang);

document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initLangToggle();
  initTitleBracket();
  initProjectVideos();
  initTiltEffect();
  initRevealAnimations();
  initCarousel();
  initCertsCarousel();
});

function initNav() {
  var navElement = document.querySelector('nav');
  var navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  var navScrollOffsets = {
    '#inicio': 118,
    '#sobre': 132,
    '#projetos': 120,
    '#experiencia': 120,
    '#contato': 120
  };

  var trackedSections = navLinks
    .map(function(link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return null;

      var section = document.querySelector(href);
      if (!section) return null;

      return { link: link, section: section, id: href };
    })
    .filter(Boolean);

  function setActiveNavLink(sectionId) {
    navLinks.forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('href') === sectionId);
    });
  }

  function syncNavScrollState() {
    if (!navElement) return;
    navElement.classList.toggle('scrolled', window.scrollY > 40);
  }

  function syncActiveNavLink() {
    if (!trackedSections.length) return;

    var navOffset = navElement ? navElement.getBoundingClientRect().height + 36 : 120;
    var scrollLine = window.scrollY + navOffset + 24;
    var currentItem = trackedSections[0];

    trackedSections.forEach(function(item) {
      var sectionTop = item.section.offsetTop;
      var sectionBottom = sectionTop + item.section.offsetHeight;

      if (scrollLine >= sectionTop && scrollLine < sectionBottom) {
        currentItem = item;
      } else if (scrollLine >= sectionTop) {
        currentItem = item;
      }
    });

    setActiveNavLink(currentItem.id);
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      var offset = navScrollOffsets[href] || 120;
      var targetTop = window.scrollY + target.getBoundingClientRect().top - offset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    syncNavScrollState();
    syncActiveNavLink();
  }, { passive: true });
  window.addEventListener('resize', syncActiveNavLink);

  syncNavScrollState();
  syncActiveNavLink();
}

function initLangToggle() {
  var langToggle = document.getElementById('lang-toggle');
  if (!langToggle || typeof toggleLang !== 'function') return;

  langToggle.style.cursor = 'pointer';
  langToggle.addEventListener('click', toggleLang);
  langToggle.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleLang();
    }
  });
}

function initTitleBracket() {
  var container = document.getElementById('title-bracket');
  var frame = document.getElementById('bracket-frame');
  var wordA = document.getElementById('word-fullstack');
  var wordB = document.getElementById('word-developer');
  var pause = 1200;
  var onA = true;
  var pad = 16;

  if (!container || !frame || !wordA || !wordB) return;

  function snapTo(word) {
    var containerRect = container.getBoundingClientRect();
    var wordRect = word.getBoundingClientRect();

    frame.style.transition = 'none';
    frame.style.left = (wordRect.left - containerRect.left - pad) + 'px';
    frame.style.width = (wordRect.width + pad * 2) + 'px';
  }

  function slideTo(word, leaving, callback) {
    var containerRect = container.getBoundingClientRect();
    var wordRect = word.getBoundingClientRect();

    leaving.classList.remove('in-focus');
    word.classList.add('in-focus');

    frame.style.transition = 'left 1.2s cubic-bezier(0.4,0,0.2,1), width 1.2s cubic-bezier(0.4,0,0.2,1)';
    frame.style.left = (wordRect.left - containerRect.left - pad) + 'px';
    frame.style.width = (wordRect.width + pad * 2) + 'px';

    setTimeout(callback, 1200);
  }

  function tick() {
    if (onA) {
      slideTo(wordB, wordA, function() {
        onA = false;
        setTimeout(tick, pause);
      });
      return;
    }

    slideTo(wordA, wordB, function() {
      onA = true;
      setTimeout(tick, pause);
    });
  }

  function init() {
    snapTo(wordA);
    wordA.classList.add('in-focus');
    setTimeout(tick, pause);
  }

  setTimeout(init, 1100);
}

function initProjectVideos() {
  [
    { videoId: 'mockupVideo', overlayId: 'mockupPlayOverlay', pauseId: 'iconPause', playId: 'iconPlay', laptopId: 'tiltWrap' },
    { videoId: 'mockupVideo2', overlayId: 'mockupPlayOverlay2', pauseId: 'iconPause2', playId: 'iconPlay2', laptopId: 'tiltWrap2' },
    { videoId: 'mockupVideo3', overlayId: 'mockupPlayOverlay3', pauseId: 'iconPause3', playId: 'iconPlay3', laptopId: 'tiltWrap3' }
  ].forEach(initProjectVideo);
}

function initProjectVideo(config) {
  var video = document.getElementById(config.videoId);
  var overlay = document.getElementById(config.overlayId);
  var iconPause = document.getElementById(config.pauseId);
  var iconPlay = document.getElementById(config.playId);
  var laptop = document.getElementById(config.laptopId);
  var visual = laptop ? laptop.closest('.carousel-card-visual') : null;
  var hasOpened = false;

  if (!video || !overlay || !iconPause || !iconPlay || !laptop) return;

  function syncIcons() {
    iconPause.style.display = video.paused ? 'none' : 'block';
    iconPlay.style.display = video.paused ? 'block' : 'none';
  }

  function prepareVideoForAutoplay() {
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
  }

  function playVideoAfterOpen() {
    prepareVideoForAutoplay();

    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === 'function') {
      playAttempt.then(syncIcons).catch(syncIcons);
      return;
    }

    syncIcons();
  }

  function openLaptop() {
    if (hasOpened) return;

    hasOpened = true;
    laptop.classList.remove('is-closed');
    laptop.classList.add('is-opening');

    setTimeout(function() {
      laptop.classList.remove('is-opening');
      playVideoAfterOpen();
    }, 1180);
  }

  prepareVideoForAutoplay();
  video.pause();
  syncIcons();

  overlay.addEventListener('click', function() {
    if (!hasOpened) {
      openLaptop();
      return;
    }

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    syncIcons();
  });

  overlay.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      overlay.click();
    }
  });

  video.addEventListener('play', syncIcons);
  video.addEventListener('pause', syncIcons);
  video.addEventListener('loadedmetadata', function() {
    if (hasOpened && video.paused) playVideoAfterOpen();
  });
  video.addEventListener('canplay', function() {
    if (hasOpened && video.paused) playVideoAfterOpen();
  });
  window.addEventListener('pageshow', function() {
    if (hasOpened && video.paused) playVideoAfterOpen();
  });
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && hasOpened && video.paused) playVideoAfterOpen();
  });

  var isMobile = window.innerWidth <= 768;
  if ('IntersectionObserver' in window && visual) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          openLaptop();
          observer.disconnect();
        }
      });
    }, { threshold: isMobile ? 0.1 : 0.45 });

    observer.observe(visual);
    return;
  }

  setTimeout(openLaptop, isMobile ? 300 : 700);
}

function initTiltEffect() {
  var wrap = document.getElementById('tiltWrap');
  if (!wrap) return;

  var max = 8;

  wrap.addEventListener('mousemove', function(event) {
    var rect = wrap.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width - 0.5;
    var y = (event.clientY - rect.top) / rect.height - 0.5;

    wrap.style.transform = 'rotateY(' + (x * max * 2) + 'deg) rotateX(' + (-y * max) + 'deg) scale(1.015)';
  });

  wrap.addEventListener('mouseleave', function() {
    wrap.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
}

function initRevealAnimations() {
  var targets = document.querySelectorAll(
    '.project-feature-label, .project-feature-title, .project-feature-card, .project-actions, .project-techs, .project-visual, .cert-card, .contact-new-item, .contact-new-cta'
  );

  if (!targets.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function(target) {
    observer.observe(target);
  });
}

function initCarousel() {
  var track = document.getElementById('carouselTrack');
  var prevBtn = document.getElementById('carouselPrev');
  var nextBtn = document.getElementById('carouselNext');
  var dotsContainer = document.getElementById('carouselDots');

  if (!track || !dotsContainer) return;

  var cards = track.querySelectorAll('.carousel-card');
  var dots = dotsContainer.querySelectorAll('.carousel-dot');
  var currentIndex = 0;
  var totalCards = cards.length;
  var startX = 0;
  var isDragging = false;
  var currentTranslate = 0;
  var autoplayInterval = null;
  var autoplayDelay = 5000;

  function goToSlide(index) {
    if (index < 0) index = totalCards - 1;
    if (index >= totalCards) index = 0;
    currentIndex = index;
    currentTranslate = -currentIndex * 100;
    track.style.transform = 'translateX(' + currentTranslate + '%)';
    updateDots();
  }

  function updateDots() {
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(function() {
      goToSlide(currentIndex + 1);
    }, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Touch/swipe support
  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    var endX = e.changedTouches[0].clientX;
    var diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
    resetAutoplay();
  }, { passive: true });

  // Keyboard navigation
  var wrapper = track.closest('.carousel-wrapper');
  if (wrapper) {
    wrapper.setAttribute('tabindex', '0');
    wrapper.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
        resetAutoplay();
      }
    });

    // Pause on hover, resume on leave
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Start autoplay
  startAutoplay();
}

function initCertsCarousel() {
  var track = document.getElementById('certsCarouselTrack');
  var prevBtn = document.getElementById('certsCarouselPrev');
  var nextBtn = document.getElementById('certsCarouselNext');
  var dotsContainer = document.getElementById('certsCarouselDots');

  if (!track || !dotsContainer) return;

  var cards = track.querySelectorAll('.certs-carousel-card');
  var dots = dotsContainer.querySelectorAll('.carousel-dot');
  var currentIndex = 0;
  var totalCards = cards.length;
  var startX = 0;
  var isDragging = false;
  var autoplayInterval = null;
  var autoplayDelay = 5000;

  function getVisibleCount() {
    var w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function getMaxIndex() {
    var visible = getVisibleCount();
    return Math.max(0, totalCards - visible);
  }

  function goToSlide(index) {
    var maxIndex = getMaxIndex();
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    currentIndex = index;

    var card = cards[0];
    var gap = 24;
    var cardWidth = card.offsetWidth + gap;
    track.style.transform = 'translateX(' + (-currentIndex * cardWidth) + 'px)';
    updateDots();
  }

  function updateDots() {
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(function() {
      goToSlide(currentIndex + 1);
    }, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Touch/swipe
  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    var endX = e.changedTouches[0].clientX;
    var diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
    resetAutoplay();
  }, { passive: true });

  // Hover pause
  var wrapper = track.closest('.certs-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}
