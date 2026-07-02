# Zicer Mobil 🏀

MVP landing sajt za iznajmljivanje mobilne arkadne košarke (po uzoru na hoopdallas.com), prilagođen srpskom tržištu.

## Cilj
Testirati da li postoji interesovanje za iznajmljivanje — meri se preko poslatih upita (forma, WhatsApp, Viber, poziv).

## Struktura
- `index.html` — sadržaj i sekcije sajta
- `styles.css` — dizajn
- `script.js` — meni, forma i kontakt dugmad

## Stanje
- ✅ Telefon: +381 69 1718500 (hero, footer, WhatsApp/Viber)
- ✅ Forma šalje na: tantuzi@gmail.com
- ✅ Cene: 200 € do 2h, 300 € do 4h, + gorivo prema udaljenosti
- 🖼️ Fotografije: privremene brendirane SVG ilustracije u `assets/` — zameni pravim slikama
- ⏳ Instagram: „uskoro”

## Šta još da izmeniš kad budeš imao materijal
1. **Fotografije** — zameni SVG-ove svojim slikama, npr:
   ```html
   <img class="shot" src="assets/prikolica.jpg" alt="Zicer Mobil prikolica" />
   ```
2. **Utisci** — zameni placeholder recenzije pravim.
3. **Instagram** — u footeru (`index.html`) zameni „uskoro” pravim linkom.
4. **Kontakt** po potrebi u `script.js` (`CONFIG`) i `index.html`.

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
