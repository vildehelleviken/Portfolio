# Din portefølje — hurtigstart

Dette er en enkel nettside bygget med bare HTML og CSS (ingen kode du trenger
å "kjøre" — bare tekstfiler nettleseren viser fram). Du trenger ikke
programmeringserfaring for å bruke den, bare vilje til å redigere tekst.

## Filene

- `index.html` — forsiden med prosjektoversikten
- `om.html` — om-siden
- `prosjekt-1.html` til `prosjekt-4.html` — én side per prosjekt
- `style.css` — alt av design (farger, fonter, layout) — trenger du normalt ikke røre
- `bilder/` — mappe hvor bildene dine skal ligge

## 1. Se siden mens du jobber

Dobbeltklikk på `index.html` — den åpner seg i nettleseren din. Endre en
tekstfil, lagre, og last siden på nytt i nettleseren (Ctrl/Cmd + R) for å se
endringen.

## 2. Bytt ut tekst

Åpne en HTML-fil i et vanlig tekstredigeringsprogram (f.eks. Notepad,
TextEdit, eller gjerne noe litt bedre som VS Code — gratis). Alt du trenger å
gjøre er å bytte ut plassholdertekst som `Ditt Navn`, `Prosjektnavn 1`,
`din@epost.no` osv. med din egen informasjon. Du trenger ikke røre noe med
`<`-tegn rundt seg.

## 3. Legg til bilder

1. Legg bildefilene dine i mappen `bilder/`
2. I HTML-filen, finn linjen som ser slik ut:
   `<img src="bilder/prosjekt-1-hero.jpg" alt="...">`
3. Bytt ut `prosjekt-1-hero.jpg` med det faktiske filnavnet ditt

Tips: komprimer store bilder før du laster dem opp (f.eks. med
squoosh.app), så laster siden raskere.

## 4. Legg til et nytt prosjekt

1. Kopier `prosjekt-1.html` og gi kopien et nytt navn, f.eks. `prosjekt-5.html`
2. Åpne den nye filen og bytt ut tekst og bilder
3. Åpne `index.html`, kopier ett av kortene i `<div class="project-grid">`,
   lim det inn som et nytt kort, og pek `href` til din nye fil
   (f.eks. `href="prosjekt-5.html"`)
4. Husk å legge den nye siden til i undermenyen i sidebaren — den ligger i
   alle seks HTML-filer (se punkt 6 under)

## 5. Bildeseksjonen på en prosjektside

Hver prosjektside starter med ett stort bilde (samme som vises på
forsiden), så tittel og informasjon (typologi, sted, år osv.), og til slutt
selve bildeseksjonen. Alle bilder i bildeseksjonen holder samme bredde og
varierer kun i høyden — det gir en ryddig, gjenkjennelig struktur.

Du har tre byggeklosser du fritt kan kombinere og gjenta i den rekkefølgen
du vil:

- **Enkeltbilde i full bredde** — `<figure class="gallery-figure">` med et
  bilde og en `<figcaption>` (bildetekst)
- **To bilder side ved side** — pakk to `gallery-figure` inn i en
  `<div class="gallery-row">`
- **Bilde med lengre beskrivende tekst** — samme som enkeltbilde, men legg
  til en `<p class="gallery-description">` etter bildeteksten

`prosjekt-1.html` (og de tre andre) har alt dette som eksempler du kan
kopiere, bytte ut, eller slette det du ikke trenger.

## 6. Om-siden

`om.html` er delt inn i seksjoner du kan redigere hver for seg:

- **Intro**: portrettbilde til venstre (`bilder/om-portrett.jpg`), navn,
  rolle og en kort beskrivende tekst til høyre
- **Personalia**: født, bosted, e-post, telefon
- **Utdanning** og **Erfaring**: hvert punkt er en `.timeline-item` med dato
  til venstre og tittel/underoverskrift til høyre. Under Erfaring kan du i
  tillegg legge til en lengre `.timeline-description` for hver rolle.
  Dupliser en `.timeline-item` for hvert nytt punkt.
- **Programvare** og **Språk**: enkel tekst under hver overskrift

## 7. Publiser siden gratis (ingen kode nødvendig)

Enkleste metode — **Netlify Drop**:

1. Gå til https://app.netlify.com/drop
2. Dra hele denne mappen (`portfolio`) inn i nettleservinduet
3. Ferdig — du får en gratis lenke med en gang (du kan senere koble på ditt
   eget domene under Site settings → Domain management)

Alternativ — **GitHub Pages** (litt mer oppsett, men gratis og fint hvis du
vil lære Git etter hvert): last opp mappen til et GitHub-repo og aktiver
Pages i repo-innstillingene.

## Om designet

Design er inspirert av tegningsark/blueprint-konvensjoner fra arkitektfaget:
en tynn "arkramme" rundt siden, prosjektene nummerert som tegningssett
(A—01, A—02 …), og en tittelblokk under hvert bilde. Fargene er varmt papir,
nesten-svart tekst og en dempet blueprint-blå aksentfarge. Fontene er Space
Grotesk (overskrifter/navigasjon) og Inter (brødtekst), begge gratis via
Google Fonts.
