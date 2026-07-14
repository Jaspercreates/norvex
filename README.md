# Norvex

Website für Norvex — ein Webstudio aus Bremerhaven, das Websites für lokale
Unternehmen jeder Branche baut.

Statische Website ohne Build-Schritt: reines HTML, CSS und Vanilla-JS.

## Struktur

- `index.html` — Startseite (Header, Hero, Pakete, Ablauf, Über uns, Kontakt, Footer)
- `impressum.html` — Platzhalter-Impressum (rechtliche Angaben noch offen)
- `css/style.css` — Design-System (Dark Theme, Cyan/Violet Neon-Glow)
- `js/main.js` — Mobiles Menü, Kontaktformular

## Lokal ansehen

Da es sich um eine statische Seite handelt, reicht jeder einfache HTTP-Server, z. B.:

```bash
npx serve .
```

oder das mitgelieferte PowerShell-Skript:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/serve.ps1 -Port 8080
```

Danach `http://localhost:8080` öffnen.

## Platzhalterdaten

Folgende Angaben sind aktuell **Platzhalter** und müssen vor dem echten Launch
ersetzt werden:

- Telefonnummer: `0471 000 0000`
- Standort: nur „Bremerhaven“, keine Straße
- Impressum (`impressum.html`): vollständig offen, siehe Hinweis auf der Seite
- Datenschutzerklärung (`datenschutz.html`): Verantwortlicher-Angaben offen

Kontakt-E-Mail (`info@norvex.studio`) ist bereits real (Weiterleitung eingerichtet).

## Deployment

Die Seite ist als statisches Projekt für Vercel geeignet (kein Framework, kein Build-Command nötig).
