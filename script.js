// ===== ZICER MOBIL — script =====

// --- KONFIGURACIJA: zameni ove vrednosti svojima ---
const CONFIG = {
  // Broj telefona u međunarodnom formatu bez + i bez razmaka (za WhatsApp/Viber)
  phoneIntl: "381691718500",
  // Email na koji stiže upit iz forme
  email: "tantuzi@gmail.com",
};
// ---------------------------------------------------

// Mobilni meni
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Godina u footeru
document.getElementById("year").textContent = new Date().getFullYear();

// Sastavi tekst poruke iz forme
function buildMessage() {
  const f = document.getElementById("bookingForm");
  const val = (name) => (f.elements[name] ? f.elements[name].value.trim() : "");
  const lines = [
    "Novi upit — Zicer Mobil",
    "",
    "Ime: " + (val("ime") || "-"),
    "Telefon: " + (val("telefon") || "-"),
    "Datum: " + (val("datum") || "-"),
    "Tip događaja: " + (val("tip") || "-"),
    "Lokacija: " + (val("lokacija") || "-"),
    "Poruka: " + (val("poruka") || "-"),
  ];
  return lines.join("\n");
}

// Slanje forme -> otvara email klijent sa popunjenom porukom
const form = document.getElementById("bookingForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const subject = encodeURIComponent("Rezervacija — Zicer Mobil");
  const body = encodeURIComponent(buildMessage());
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
});

// WhatsApp / Viber dugmad -> prosleđuju popunjenu poruku
function updateContactLinks() {
  const text = encodeURIComponent(buildMessage());
  const wa = document.getElementById("waBtn");
  const viber = document.getElementById("viberBtn");
  if (wa) wa.href = `https://wa.me/${CONFIG.phoneIntl}?text=${text}`;
  if (viber) viber.href = `viber://chat?number=%2B${CONFIG.phoneIntl}`;
}
// Ažuriraj linkove pri svakom kliku na dugmad (da uhvati unete podatke)
["waBtn", "viberBtn"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", updateContactLinks);
});
updateContactLinks();
