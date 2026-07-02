# Zicer Mobil 🏀

MVP landing sajt za iznajmljivanje mobilne arkadne košarke (po uzoru na hoopdallas.com), prilagođen srpskom tržištu.

## Cilj
Testirati da li postoji interesovanje za iznajmljivanje — meri se preko poslatih upita (forma, WhatsApp, Viber, poziv).

## Struktura
- `index.html` — sadržaj i sekcije sajta
- `styles.css` — dizajn
- `script.js` — meni, forma i kontakt dugmad

## Šta OBAVEZNO da izmeniš pre objave
1. **Kontakt** u `script.js` (na vrhu, objekat `CONFIG`):
   - `phoneIntl` — tvoj broj u formatu `3816XXXXXXXX` (bez `+` i razmaka)
   - `email` — email na koji stižu upiti
2. **Telefon** u `index.html` — pretraži `tel:+381000000000` i zameni pravim brojem (2 mesta: hero i footer).
3. **Cene** u sekciji „Cene” (`index.html`) — trenutno su okvirne/placeholder.
4. **Fotografije** — zameni sive kvadrate (`media-placeholder`) svojim slikama:
   ```html
   <img src="slike/prikolica.jpg" alt="Zicer Mobil prikolica" />
   ```
5. **Utisci** — zameni placeholder recenzije pravim (kad ih budeš imao).
6. **Instagram / društvene mreže** — linkovi u footeru.

## Kako da vidiš sajt lokalno
Samo otvori `index.html` dvoklikom u browseru. Ili:
```bash
cd zicer-mobil
python3 -m http.server 8000
# pa otvori http://localhost:8000
```

## Kako da objaviš (besplatno)
- **Netlify** (najlakše): prevuci folder `zicer-mobil` na app.netlify.com/drop
- **Vercel** ili **GitHub Pages** takođe rade — sajt je čisto statički.
- Kupi domen (npr. `zicermobil.rs`) i poveži ga.

## Savet za MVP
Napravi Instagram nalog, plati mali oglas (Instagram/Facebook) koji vodi na ovaj sajt i broj upita ti je pravi pokazatelj tražnje pre nego što uložiš u prikolicu i opremu.
