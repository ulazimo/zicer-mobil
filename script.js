// ===== ZICER MOBIL — script =====

// --- KONFIGURACIJA: zameni ove vrednosti svojima ---
const CONFIG = {
  // Broj telefona u međunarodnom formatu bez + i bez razmaka (za WhatsApp/Viber)
  phoneIntl: "381691718500",
  // Email na koji stiže upit iz forme (fallback ako Web3Forms ključ nije postavljen)
  email: "tantuzi@gmail.com",
  // Web3Forms access key — besplatno na https://web3forms.com (unesi tantuzi@gmail.com).
  // Kad ubaciš ključ ovde, forma šalje mejl DIREKTNO, bez otvaranja mejl klijenta.
  // Ostavi prazno ("") da forma privremeno koristi mejl klijent.
  web3formsKey: "05d5f677-0506-4c7a-b8fc-c0d03fa9251b",
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

// Slanje forme
const form = document.getElementById("bookingForm");
const statusEl = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

function setStatus(msg, type) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.className = "form-status" + (type ? " " + type : "");
}

// Fallback: otvori mejl klijent sa popunjenom porukom
function sendViaMailto() {
  const subject = encodeURIComponent("Rezervacija — Zicer Mobil");
  const body = encodeURIComponent(buildMessage());
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  // Honeypot: ako je "botcheck" popunjen, to je bot — tiho odustani
  if (form.elements["botcheck"] && form.elements["botcheck"].checked) return;

  // Ako Web3Forms ključ nije postavljen, koristi mejl klijent
  if (!CONFIG.web3formsKey) {
    sendViaMailto();
    return;
  }

  const val = (name) => (form.elements[name] ? form.elements[name].value.trim() : "");
  const payload = {
    access_key: CONFIG.web3formsKey,
    subject: "Nova rezervacija — Zicer Mobil",
    from_name: "Zicer Mobil sajt",
    Ime: val("ime"),
    Telefon: val("telefon"),
    Datum: val("datum"),
    "Tip događaja": val("tip"),
    Lokacija: val("lokacija"),
    Poruka: val("poruka"),
  };

  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = "Šaljem...";
  setStatus("", "");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      form.reset();
      setStatus("✅ Hvala! Upit je poslat — javljamo se uskoro.", "ok");
    } else {
      throw new Error(data.message || "greška");
    }
  } catch (err) {
    // Ako slanje ne uspe, ponudi mejl klijent kao rezervu
    setStatus("Slanje nije uspelo. Otvaram mejl kao rezervu...", "err");
    sendViaMailto();
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
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
