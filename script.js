const colori = ["#e72f72", "#caff1d", "#f490ff"];
let i = 0;

document.addEventListener("DOMContentLoaded", () => {
  const novit = document.getElementById("novit");
  if (!novit) return;

  document.body.addEventListener("click", () => {
    i = (i + 1) % colori.length;
    novit.style.setProperty('--stellina-colore', colori[i]);
  });
});

// ── Hamburger menu toggle ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hamburger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nav = btn.closest('.navbar').querySelector('nav');
      if (nav) {
        nav.classList.toggle('aperto');
        btn.setAttribute('aria-expanded', nav.classList.contains('aperto'));
        btn.textContent = nav.classList.contains('aperto') ? '✕' : '☰';
      }
    });
  });
  // Close menu when a link inside is clicked
  document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = link.closest('nav');
      if (nav) {
        nav.classList.remove('aperto');
        const btn = nav.closest('.navbar').querySelector('.hamburger');
        if (btn) { btn.textContent = '☰'; btn.setAttribute('aria-expanded', 'false'); }
      }
    });
  });
});



// Lista immagini disponibili per la galleria agendina
const immaginiAgendina = [
  'immagini/agendina1.jpg',
  'immagini/agendina1b.jpg',
  'immagini/agendina1c.jpg'
];

let indiceCorrente = 0;

// Aspetta che il DOM sia pronto
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('foto-agendina');
  const btnDestra = document.querySelector('.freccia.destra');
  const btnSinistra = document.querySelector('.freccia.sinistra');

  if (img && btnDestra && btnSinistra) {
    // Vai avanti
    btnDestra.addEventListener('click', () => {
      indiceCorrente = (indiceCorrente + 1) % immaginiAgendina.length;
      img.src = immaginiAgendina[indiceCorrente];
    });

    // Vai indietro
    btnSinistra.addEventListener('click', () => {
      indiceCorrente = (indiceCorrente - 1 + immaginiAgendina.length) % immaginiAgendina.length;
      img.src = immaginiAgendina[indiceCorrente];
    });
  }
});



//per slides
// Lista immagini nella cartella "immagini/"
const immagini = [
  "pptafrocubanismi.jpg",
  "pptbeige.jpg",
  "pptByron.jpg",
  "pptC.jpg",
  "pptfuxia.jpg",
  "pptgiallo.jpg",
  "pptincest.jpg",
  "pptkids.jpg",
  "pptnegro.jpg",
  "pptsynon.jpg",
  "ppttrans.jpg",
  "pptword.jpg"
];

const slideshow = document.getElementById("slideshow-img");
let index = 0;

// Cambia immagine ogni 300ms
setInterval(() => {
  index = (index + 1) % immagini.length;
  slideshow.src = "immagini/" + immagini[index];
}, 200);
