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

    var subject = encodeURIComponent('Anfrage über norvex.de von ' + name);
    var bodyLines = [
      'Name: ' + name,
      'E-Mail: ' + email,
      unternehmen ? 'Unternehmen: ' + unternehmen : null,
      '',
      nachricht
    ].filter(Boolean);
    var body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = 'mailto:hallo@norvex.de?subject=' + subject + '&body=' + body;

    note.style.color = 'var(--cyan)';
    note.textContent = 'Dein E-Mail-Programm öffnet sich mit deiner Nachricht an hallo@norvex.de.';
  });
})();
