# Norvex

Website für Norvex — ein Webstudio aus Bremerhaven, das Websites für lokale
Unternehmen jeder Branche baut.

Statische Website ohne Build-Schritt: reines HTML, CSS und Vanilla-JS.

## Struktur

- `index.html` — Startseite (Header, Hero, Pakete, Ablauf, Referenzen, Über uns, Kontakt, Footer)
- `impressum.html` — Impressum gemäß § 5 TMG
- `datenschutz.html` — Datenschutzerklärung
- `css/style.css` — Design-System (Dark Theme, Cyan/Violet Neon-Glow)
- `js/main.js` — Mobiles Menü, Kontaktformular, Custom Cursor

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

## Kontaktdaten

E-Mail, Telefon und die Anschrift in Impressum/Datenschutzerklärung sind echte Daten.
Der "Standort" im öffentlichen Kontaktbereich zeigt bewusst nur „Bremerhaven“ ohne
Straße — die vollständige Anschrift steht ausschließlich dort, wo sie gesetzlich
vorgeschrieben ist (Impressum, Datenschutzerklärung).

Offen für den echten Launch: Gewerbeanmeldung final abschließen, ggf. USt-IdNr./
Handelsregisterangaben im Impressum ergänzen, Datenschutzerklärung rechtlich
prüfen lassen, Referenzen-Sektion mit echten Projekten befüllen.

## Deployment

Die Seite ist als statisches Projekt für Vercel geeignet (kein Framework, kein Build-Command nötig).
