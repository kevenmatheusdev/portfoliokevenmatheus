document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initLangToggle();
  initTitleBracket();
  initProjectVideos();
  initTiltEffect();
  initRevealAnimations();
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
  var visual = laptop ? laptop.closest('.project-visual') : null;
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
