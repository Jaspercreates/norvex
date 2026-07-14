// Mobile navigation toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
})();

// Custom cursor easter egg (fine-pointer / mouse devices only)
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.innerHTML =
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<g style="isolation:isolate">' +
        '<rect class="logo-bar-cyan" x="8" y="38" width="84" height="24" rx="12" transform="rotate(45 50 50)"/>' +
        '<rect class="logo-bar-violet" x="8" y="38" width="84" height="24" rx="12" transform="rotate(-45 50 50)"/>' +
      '</g>' +
    '</svg>';
  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.documentElement.classList.add('cursor-active');

  var targetX = window.innerWidth / 2;
  var targetY = window.innerHeight / 2;
  var ringX = targetX;
  var ringY = targetY;

  document.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.classList.add('cursor-visible');
    ring.classList.add('cursor-visible');
    dot.style.left = targetX + 'px';
    dot.style.top = targetY + 'px';
  });

  document.addEventListener('mouseleave', function () {
    dot.classList.remove('cursor-visible');
    ring.classList.remove('cursor-visible');
  });

  function loop() {
    ringX += (targetX - ringX) * 0.35;
    ringY += (targetY - ringY) * 0.35;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  var hoverTargets = 'a, button, input, textarea, .btn';
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverTargets)) {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverTargets)) {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    }
  });
})();

// Contact form: client-side only (no backend wired up yet)
(function () {
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (!form || !note) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      note.textContent = 'Bitte fülle alle Pflichtfelder aus.';
      note.style.color = '#ff8a8a';
      return;
    }

    var name = form.querySelector('#name').value.trim();
    var email = form.querySelector('#email').value.trim();
    var unternehmen = form.querySelector('#unternehmen').value.trim();
    var nachricht = form.querySelector('#nachricht').value.trim();

    var subject = encodeURIComponent('Anfrage über norvex.studio von ' + name);
    var bodyLines = [
      'Name: ' + name,
      'E-Mail: ' + email,
      unternehmen ? 'Unternehmen: ' + unternehmen : null,
      '',
      nachricht
    ].filter(Boolean);
    var body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = 'mailto:info@norvex.studio?subject=' + subject + '&body=' + body;

    note.style.color = 'var(--cyan)';
    note.textContent = 'Dein E-Mail-Programm öffnet sich mit deiner Nachricht an info@norvex.studio.';
  });
})();
