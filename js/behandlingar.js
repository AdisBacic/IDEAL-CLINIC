/**
 * Treatment page logic for Ideal Clinic.
 * Data-driven: each treatment is a plain object, and a single render function populates the page.
 */

// ─── Treatment click handler (works on index + priser pages) ─────────────────
document.querySelectorAll('.behandlingsvarde').forEach(function(el) {
  el.addEventListener('click', function() {
    window.location.href = 'behandlingar.html?treatment=' + this.textContent;
  });
});

// ─── Treatment data ──────────────────────────────────────────────────────────
var treatments = {

  'Hårborttagning': {
    image: './images/Laser.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Hårborttagning',
    infoTitle: 'Hårborttagning',
    subtitle: 'Hårborttagning på Ideal Clinic',
    intro: 'Hårborttagning är en vanligt förekommande estetisk behandling som många människor väljer att genomgå för att bli av med oönskade hårväxt på olika delar av kroppen. På Ideal Clinic erbjuder vi hårborttagning med diodlaser, som är den snabbaste och mest effektiva metoden för permanent hårborttagning. Diodlaser används för att eliminera hårväxt för gott genom att skickar intensivt pulserat ljus till hårsäckarna. Diodlaser är en skonsam metod som är mindre smärtsam än andra traditionella hårborttagningsmetoder, tack vare ett kylt munstycke som kyler ner huden till hela -7 grader under behandlingen. På Ideal Clinic använder vi den mest kraftfulla maskinen på marknaden, Sapphire diodlaser, som ger marknadens bästa resultat och är den snabbaste vägen till att bli hårfri. För att uppnå permanent hårborttagning krävs vanligtvis flera behandlingar, eftersom bara en viss procent av hårstråna är i aktiv växtfas vid varje tillfälle. De hårstrån som förstörs vid hårborttagningsbehandlingen faller av efter några veckor, men nya strån som varit i vilofas växer upp efter ett par månader och det är då det är dags för en ny behandling.',
    sections: [
      { heading: 'Vad händer under en behandling med permanent hårborttagning med diodlaser?', text: 'För att permanent ta bort hår med diodlaser, lägger man på en kall gel på huden och belyser den med synligt intensivt pulserat ljus. Ljusblixtarna vid behandlingen kan ibland kännas som en liten stöt, men behandlingen går snabbt och är inte särskilt smärtsam. Ibland kan man se en lätt hudrodnad efter behandlingen, men oftast syns det ingenting. Vi flyttar ljusprisman snabbt över hela det område där du önskar ta bort oönskad hårväxt. Behandlingen känns väldigt lite och är nära på smärtfri.' },
    ],
    price: 'Från 180kr',
    funFact: 'Behandlingen utförs med marknadsledande Sapphire diodlaser för en skonsam och effektiv hårborttagning',
    duration: '10-150 minuter',
    faq: [
      { q: 'Får du raka håret före behandlingen?', a: 'Ja, du bör raka håret 1-2 dagar innan du gör en hårborttagning med diodlaser. Däremot bör du inte plocka bort hårstråna med pincett eller dra ut dem med tråd eller liknande, eftersom själva hårroten måste finnas kvar inne i huden för att behandlingen ska fungera. Kvinnor bör inte raka sitt ansikte inför en behandling.' },
      { q: 'Kan alla hårstrån behandlas?', a: 'Nej, hårborttagning fungerar inte på ljusa eller väldigt tunna hårstrån. Vid en konsultation kan vi bedöma om behandlingen fungerar för dig. Vid osäkra fall kan du också göra en liten provbehandling.' },
      { q: 'Kan alla göra permanent hårborttagning?', a: 'Nej, om du har mörk hud eller är väldigt solbränd kan du inte göra hårborttagning. En tumregel är att det ska vara en tydlig färgskillnad mellan hårstråna som du vill ta bort och den omgivande huden.' },
      { q: 'Hur många behandlingar behövs?', a: 'Alla hårsäckar har inte hårstrå i sig. Man säger att de har olika växtfaser, de som har hårstrå är i växtfas, de som saknar hårstrå ligger i vilofas. Det är bara 20-30% av alla hårstrån som är i växtfas samtidigt. Ljuset påverkar bara hårsäcken när den är i växtfas, därför behövs det mer än en behandling.' },
      { q: 'Vi behandlar många olika områden på kroppen', a: 'Vi behandlar många olika områden på kroppen, till exempel ansikte, armhålor, bikinilinje, ben och rygg på både kvinnor och män. Ja, i stort sett hela kroppen kan behandlas. Ljuset passerar genom huden till hårsäcken där hårroten förstörs. Behandlingen tar säkerligen bort hundratals hårstrån på bara någon sekund.' },
      { q: 'Hur lång tid tar behandlingen?', a: 'Stora ytor som armar och ben kan behandlas snabbt. Hela ben eller armar behandlas på 30-60 minuter. Ansiktsregionen som överläpp och haka behandlas på bara ett par minuter.' },
      { q: 'Försvinner alla hårstrån direkt?', a: 'En del hårstrån faller bort direkt, en del hårstrån faller bort under de kommande veckorna. Du bör inte vaxa eller plocka hårstrån före behandling med diodlaser. Däremot kan du raka eller klippa ner hårstråna så att de är korta där du har hårväxt. Efter 8-10 behandlingar är du oftast av med den mesta hårväxten på ett område.' },
      { q: 'Vilka typer av hår kan behandlas?', a: 'Hårborttagning fungerar på alla hårstrån som är mörka och innehåller pigment så länge huden inte är för mörk. Du bör inte vara alltför solbränd vid hårborttagning och det finns en rad läkemedel som du inte får ta när du gör behandling med diodlaser. Vita hårstrån går oftast inte att ta bort.' },
      { q: 'Hygien?', a: 'Viktigt att du är nyduschad och fräsch inför din behandling.' },
      { q: 'Behandlar ni alla delar på kroppen?', a: 'Vi behandlar i stort sett hela kroppen med vissa undantag där det kan finnas slemhinnor.' },
      { q: 'Vilka maskiner använder ni vid hårborttagning?', a: 'Vi använder Sapphire diodlaser vid behandling. Sapphire är den senaste lasertekniken och är marknadens kraftfullaste lasermaskin med 2400W och ger mellan 10Hz-15Hz per sekund i uteffekt vilken ingen annan diodlaser når upp till. Det är också det som avgör hur många behandlingar du behöver göra. Stora ytor kan behandlas snabbt och skonsamt vilket innebär att du får en effektiv och snabb behandling med mycket goda dokumenterade resultat.' },
      { q: 'Hur ofta ska behandlingarna ske?', a: 'Vanligtvis sker behandlingarna med 1-2 månaders mellanrum, beroende på lokalisation och hur snabb hårväxt du har, vilket är individuellt och dessutom helt beroende på vilken del på kroppen det gäller. I armhålor, bikinilinje och underben samt ansikte så kommer håret tillbaka fortare än på andra ställen. En del patienter har så snabb och intensiv hårväxt att du kan göra behandling var tredje vecka, hos andra kan ett intervall på 6-8 veckor vara bäst. Det är dags att behandla igen när du upplever att tillräckligt med nya hårstrån kommit upp igen. Har du bara fått ett litet antal nya hårstrån är det bättre att vänta något.' },
      { q: 'Vilken effekt får jag av behandlingen?', a: 'Hur många behandlingar som krävs är beroende av en mängd faktorer såsom färg på hårstrån (mörka hår svarar bättre än ljusa och grå), hudfärg (ljusare hud är lättare att behandla än mörkare hud), grovlek på hårstrån (tjockare hårstrån är lättare att behandla än tunna). Tidigare behandling med plockning och kan påverka behandlingsresultatet.' },
      { q: 'Gör det ont?', a: 'Ljuset kommer i snabba impulser så att du bara känner att det hettar till i huden. Det är en stickande känsla men inte så att det gör ont, även om vissa områden kan vara känsligare än andra.' },
      { q: 'Är resultatet permanent?', a: 'Behandlingar för att ta bort oönskad hårväxt har utförts i över 25 år. Under denna långa tid har det i extremt få fall sett hårväxten komma tillbaka. För att kallas permanent måste en förändring enligt medicinsk terminologi kunna observeras i minst 30 år, och så länge har inte laserborttagning av hår utförts i världen. Men många kallar oftast laserborttagning av hår för permanent eftersom man har sett att hårväxten inte har återkommit under en så lång tid. Särskilt om man jämför med andra behandlingar som rakning, vaxning och plockning av hårstrån är laserborttagning av hår permanent.' },
      { q: 'Vilka komplikationer kan du få?', a: 'Komplikationer är mycket sällsynta. Rodnad, blåsor och lätt klåda kan ibland uppstå, men brukar försvinna inom några dagar. I sällsynta fall kan huden tillfälligt bli ljusare eller mörkare (hyperpigmenterad). Denna hyperpigmentering uppstår hos mindre än 1% av våra kunder och är tillfällig och försvinner efter en eller några månader.' },
      { q: 'Vad ska du tänka på före behandlingen?', a: 'Du ska inte sola 1 vecka innan och 1 vecka efter en laserbehandling med Sapphire diodlaser. Vid behandling i ansiktet bör du ha några dagars skäggväxt så att håren syns. Du ska inte använda solningsspray eller brun utan sol krämer innan din behandling. Du ska inte använda starka kortisonkrämer före eller efter behandlingen. Om du har brännmärken, skrubbsår eller blåsor i det område du vill behandla kan vi inte behandla där.' },
      { q: 'Vad ska du tänka på efter behandlingen?', a: 'Du ska undvika att sola och använda solarium, inte vara i starkt solljus eller i varmt vatten, bada i pool eller hav samt träna på 48 timmar efter behandlingen. Du ska också undvika starka krämer och smink. Du ska skydda behandlingsområdet mot sol genom att använda solskyddskräm med minst faktor 30.' },
      { q: 'Kan man ta sol innan behandling?', a: 'Nej, du bör inte sola 1 vecka innan behandlingen med diodlaser. Eftersom huden inte får vara solbränd och det ska vara en tydlig färgskillnad mellan hårstråna och huden.' },
      { q: 'Kan man träna efter behandlingen?', a: 'Vi rekommenderar att du undviker träning och andra aktiviteter som gör att du svettas i 48 timmar efter behandlingen. Svettning kan irritera huden och eventuellt orsaka infektioner.' },
      { q: 'Hur länge varar behandlingseffekten?', a: 'Efter att du har genomgått hela behandlingsprogrammet så kan håret vara borta för alltid. Men om du har hormonell obalans eller kroppen förändras av någon annan anledning så kan nya hårsäckar bildas. Därför kan man behöva göra någon enstaka behandling igen efter några år.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Svettbehandling': {
    image: './images/HårbortaggningNYBILDZ.png',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Svettbehandling',
    infoTitle: 'Svettbehandling',
    subtitle: 'Svettbehandling på Ideal Clinic',
    intro: 'Extrem svettning (Hyperhidros) drabbar en liten del av befolkningen, ungefär 2%. Det brukar börja under puberteten eller tidig vuxenålder och i ungefär hälften av fallen är det medfött.',
    sections: [
      { heading: 'Behandling av Hyperhidros', text: 'Hyperhidros orsakas av överaktivitet hos svettkörtlarna, vanligtvis i händer, fötter och armhålor, men också i andra begränsade områden på kroppen. Tillståndet innebär en överdriven svettning som är mycket kraftig och har ingen naturlig funktion i kroppen. Svettningarna kan leda till att personen som lider av det har en försämrad livskvalitet och ibland undviker vardagssituationer, arbete och sociala kontakter medvetet. De områden på kroppen som vanligtvis påverkas är armhålor, handflator, fötter och pannan där svettbehandling med injektioner har varit den mest effektiva metoden. Med hjälp av injektioner kan detta slags svettning behandlas effektivt. Behandlingen blockerar svettkörtlarna i cirka 6-7 månader, därefter behövs en ny behandling. Effekten förlängs efter varje behandling eftersom svettkörtlarna inte återfår sin fulla aktivitet mellan varje injektion. Resultatet är mycket säkert och ger inga allvarliga biverkningar. Svettbehandling med injektioner har inneburit en stor revolution för patienter med hyperhidros. Behandlingen ges i form av injektioner under huden på det drabbade området. När händerna behandlas ger vi alltid bedövning. För andra områden är bedövning mycket sällan nödvändigt. Ideal Clinic har en eller flera behandlare som är Certifierade för estetiska injektioner. Certifieringen utfärdas av Estetiska Injektionsrådet och utgör en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare som erbjuder dig som patient möjlighet att göra upplysta och trygga val. Kliniker som använder loggan "Certifierad för estetisk injicering" har personal som har gått igenom denna examinationen. Alla som har rätt medicinsk utbildning och arbetar med estetiska injektionsbehandlingar kan certifiera sig och förväntas följa det etiska kontraktet som de förbinder sig till vid certifieringen.' },
    ],
    price: 'Från 4500kr',
    funFact: 'Svettbehandling med injektioner är det vanligaste tillvägagångssättet att behandla överdriven svettning',
    duration: '40 minuter',
    faq: [
      { q: 'Vad bör du ta hänsyn till innan en svettbehandling?', a: 'Du bör inte ha utslag eller finnar på det område som ska behandlas.<li>Du skall inte ha någon pågående herpesinfektion i kroppen eller på det område som ska behandlas.<li>Du skall inte vara gravid eller amma.<li>Om du har tagit mediciner som Treo eller Ipren eller liknande, kan du lättare få blåmärken vid det område som ska behandlas.<li>För att minska smärta kan du köpa Emla-salva på apoteket och applicera ett tjockt lager på det område som ska behandlas ca 1 timme innan behandlingen.<li>Du bör inte träna samma dag som behandlingen utförs.' },
      { q: 'Vad bör du ta hänsyn till efter efter svettbehandling?', a: 'Efter en injektionsbehandling är det viktigt att inte röra vid det behandlade området under 6 timmar.<br><br> <strong> Följande punkter är också viktiga att tänka på efter en svettbehandling: </strong><br><br> <li>Du bör inte utföra någon annan typ av behandling på det aktuella området under 1 vecka.<li> Du ska inte träna samma dag som behandlingen.<li> Du ska undvika bastu och solarium under 1 vecka. <li>Om du vill veta mer eller har fler frågor kan du alltid boka en tid för en konsultation med någon av våra behandlare vilket alltid är kostnadsfritt.' },
      { q: 'När bör du märka resultat efter en svettbehandling?', a: 'Du kommer att känna en effekt av behandlingen redan efter några få dagar, men för vissa kan det ta upp till 2 veckor för fullt resultat. Svettningar under armhålorna kommer gradvis att minska i en naturlig process.' },
      { q: 'Hur länge håller botox i armhålorna?', a: 'Resultaten håller normalt i sig i upp till 4-6 månader, men Botox i armhålorna kan ofta vara längre hållbar hos vissa personer och kan hålla upp till 9-12 månader.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'Ärrbehandling': {
    image: './images/Micro needling klar.jpg',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Ärrbehandling',
    infoTitle: 'Ärrbehandling',
    subtitle: 'Ärrbehandling (Microneedling) på Ideal Clinic',
    intro: 'Microneedling, även känt som mikronålning, är en av de mest effektiva behandlingarna för att minska synligheten av acneärr och andra ärr. Behandlingen utförs med en nål-försedd penna som innehåller hundratals mikronålar. När nålarna penetrerar huden skapas tusentals mikrokanaler djupt ner i huden. Varje punkt stimulerar till en ökning av kollagen och elasticitet, vilket resulterar i en jämnare och slätare hud med mindre synliga ärr. Microneedling ger utmärkta resultat i ansiktet, speciellt vid behandling av acneärr.',
    sections: [
      { heading: 'Vad är syftet med behandlingen?', text: 'Syftet med behandlingen är att orsaka en kontrollerad skada på huden, som i sin tur startar en läkningsprocess som leder till ett gynnsamt hudföryngringsresultat. Genom mikrokanalerna som skapas under behandlingen, kan bioaktiva substanser som innehåller hyaluronsyra och en vitamin-cocktail tränga in djupt i huden och ge den näring som den behöver. Detta ökar upptaget av aktiva ingredienser och kan öka effekten av hudvårdsprodukter upp till 50%, jämfört med den vanliga 0,3% som normalt når de djupare hudlagren.' },
      { heading: '', text: 'För att behandla fördjupningar och gropar i acneärr, kan Microneedling kombineras med Skinbooster för att lyfta upp dessa områden. I dessa fall kan vi använda en kombination av tunnflytande Skinboosters, såsom Juvederm Volite eller Restylane Vital. Om acneärr är milda och mindre framträdande, kan kemisk peeling vara ett lämpligt och prisvärt alternativ.' },
      { heading: '', text: 'För att få ut så mycket som möjligt av en behandling med microneedling, är det viktigt att du tillför serum till huden som innehåller en hög koncentration av hyaluronsyra, samt vitaminer och antioxidanter. Detta är nödvändigt för att huden ska kunna dra full nytta av de mikrokanaler som skapats under behandlingen, eftersom huden lättare kan ta upp de aktiva ingredienserna. På Ideal Clinic använder vi oss av serumet Skinko, som innehåller marknadens högsta koncentration av hyaluronsyra - det viktigaste ämnet som ett microneedling-serum ska innehålla. Hyaluronsyra är det mest värdefulla ämnet i ett serum, då det hjälper till att återfukta och ge näring till huden. Efter behandlingen, får du även en återfuktande ansiktsmask som lugnar ner huden, för att ytterligare hjälpa huden att återhämta sig. Vi på Ideal Clinic har en lång erfarenhet av behandling av acneärr och vi kan hjälpa dig att välja den bästa behandlingen för dina ärr vid en konsultation.' },
    ],
    price: 'Från 500kr',
    funFact: 'Våra specialister har en lång erfarenhet av behandling av acneärr och kan hjälpa dig att välja den bästa behandlingen för dina ärr vid en konsultation.',
    duration: 'Behandlingen tar mellan 20-40 minuter beroende på området.',
    faq: [
      { q: 'Vad är microneedling?', a: 'Microneedling är en behandling som använder mikronålar för att skapa mikrokanaler i huden. Nåltätheten och den genomtänkta konstruktionen av nålarnas diameter gör att behandlingen är skonsam och ger en god penetration och jämn tryckfördelning. Vid behandling av acneärr gör vi oftast 3 till 5 behandlingar med en månads mellanrum, vilket ger ökade resultat med en kort återhämtningstid. Efter behandlingen kan du ha en lätt rodnad och svullnad i huden, men det räcker med att vara hemma på behandlingsdagen för att rodnaden ska minska.' },
      { q: 'Vilka områden kan behandlas?', a: 'Microneedling kan användas på flera olika områden såsom:<ul> <li> Ansikte </li> <li>Dekolletage </li> <li>Kropp</li> </ul>' },
      { q: 'Vilka får inte utföra microneedling?', a: 'Personer som tar Roaccutan eller andra acnemediciner.<li>Gravida eller ammande.<li>Personer med öppna eller infekterade sår.<li>Diabetiker.<li>Personer med kronisk hudsjukdom, nervskada, eller personer som har strålbehandlats eller genomgått ansiktskirurgi eller laserbehandling under det senaste året bör också undvika microneedling.' },
      { q: 'Hur lång tid tar behandlingen?', a: 'Tiden varierar beroende på område, behandlingen kan ta mellan 20-60 minuter.' },
      { q: 'Acneärr och acnemärken?', a: 'Det är svårt att få bort djupa acneärr helt och hållet eftersom ärrvävnad är permanent. Däremot kan du få en stor förbättring. Röda och bruna fläckar kan behandlas med kemisk peeling och microneedling. Men om du har mild acne så kan du utföra kemisk peeling. Det rekommenderas att du väntar med behandling av ärr tills du blir av med acnen, för att undvika nya ärr och acne. Annars så kan du utföra kemisk peeling när du har mild acne.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Retinol Peeling': {
    image: 'images/acneärrNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Retinol Peeling',
    infoTitle: 'Retinol Peeling',
    subtitle: 'Retinol Peeling på Ideal Clinic',
    intro: 'Retinol Peeling NeoStrata Retinol Peel är en unik peel som innehåller Retinol och volymgivande Aminofill för att förbättra hudens struktur, spänst, ge en jämnare hudton och minska linjer och rynkor. Peelingen är ytlig och kräver minimal återhämtningstid, och passar de flesta hudtyper. Det är en snabb, enkel och effektiv peeling som påbörjas på kliniken och avlägsnas hemma.',
    sections: [
      { heading: 'Så här går det till', text: 'Retinolpeeling från NeoStrata innehåller Vitamin E, Bisabolol, Aminofil, NeoCitriate och 3% Retinol. Aminofil och Retinol gör att huden exfolierar, det vill säga att den flagnar av. Behandlingen utförs på kliniken och avlägsnas av dig själv hemma efter 3-8 timmar. Du kommer inte att känna någon obehag efter appliceringen. Exfolieringsprocessen startar inom 2-4 dagar och pågår vanligtvis i en vecka. Efter exfoliering kommer du att märka förbättringar i hudens struktur, spänst, lyster och hudton.' },
    ],
    price: 'Från 1500kr',
    funFact: 'Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val.',
    duration: 'Behandlingen tar mellan 30-60 minuter beroende på området.',
    faq: [
      { q: 'För vem passar behandlingen?', a: 'Retinol peelingen passar de flesta hudtyper och toner, särskilt:<br>Personer med aktiv acne<br>Personer med orenheter eller ojämn hudton<br>Personer med pigmentförändringar på huden' },
      { q: 'Vilka områden kan behandlas?', a: 'Behandlingen kan utföras på ansikte, hals, dekolletage och handryggar' },
      { q: 'Reducera ålderstecken, aktiv acne, pigmentförändringar och ojämn hudton', a: 'Retinol peeling tar bort gamla hudceller och återställer hudens kvalitet. Den reducerar mindre rynkor, stramar upp huden, reducerar ärr, hudbristningar och acne, minskar porer och dämpar pigmentförändringar och solskador. Det är ett bra alternativ för den som vill åtgärda flera problem på en gång. Ny och friskare hud uppnås genom en effektiv och djupgående behandling med Retinol peeling. Vi applicerar olika lösningar på huden för att avlägsna det yttre döda lagret och stimulera till nybildning av nya celler.' },
      { q: 'Att tänka på efter behandlingen', a: 'Du bör undvik hudvårdsprodukter som innehåller retinoider eller andra exfolierande produkter en vecka innan behandlingen. <li> Du bör inte utsätta de behandlade områdena för solen under 3-4 veckor efter behandlingen.<li>Om du gör flera behandlingar bör du vänta 6-8 veckor mellan varje behandling.<li> Retinol behandlingen kan göras som en enskild behandling.<li>Efter behandlingen kan det uppstå lätt rodnad i några dagar.' },
      { q: 'Behandlar man alla pigmentförändringar på samma sätt?', a: 'Nej, hur man behandlar en pigmentförändring beror på dess djup och typ. Det finns epidermala, dermala eller mixade förändringar, epidermala är lättare att ta bort än dermala. Pigmentförändringar kan också vara intra eller extracellulära.<br>Handryggar: Pigmentfläckar på handryggarna kan också behandlas.<br>Vilken typ av förändring det är kan du få reda på genom ett besök på kliniken, där gör hudterapeuten en bedömning och föreslår vilken metod som är lämplig att ta bort pigmentförändringen.<br>Test behandling: Det kan också vara lämpligt att göra en testbehandling för att se om pigmentfläcken svarar på behandlingen.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Profhilo': {
    image: './images/hello.png',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Profhilo',
    infoTitle: 'Profhilo',
    subtitle: 'Profhilo på Ideal Clinic',
    intro: 'Profhilo är en revolutionerande och innovativ estetisk behandling som riktar sig direkt på slapp hud och fokuserar på att bygga vävnad. PROFHILO® är den första hyaluronsyra-baserade produkten som helt saknar kemiska tvärbindningsmedel (BDDE) och är unik i sin förmåga att återskapa förlorad vävnad.',
    sections: [
      { heading: 'Minskning av slapp hud.', text: 'Den åtstramande effekten är ett resultat av hyaluronsyrans höga molekylvikt som neutraliserar slapp hud och ger en lätt lyftning. PROFHILO® är din nya allierade mot åldrande som ger näring till hudceller och återställer fasthet i huden, med en förlängd hållbarhet. Det är en produkt med mycket god vävnadsintegration, som består av mycket ren kvalitetshyaluronsyra producerad genom biofermentering. På grund av sin höga renhet och frånvaro av tillsatser, inklusive BDDE som många andra fillers innehåller, erbjuder PROFHILO® större säkerhet och därför färre biverkningar. Den patenterade tekniken för PROFHILO® ger en förlängd hållbarhet. Bara fem injektioner krävs för att erbjuda en maximal komfortabel behandling med synliga resultat efter bara två sessioner. 5-punktsbehandling (BAP-teknik).BAP-tekniken (Bio Aesthetic Points), som granskats och utvecklats av IBSA, baseras på fem injektionsställen som särskilt väljs för att minimera riskerna och maximera spridningen av produkten i ansiktet. Faktum är att PROFHILO® är speciellt utformad för behandling av hudens slapphet i malar- och submalarområdena. Det injiceras i det djupa hudlagret. Hybridkombinationen möjliggör återstabilisering av fysiologiska nivåer av endogen hyaluronsyra och förbättring av hudens fukt.' },
      { heading: 'Varför Profhilo?', text: 'PROFHILO är en mycket ren produkt som består av hyaluronsyra som har producerats genom biofermentering. På grund av sin höga renhet och frånvaro av tillsatser erbjuder PROFHILO ökad säkerhet och därmed färre biverkningar. Den patenterade tekniken för PROFHILO återskapar även förlorad vävnad, vilket inte är möjligt med filler eller Skinbooster.' },
      { heading: '', text: 'Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val. Kliniker som använder loggan Certifierad för estetisk injicering har personal som har genomgått denna examination. All personal med rätt medicinsk utbildning som arbetar med estetiska injektions behandlingar kan certifiera sig och förväntas följa det etiska kontrakt som de förbinder sig till vid certifieringen. För mer information besök www.estetiskainjektionsradet.se Är du intresserad av en behandling – eller vill du veta mer? Välkommen att höra av dig till oss på Ideal Clinic!' },
    ],
    price: 'Från 3400kr',
    funFact: 'Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val.',
    duration: '30 Minuter',
    faq: [
      { q: 'För vem är denna behandling lämplig?', a: 'Med åren förlorar vi vävnad och fettdepåer vilket kan göra att du ser trött och äldre ut. Profhilo lämpar sig bäst för dig som har förlorat volym i ansiktet och önskar få tillbaka den ungdomliga fylligheten, spänsten och mer \'liv\' i ansiktet. Behandlingen har en lätt återfuktande effekt som ger lyster. Behandlingen är därför rekommenderad för personer som är runt 30 år eller om du upplever dessa ålderstecken i tidigare ålder.' },
      { q: 'Hur många behandlingar behöver jag?', a: 'Profhilo utförs alltid i kur med flera behandlingar för att ge önskad effekt. Efter den initiala kuren rekommenderar vi att du gör en behandling 2-3 gånger per år.' },
      { q: 'Vad innehåller Profhilo?', a: 'Profhilo består av högkvalitativ hyaluronsyra i ren form. Produkten har inte några tvärbindningstillsatser vilket gör den unikt ren.' },
      { q: 'När kan jag se skillnad?', a: 'Redan efter första behandlingen kan vissa uppleva den föryngrande effekten av Profhilo, dels genom en fylligare vävnad, dels mer spänst. Dessa resultat förstärks redan efter andra behandlingen för att nå maximal effekt efter tredje behandlingen, cirka en vecka efter.' },
      { q: 'Hjälper Profhilo mot torr hud?', a: 'Profhilo har en återfuktande effekt och hjälper din hud att få mer fukt och lyster på ett effektivt sätt. Men om du önskar mer återfuktning så kan Skinbooster vara ett bättre alternativ, detta bör dock diskuteras under en konsultation vilket alltid är kostnadsfritt här på Ideal Clinic.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'Filler': {
    image: './images/ModelNYBILDZ.jpg',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Fillers',
    infoTitle: 'Fillers',
    subtitle: 'Fillers på Ideal Clinic',
    intro: 'Vilka områden kan behandlas med fillers? Fillers kan användas för att förbättra läpparna, kindbenen, och näsan, jämna ut nasolabialvecken och påsar under ögonen, definiera haka och käklinjen, och reducera fina linjer. De kan även användas för att återställa fyllighet och ungdomliga konturer i områden på ansiktet som har förlorat volym på grund av åldrande. Många väljer fillers framför kirurgi för att korrigera en krokig eller sned näsa eftersom de erbjuder en mer kostnadseffektiv och icke-invasiv alternativ. Resultat med fillers är ofta omedelbara, och kan hjälpa dig att uppnå ett ungdomligare och uppfriskat utseende.',
    sections: [
      { heading: 'Vad kan jag behandla med fillers?', text: 'Vi på Ideal Clinic arbetar med bland annat Juvederm, som är det mest framstående märket av fillers som finns på marknaden. Dessa injiceras i valda delar av ansiktet för att fylla ut rynkor, nasolabialvecken, kindbenen, näsan, eller för att fylla ut läpparna. Behandlingen syftar till att strama upp, bygga volym, och göra ansiktet jämnare. Vi strävar alltid efter ett naturligt resultat som gör att du blir ännu vackrare och känner dig ännu mer nöjd med din hud och ditt utseende.' },
      { heading: '', text: 'Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling. Den hyaluronsyra som skapas naturligt i våra kroppar bryts ner på fem dagar, och kroppen producerar därför ständigt ny hyaluronsyra. När vi blir äldre minskar kroppens produktion av syran, vilket leder till att huden tappar volym, lyster och fukt, vilket kan orsaka rynkor, veck och fina linjer. Därför väljer många att injicera fillers för att motverka detta.' },
      { heading: 'Hur går en behandling till?', text: 'Vi börjar alltid behandlingen med att rengöra området som ska behandlas. Därefter injicerar vi fillern med en tunn nål. Du kan känna en stickande känsla och en känsla av spänning i huden under injiceringen. Fillern lyfter därefter upp rynkan eller bygger volym, beroende på vad som önskas, vilket ger ett omedelbart synligt resultat. Om du ska behandla läpparna kan du känna smärta, så vi erbjuder lokalbedövning kostnadsfritt för den som vill ha det.' },
    ],
    price: 'Från 2300kr',
    funFact: 'Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.',
    duration: '30-60 Minuter',
    faq: [
      { q: 'Syftet med behandlingen', a: '<li> Bygga volym </li> <li> Reducera rynkor </li> <li> Skulptera ansiktsformer </li> <li> Kompensera för förlorad vävnad </li>' },
      { q: 'Behandlingsområden', a: '<li> Läppar </li><li> Kinder </li> <li> Näsa </li> <li> Haka </li> <li> Nasolabialveck </li> <li> Under ögonen </li> <li> Marionettlinjer </li>' },
      { q: 'Att tänka på innan behandlingen', a: '<li> Du bör ej vara förkyld eller ha feber </li> <li> Undvik blodförtunnande medel 1 dag innan behandling (ex, ipren, alkohol och omega-3) </li> <li> Avslutat antibiotikakur minst 2 veckor innan. </li> <li> Du ska ej vara gravid eller amma </li>' },
      { q: 'Behandling', a: '<li> Hyaluron syran i våra fillers påminner om den vi har naturligt i våra kroppar. </li> <li> Behandligen har en föryngrande effekt och håller dig fräsch. </li> <li> I genomsnitt håller produkten några veckor upp till 3 månader första gången. </li> <li> Efter 3 behandlingar är det vanligt med en hållbarhet om 12-16 månader. </li><li> Hållbarheten är individuell och vi garanterar ingen hållbarhet </li>' },
      { q: 'Efter behandlingen är det normalt med', a: '<li> Svullnad i upp till 1 vecka. Resultatet kan upplevas ojämnt till svullnaden lägger sig </li> <li> Blåmärken </li> <li> Ömhet </li> <li> Rodnad </li> <li> Man kan känna av produkten vid rörelse i upp till 1-2 månader. </li> <li> I vissa fall huvudväk </li>' },
      { q: 'Att tänka på efter din behandlingen', a: '<li> Peta inte på deet behandlade området kommande 6 timmar </li> <li> Ingen träning på 24 timmar </li> <li> Ej använda smink på behandlat område på 24 timmar efter behandling </li> <li> Inte utsätta hyn för sol/bastu på 1 vecka </li> <li> Drick mycket vatten kommande 4 dagar för bästa resultat. </li>' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'Behandling mot dubbelhaka': {
    image: './images/Fillers.png',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Belkyra',
    infoTitle: 'Behandling mot dubbelhaka',
    subtitle: 'Behandling mot dubbelhaka på Ideal Clinic',
    intro: 'Belkyra (deoxicholsyra) är en injektionsbehandling som reducerar envist och oönskat fett under hakan. Med hjälp av Belkyra kan dubbelhakan försvinna och hakprofilen kan förbättras redan efter en behandling. På Ideal Clinic har vi en eller flera behandlare som är Certifierade av Estetiska Injektionsrådet. Certifieringen är en kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare, och garanterar att våra behandlare har kompetens och erfarenhet inom området. Vi är också sedan 2018 en Juvederm-klinik, vilket innebär att vi är certifierade inom injektionsbehandlingar och att våra behandlare följer etiska regler och riktlinjer.',
    sections: [
      { heading: 'Vad är Belkyra®?', text: 'Belkyra är ett FDA-godkänt läkemedel som används för att eliminera oönskat fett under hakan. Belkyra, som även är godkänt av läkemedelsverket, går under namnet Kybella i USA. Belkyra är en icke-kirurgisk behandling som förstör fettcellerna permanent, och som kan ge en mer markerad haka och en mer symmetrisk ansiktsprofil. Belkyra innehåller deoxicholsyra, vilket är en aktiv substans som finns naturligt i kroppen med uppgift att underlätta nedbrytningen av fett. Deoxicholsyran i Belkyra är av icke-human och icke-animalisk form som inte härstammar från människa eller djur.' },
      { heading: '', text: '' },
      { heading: 'Behandling av överflödigt fett under hakan', text: 'Överflödigt fett under hakan kan uppstå av olika anledningar. De vanligaste orsakerna är ärftliga faktorer, åldrande eller viktuppgång. Trots träning och kost kan det envisa fettet under hakan kvarstå, vilket kan vara psykiskt påfrestande. En behandling med Belkyra är alltid individuellt anpassad och resultatet är permanent.' },
    ],
    price: 'Från 8500kr',
    funFact: 'Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.',
    duration: '40 Minuter',
    faq: [
      { q: 'Hur går behandlingen till?', a: 'Först går vi igenom dina förutsättningar. Liksom alla våra behandlingar börjar vi med en konsultation där vi går igenom dina önskemål, förutsättningar och vilka resultat du kan förvänta dig.' },
      { q: 'Hur lång tid tar behandlingen?', a: 'Behandlingen tar ca 30-40 minuter, beroende på hur stort område som behandlas. Tidsåtgången inkluderar både behandling och bedövning.' },
      { q: 'Gör det ont?', a: 'Eftersom vi alltid ger effektiv bedövning innan behandlingen, upplever de flesta ingen större smärta vid en behandling hos oss. Vissa kan känna ett spänningstillstånd vid injektionen.' },
      { q: 'Hur många behandlingar behöver jag göra?', a: 'Mängden överflödig hud under hakan kan minskas vid varje behandlingstillfälle och resultatet syns redan efter några veckor. Den som vill uppnå ännu mer effekt kan behandlas igen efter cirka 4 veckor. Patienter som behandlats med Belkyra upplever en synlig förbättring av hakprofilen redan efter 1–2 behandlingar. Resultatet är dock individuellt och hur många behandlingar som behövs varierar beroende på exempelvis mängden fett under hakan.' },
      { q: 'Vilka eventuella biverkningar kan uppstå?', a: 'Efter behandlingen kan man få blåmärken vid det behandlade området. Minskad känslighet, smärta och svullnad/vätskeansamling är andra biverkningar som kan uppstå. Dessa effekter är i allmänhet tillfälliga och försvinner vanligtvis av sig själva.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'Skinbooster': {
    image: './images/sunasfixar.jpg',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Skinbooster',
    infoTitle: 'Skinbooster',
    subtitle: 'Skinbooster på Ideal Clinic',
    intro: 'Skinbooster ger djupgående återfuktning, förbättrar hudens kvalitet och ger den en naturlig lyster. Det innehåller en speciell form av hyaluronsyra som är ett naturligt förekommande ämne i kroppen och har förmågan att binda vatten. Behandlingen innebär att hyaluronsyran injiceras i mikrodoser under huden och drar till sig vatten för att ge långvarig återfuktning. Denna behandling syftar till att göra huden mjuk, slät och återfuktad istället för att bygga volym som vanliga fillers gör. Skinbooster innehåller även ett antioxidantmedel som hjälper till att skydda huden mot fria radikaler och förlänger effekten av behandlingen.',
    sections: [],
    price: 'Från 3400kr',
    funFact: 'Hyaluronsyra, som våra skinboosters består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.',
    duration: '30 Minuter',
    faq: [
      { q: 'När bör du börja behandla dig?', a: 'Skinbooster rekommenderas vanligtvis från omkring 23 års ålder, eftersom kroppens egen produktion av hyaluronsyra minskar redan vid den åldern. Generellt så minskar produktionen drastiskt runt 30-årsåldern, vilket kan göra att huden förlorar sin lyster, volym och får en grå ton. Hyaluronsyra är den viktigaste faktorn för att hålla huden ung och glansig. Börja behandlingen så tidigt som möjligt, då rynkor och volymförlust är lättare att behandla när de är "mjuka" än när de har blivit "inrotade".' },
      { q: 'Behandlingsprogram och områden', a: 'Juvederm Volite är den mest avancerade Skinboostern och har en hållbarhet på 9-12 månader. Många väljer att behandla sig en gång per år. Ett vanligt behandlingsprogram med andra varumärken består av tre initiala behandlingar med 2-4 veckors mellanrum och en underhållsbehandling var 6:e månad. Områden som är lämpliga att behandla med Skinbooster är ansikte, hals, dekolletage och handryggar. Finare linjer och rynkor kan också behandlas effektivt med Skinbooster, eftersom det inte bygger volym utan istället fokuserar på återfuktning.' },
      { q: 'När kan jag se resultat?', a: 'Resultatet av en Skinbooster-behandling kan ses redan efter 1 vecka, dels genom att du känner dig mer livad i huden och dels genom en fin och diskret lyster. För att få maximal effekt rekommenderar vi att dricka 2-3 liter vatten de dagarna efter behandlingen, eftersom hyaluronsyra behöver binda vatten de första dagarna. Skinbooster är mycket effektivt mot eksem och är kanske den mest effektiva metoden som finns idag.' },
      { q: 'Fungerar Skinbooster mot eksem?', a: 'Behandlingen minskar eksemen och ger huden en mer \'hudliknande\' färg och lyster på områden där det har funnits eksem. Skinbooster injiceras ytligt i huden, så att produkten hamnar i hudlagret och inte försvinner i djupare lager som muskler.' },
      { q: 'Hur injiceras Skinbooster i huden?', a: 'Skinbooster injiceras ytligt i huden för att säkerställa att produkten hamnar i hudlagret och inte försvinner i djupare lager som muskler. Ibland används en vass nål eller en trubbig kanyl för detta syfte.' },
      { q: 'Kan Skinbooster göras på hals och händer?', a: 'Ja, Skinbooster är en effektiv metod för att förnya huden på hals och händer. Det är lämpligt för personer som har bra vävnad på dessa områden och önskar den återfuktande effekten. Men om du har tappat vävnad på hals och händer, rekommenderar vi istället att använda Profhilo på dessa områden.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'MicroTox': {
    image: './images/sunasfixar.jpg',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'MicroTox',
    infoTitle: 'MicroTox',
    subtitle: 'Microtox på Ideal Clinic',
    intro: 'Microtox är en effektiv behandling för dig som bl.a. önskar påverka hudens åldrande och struktur utan att förlora den naturliga mimiken i ansiktet. Genom att en mindre mängd Botox injiceras i huden kan man reducera rynkor och fina linjer med ett mer naturligt slutresultat än vid traditionella rynkbehandlingar. Till skillnad från de traditionella behandlingarna för rynkor arbetar Microtox på hudens yta för att undvika att påverka ansiktsmimiken, samtidigt som behandlingen verkar lystergivande och ger ett slätare helhetsintryck med hjälp av Hyaluronsyra och vitaminer. Det unika med denna behandling är att man kombinerar Botox med vitaminer och Hyaluronsyra för ett slätare och piggare utseende.',
    sections: [
      { heading: 'Så här går en Microtox-behandling till:', text: 'Konsultation: Som med alla våra behandlingar börjar en Microtox-behandling med en konsultation där vi går igenom dina önskemål, förutsättningar och förväntade resultat.' },
      { heading: '', text: '' },
      { heading: 'Behandling:', text: 'Behandlingen påbörjas genom att vår läkare eller sjuksköterska stämplar huden med en behållare som innehåller botox, hyaluronsyra och vitaminer. Microtox-behållaren har 20 tunna titannålar som är överdragna med 24k guld. Dessa nålar skapar små mikrokanaler ytligt i huden, genom vilka produkten slussas in. Injiceringen är ytlig, vilket gör att man kan minska porer och få lyster utan att ändra mimiken.' },
      { heading: 'Effekter:', text: 'Microtox ger många positiva effekter som associeras med ett fräscht yttre och är ofta en av de mest prisvärda behandlingarna för att snabbt se fräsch och pigg ut. Behandlingen är mest effektiv mot Fina linjer Stora porer Förebyggande mot åldrande Jämnare och slätare helhetsintryck' },
    ],
    price: 'Från 3000kr',
    funFact: 'En Microtox-behandling har effekt i ca 2-4 månader.',
    duration: 'Behandlingen tar ungefär 30 minuter beroende på behandlingsområdets storlek. Konsultationen är också inkluderad i den totala tidsåtgången.',
    faq: [
      { q: 'Hur många behandlingar behöver jag göra?', a: 'Resultatet av behandlingen varierar mellan individer. Men för att behålla effekterna brukar de flesta göra 3-4 behandlingar per år.' },
      { q: 'Vem kan behandla sig med Microtox?', a: 'Alla, oavsett hudtyp, kan behandla sig med Microtox för att dra nytta av dess effekter. Likt andra injektionsbehandlingar, behandlar vi inte: <strong> <ul> <li> Gravida eller Ammande personer. </li> <li>Dessutom rekommenderar vi att du inte är förkyld, har feber, akne eller herpesutslag på ansiktet och att du har avslutat eventuella Tetralysal-kurer senast 14 dagar innan behandlingen.</li> <li> Du bör också inte ha använt produkter/behandlingar som innehåller Retin-A och BHA/AHA-syror under en vecka innan behandlingen. </li> </ul> </strong>' },
      { q: 'Finns det biverkningar?', a: 'Likt som vid andra injektionsbehandlingar kan du uppleva biverkningar efter Microtox-behandlingen, som viss smärta, rodnad, svullnad, blåmärken eller minskad känslighet i huden. Dessa biverkningar är oftast tillfälliga och övergående.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'PRX-T33': {
    image: './images/KemiskPeeling.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'PRX-T33',
    infoTitle: 'PRX-T33',
    subtitle: 'PRX-T33: En revolutionerande behandling',
    intro: 'PRX-T33 är en behandling som kallas för den nya generationens TCA-peeling, eftersom den ger liknande resultat som en TCA-peeling men utan sociala begränsningar. Den är effektiv och verkar på cellulär nivå, vilket ger din hudegenskaper som tidigare inte varit möjliga.',
    sections: [
      { heading: 'Vilka områden och vad kan jag behandla med PRX-T33?', text: 'PRX-T33 är en nålfri behandling som använder sig av de aktiva substanserna TCA (triklorättiksyra och väteperoxid) för att aktivera cellförnyelsen. Behandlingen verkar på cellulär nivå och stimulerar hudens egna tillväxtfaktorer, vilket ger synliga resultat direkt efter behandlingen. Du kommer att känna och se skillnaden i form av uppstramning, lyster, jämnare hudton och färre linjer. Till skillnad från vanliga peelingar ger PRX-T33 knappt någon rodnad eller fjällning. Behandlingen kan även utföras året runt eftersom det inte ger ljuskänslighet, men det rekommenderas alltid att använda solskydd. PRX-T33 är även lämplig att kombinera med andra behandlingar såsom Dermapen, Botox, fillers, PRP och Profhilo.' },
      { heading: 'Behandlingsområden:', text: '<strong> Ansiktet: </strong> Rynkor och linjer, förstorade porer, förlorad spänst och fyllighet, ojämn hy och glåmighet, pigmenteringar, åldersfläckar, ärrbildningar och torrhet.<br> <br> <strong>Kroppen: </strong> Åldrad hud och/eller förlorad spänst på hals, dekolletage och handrygg, bristningar och ärr.' },
    ],
    price: 'Från 1800kr',
    funFact: 'En PRX-T33 behandling har effekt i ca 2-4 månader.',
    duration: 'Behandlingen tar ungefär 40-50 minuter beroende på behandlingsområdets storlek. Konsultationen är också inkluderad i den totala tidsåtgången.',
    faq: [
      { q: 'Hur många behandlingar behöver jag göra?', a: 'Resultatet av behandlingen varierar mellan individer. Men för att behålla effekterna brukar de flesta göra 3-4 behandlingar per år.' },
      { q: 'Vem kan behandla sig med PRX-T33?', a: 'Alla, oavsett hudtyp, kan behandla sig med PRX-T33 för att dra nytta av dess effekter. Likt andra injektionsbehandlingar, behandlar vi inte: <strong> <ul> <li> Gravida eller Ammande personer. </li> <li>Dessutom rekommenderar vi att du inte är förkyld, har feber, akne eller herpesutslag på ansiktet och att du har avslutat eventuella Tetralysal-kurer senast 14 dagar innan behandlingen.</li> <li> Du bör också inte ha använt produkter/behandlingar som innehåller Retin-A och BHA/AHA-syror under en vecka innan behandlingen. </li> </ul> </strong>' },
      { q: 'Finns det biverkningar?', a: 'Likt andra ansiktsbehandlingar kan du uppleva biverkningar efter PRX-T33 behandlingen, som viss smärta, rodnad, svullnad, blåmärken eller minskad känslighet i huden. Dessa biverkningar är oftast tillfälliga och övergående.' },
      { q: 'Hur många behandlingar behövs?', a: 'Vi rekommenderar en kur med 3-6 behandlingar med 1-2 veckors intervaller. Därefter brukar det räcka att underhålla behandlingen någon gång per år.' },
      { q: 'Gör det ont?', a: 'Behandlingen är nästan smärtfri.' },
      { q: 'Hur känns det efteråt?', a: 'Vissa personer kan uppleva en liten rodnad, som brukar gå över efter någon timme. Fjällning är ovanlig men kan förekomma hos vissa individer.' },
      { q: 'Hur långvarig är effekten?', a: 'Du kommer att märka en uppstramning av huden omedelbart efter behandlingen, samt att huden känns fylligare och får en jämnare och klarare hudton. Därefter fortsätter substanserna i PRX-T33 att stimulera hudens dermis och keratinocyternas tillväxtfaktorer. För bästa resultat rekommenderar vi att du gör en kur.' },
      { q: 'Att tänka på:', a: '<ul><li>Undvik att använda produkter som innehåller retinol 1-2 veckor innan behandlingen.</li><li>Undvik solning 48 timmar efter behandlingen.</li><li>Undvik att raka eller vaxa det område som ska behandlas.</li><li>Behandlingen bör inte utföras under graviditet eller amning.</li></ul>' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Klassisk ansiktsbehandling': {
    image: './images/AnsiktskrämNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Klassisk ansiktsbehandling',
    infoTitle: 'Klassisk ansiktsbehandling',
    subtitle: 'Klassisk ansiktsbehandling på Ideal Clinic',
    intro: 'Känns din hud trött, torr eller oren? Eller kanske allt på en gång? Unna dig en ordentlig vårboost med marknadens mest generösa och kompletta ansiktsbehandling. Vi skräddarsyr behandlingen efter din hudtyp och använder de mest lämpliga produkterna för att ge din hud det den behöver.',
    sections: [
      { heading: 'Anpassad hudvårdsbehandling - Uppfyller dina specifika behov', text: 'Eftersom huden är i konstant förändring och har olika behov beroende på årstid, livsstil, ålder och annan behandling är denna behandling perfekt att unna sig med jämna mellanrum. Med hjälp av 11 olika oljor, serum, krämer, peelingar och masker tillgodoser denna behandling, på en innovativ bioteknologisk nivå, det som din hud behöver.' },
    ],
    price: 'Från 1195kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '60-80 Minuter',
    faq: [
      { q: 'Hur många behandlingar behöver jag göra?', a: 'Vi rekommenderar att du gör behandlingen 2-4 gånger per år, speciellt inför årstidsskiftningar eftersom huden kan behöva mer fukt, vård, syror eller skydd vid dessa tillfällen. Om du har några problem med huden, rekommenderar vi att du rådgör med din terapeut.' },
      { q: 'Behöver jag tänka på något särskilt inför behandlingen?', a: 'Se till att komma utan smink och att du inte har gjort några påfrestande behandlingar på ansiktet under veckan innan behandlingen.' },
      { q: 'Kan jag agera normalt efter behandlingen?', a: 'Ja, du kan agera som vanligt efter behandlingen, men vi rekommenderar att du låter huden vila från smink under 24 timmar efter behandlingen.' },
      { q: 'Ser jag resultat direkt?', a: 'Ja, huden kommer att upplevas ren, återfuktad, mjuk och lätt uppstramad efter behandlingen.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Djuprengöring': {
    image: './images/AnsiktskrämNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Djuprengöring',
    infoTitle: 'Djuprengöring',
    subtitle: 'Djuprengöring på Ideal Clinic',
    intro: 'Lider du av glåmighet, oren hy, eller förstorade porer? På Ideal Clinic kan vi med hjälp av den senaste teknologin med ultraljud erbjuda dig en effektiv och skonsam djuprengöring av dina problemområden. Resultatet blir en ren, lugnad, uppstramad hud med en fräschör som är redo att möta våren och sommaren.',
    sections: [
      { heading: 'Behandlingen inkluderar:', text: '<ul> <li> Reglering av talgproduktionen </li> <li> Portömning </li> <li> Fräschör </li> <li> Grundlig rengöring </li> </ul>' },
    ],
    price: 'Från 1095kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '60-80 Minuter',
    faq: [
      { q: 'Hur många behandlingar behöver jag?', a: 'En djuprengjord hud är grunden för en fräsch och välmående hud. Det förbättrar upptaget av produkter och resultaten av dina andra behandlingar. Vi rekommenderar därför att göra denna behandling med jämna mellanrum, cirka 2-4 gånger per år, beroende på utgångsläget. Vid svåra problem med oren hy eller acne rekommenderar vi att du rådfrågar med din terapeut.' },
      { q: 'Behöver jag tänka på något innan behandlingen?', a: 'Kom till behandlingen utan smink och undvik påfrestande behandlingar på ansiktet under veckan innan behandlingen.' },
      { q: 'Kan jag agera normalt efter behandlingen?', a: 'Ja, men vi rekommenderar att vila huden från smink och annan påfrestning, såsom värme, träning och alkohol.' },
      { q: 'Ser jag resultat direkt?', a: 'Ja, huden kommer att kännas lugn, ren och med minskade porer.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Rynkbehandling Botox': {
    image: './images/hello.png',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Rynkbehandling Botox',
    infoTitle: 'Rynkbehandling Botox',
    subtitle: 'Rynkbehandling på Ideal Clinic',
    intro: 'Injektionsbehandlingar är den mest populära formen av estetiska behandlingar idag. De hjälper till att motverka rynkor och fina linjer genom att injicera Botulinumtoxin typ A i utvalda områden för att jämna ut rynkor. Detta är en smidig och smärtfri behandling som tar cirka 10–20 minuter. De områden som kan behandlas inkluderar horisontella rynkor i pannan, bekymmersrynkan mellan ögonbrynen, kråksparkar, ögonbrynslyft, näsrynkor, apelsinhaka, gummy smile, läpplyft även kallad lipflip och halslyft (behandling av platysma). Injektionerna är så tunna och mängden som injiceras är så liten att obehaget för patienten är minimal. Om önskat kan vi även lokalbedöva området före behandlingen. Resultatet av behandlingen syns normalt inom 3-10 dagar, men i vissa fall kan det ta upp till två veckor. Resultatet varar normalt i 3–6 månader, men varaktigheten kan öka vid varje upprepad behandling. På Ideal Clinic har vi certifierats för estetisk injicering från Estetiska Injektionsrådet, vilket ger en trovärdig kvalitetsstämpel för våra behandlande läkare, sjuksköterskor och tandläkare. Välkommen att kontakta oss via telefon på 010–33 33 553 eller via E-post: info@idealclinic.se för mer information och bokning av behandling.',
    sections: [],
    price: 'Från 2000kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '30 Minuter',
    faq: [
      { q: 'Hållbarhet', a: 'Behandlingen innebär att en liten mängd av Botulinumtoxin typ A injiceras i den underliggande mimikmuskulaturen i det område som ska behandlas. Behandlingen är snabb och nästan helt smärtfri. Resultaten syns ofta redan efter ett par dagar och håller i sig i upp till 4-6 månader.' },
      { q: 'Alltid rätt till efterkontroll', a: 'Efter utförd behandling har du rätt till en kostnadsfri touch-up inom 12-18 dagar där du tillsammans med behandlaren går igenom vad som har gjorts och följer upp med eventuella korrigeringar.' },
      { q: 'Att tänka på inför din behandling', a: '<ul><li>Du ska inte ha någon infektion eller feber eller känna dig sjuk.</li><li>Du ska inte ha utslag eller finnar på injektionsområdet.</li><li>Du ska inte ha Herpes infektion som pågår i kroppen eller på injektionsområdet.</li><li>Du ska inte vara gravid eller amma.</li><li>Om du har tagit treo, Ipren eller liknande läkemedel kan blåmärken uppkomma lättare på injektionsområdet.</li><li>För smärtlindring kan man införskaffa Emla salva på Apoteket och smörja ett tjockt lager på injektionsområdet ca 1 timme före behandling.</li><li>Du ska inte träna samma dag som behandlingen utförs.</li></ul>' },
      { q: 'Att tänka på efter din behandling', a: '<ul><li>Behandlingsresultatet kan tidigast börja synas efter ca 3-4 dagar och varar generellt upp till 3-6 månader.</li><li>Du ska inte utföra peeling eller massage på ansiktet samma dag.</li><li>Du ska inte träna samma dag.</li><li>Du ska inte sminka dig eller ta på det behandlade området de närmaste 6 timmarna efter behandling.</li><li>Du ska inte basta samma dag.</li></ul>' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'Microneedling/Hudbristning': {
    image: 'images/HudbristningNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Microneedling/Hudbristning',
    infoTitle: 'Microneedling',
    subtitle: 'Microneedling på Ideal Clinic',
    intro: 'Microneedling är en behandling som används för åtstramning av huden, förbättrad lyster och bildning av kollagen. Det är en mer djupgående behandling än kemisk peeling. Microneedling-pennan är utrustad med hundratals mikronålar, som tränger igenom huden och skapar tusentals mikrokanaler. Nåltätheten och diametern på nålarna gör att behandlingen blir skonsam och ger en god penetration.',
    sections: [
      { heading: 'Vad är syftet med behandlingen?', text: 'De små mikrokanalerna skapar en kontrollerad skada på huden, vilket startar en läkningsprocess med ett gynnsamt hudföryngringsresultat som följd. Via mikrokanalerna appliceras bioaktiva substanser som passar just din hud för att den ska se fräschare ut. Normalt når bara cirka 0,3% av hudvårdsprodukterna de djupare hudlagren. Men med Microneedling ökar upptaget av aktiva substanser till mer än 50%. Genom att starta den naturliga läkningsprocessen och med hjälp av bioaktiva substanser sker en nyproduktion av kollagen och elastin, vilket resulterar i en förbättrad hudkvalitet.' },
    ],
    price: 'Från 1495kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '40 Minuter beroende på området',
    faq: [
      { q: 'Vad är microneedling?', a: 'Microneedling är en hudföryngringsteknik där en microneedling-penna med mikronålar används för att skapa mikrokanaler i huden. Detta startar en läkningsprocess som leder till bildning av nytt kollagen och elastin. Nåltätheten och diametern på nålarna gör att behandlingen blir skonsam och ger en god penetration.' },
      { q: 'Vid behandling av acneärr', a: 'Vid behandling av acneärr görs ofta 3-5 behandlingar med 4 veckors mellanrum, vilket ger kraftfulla resultat med ett minimum av konvalescens. Första dagarna kan du ha lätt rodnad och/eller svullnad, men man brukar bara behöva vara hemma under behandlingsdagen.' },
      { q: 'Vilka områden kan behandlas?', a: 'Microneedling kan användas på ansikte, dekolletage och kropp.' },
      { q: 'För vilka lämpar sig inte microneedling?', a: 'Microneedling är inte lämpligt för personer som:<ul><li>Har behandlats med Roaccutan de senaste 3 månaderna</li><li>Tar Kortison</li><li>Är gravida eller ammande</li><li>Har öppna eller infekterade sår, som Herpes Simplex</li><li>Tar blodförtunnande läkemedel, inklusive vissa typer av naturläkemedel</li><li>Har försämrad sårläkningsförmåga, som diabetes</li><li>Har en kronisk hudsjukdom eller nervskada i aktuellt område</li><li>Har genomgått strålbehandling under det senaste året</li><li>Har genomgått nyligen ansiktskirurgi eller laserbehandling</li></ul>' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Kemisk peeling': {
    image: 'images/acneärrNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Kemisk peeling',
    infoTitle: 'Kemisk Peeling',
    subtitle: 'Vad är kemisk peeling?',
    intro: 'Kemisk peeling är en effektiv hudföryngringsteknik som använder olika lösningar för att avlägsna det yttre döda cellagret och främja nybildning av fräschare, mer ungdomliga hudceller. Denna behandling ger synliga resultat genom att göra huden slätare, lenare och ge den ett friskare utseende. Med hjälp av kemisk peeling kan pigmentförändringar och fina linjer reduceras samtidigt som porerna dras ihop. På Ideal Clinic använder vi endast den patenterade och originala AHA-syran för kemisk peeling, vilket garanterar en så effektiv behandling som möjligt. Vår behandling är skonsam och kan användas för att behandla flera problem samtidigt, exempelvis rynkor, pigmentförändringar och förstorade porer.',
    sections: [
      { heading: 'Hur går behandlingen till vid kemisk peeling?', text: 'Vid kemisk peeling applicerar vi olika lösningar på huden, beroende på vilken styrka du väljer och vilket resultat du vill uppnå. Vi anpassar styrkan utifrån de specifika hudproblem du vill behandla samt den återhämtningstid du är beredd att ha. En mildare peeling ger minimal eller ingen konvalescens, medan en starkare peeling tränger djupare ner i hudlagren och kan kräva några dagars återhämtning. Kemisk peeling kan användas på ansikte, hals, dekolletage och handryggar för att förbättra hudens utseende och kvalitet.' },
      { heading: '', text: '' },
      { heading: '', text: '' },
      { heading: 'Naturligt resultat med kemisk peeling:', text: 'Genom att kombinera olika metoder kan vi ofta uppnå överlägsna resultat med mindre kontraster efter ingreppet samt kortare återhämtningstid och lägre totalkostnader. För oss handlar det inte bara om själva ingreppet, utan också om att erbjuda personlig vård under hela behandlingsprocessen. Vi lägger lika stor vikt vid uppföljning för att säkerställa din nöjdhet och välbefinnande som du gör.' },
    ],
    price: 'Från 700kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '40 Minuter',
    faq: [
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Tandblekning': {
    image: './images/TandblekningNYBILDZ.png',
    toast: 'Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!',
    title: 'Tandblekning',
    infoTitle: 'Tandblekning',
    subtitle: 'Tandblekning på Ideal Clinic',
    intro: 'Att bleka tänderna är idag en mycket populär behandling och det finns flera metoder att välja mellan. Dock är inte alla metoder lämpliga för alla typer av tänder. De metoder som ger bra resultat är laserblekning, ultraljudsblekning, men den metod som är mest effektiv och skonsam mot tänderna, och också den senaste inom tandblekning, är plasmaljusblekning (LED). Inte alla har lika bra kvalitet på tänder eller naturligt vita tänder från början. Därför lider många av missfärgade tänder på grund av mat, medicinering, dryck eller rökning. Färgen på tänderna kan variera av många olika anledningar, men det vanligaste är att de naturligt blir mörkare med åren.',
    sections: [
      { heading: 'SENASTE TEKNIKEN', text: 'Med senaste plasmateknologin (LED) erbjuder vi dig en snabb och enkel lösning för vitare tänder. Denna metod gör också att tänderna och emaljen blir starkare. Metoden är ledande för säker och effektiv tandblekning där man kan se tydliga resultat, vilket i genomsnitt motsvarar 7 nyanser vitare på ett behandlingstillfälle enligt Vitapan Classic\'s nyansnivåer. Normalt krävs inte fler behandlingar för att uppnå ett tillfredsställande resultat. Vår klinikbehandling är perfekt för dig som vill ha effektiva och snabba resultat på ett behagligt sätt. Behandlingen utförs på vår kliniker under ett och samma tillfälle och tar totalt 40-60 minuter beroende på om du väljer en Full Smile eller Fast Smile. Gelen som vi använder innehåller 6% väteperoxid.' },
      { heading: 'Skonsamt mot tänderna:', text: 'Det avgörande för om en tandblekning är skonsam eller inte är gelen och ljusmetoden som används. Båda kan skada tänderna. Därför använder vi en gel med ett neutralt pH-värde (7), vilket innebär att blekningen inte förändrar emaljmolekylernas struktur eller tandytan. Gelen innehåller också ämnen som motverkar ilningar, reparerar skador och stärker tänderna. Detta gör att du får starkare och friskare tänder efter en tandblekning hos oss. En annan orsak till ilningar och sensibilitet vid tandblekning är ljusblekning med värmeproducerande lampor, som lasermetoden. Detta är mycket smärtsamt och kan skada tandnerven permanent. Metoden vi använder, plasmaljus (LED), är effektiv utan att avge värme och är fri från UV-ljus och skadliga våglängder. Detta gör att biverkningar är mer sällsynta vid tandblekning med vår metod. Ilningar som förekommer är tillfälliga och ofarliga.' },
      { heading: '', text: '' },
      { heading: 'Varför du ska bleka tänderna med plasmaljus(led):', text: '<ul><li>Den senaste metoden på marknaden</li><li>Ämnen som stärker emaljen och motverkar ilningar</li><li>Resultat direkt i vår klinik</li><li>Fyra till 10 nyanser vitare tänder</li><li>LED-ljuset avger inte värme</li><li>PH-neutral gel skadar inte tänderna</li><li>Prime Protect för remineralisering av emaljen och minimering av ilningar</li><li>Prime Protect gör att du kan äta och dricka vad som helst redan 2 timmar efter behandlingen</li></ul>' },
    ],
    price: 'Från 1195kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '70 Minuter',
    faq: [
      { q: 'Inför behandlingen', a: 'Det är viktigt att rådfråga din tandläkare innan du utför tandblekning om du tidigare har haft tandställning de senaste sex månaderna. Detta beror på att tandblekningsprodukter kan påverka tandställningens resultat och eventuellt orsaka ojämna resultat på tänderna. <br> <br> <strong> <ul> <li>Personer under 18 år </li> <li> Gravida </li> <li> Ammande kvinnor </li> Får inte bleka sina tänder eftersom det finns osäkerhet kring eventuella biverkningar. </strong> </ul>' },
      { q: 'Hur går behandlingen till', a: 'Vi börjar med att rengöra tänderna för att ta bort ytliga beläggningar och fläckar. Därefter applicerar vi en skyddande salva längs med tandköttskanten för att skydda tandköttet från gelen. Gel med väteperoxid appliceras direkt på tänderna och aktiveras med blått plasmaljus. Ljuset i sig bleker inte tänderna utan dess syfte är att påskynda blekningsprocessen genom att aktivera gelen.<br><br>Det som bleker bort missfärgningarna i tandens emalj är en oxidationsreduktionsreaktion som delar upp långa färgande molekyler till mindre färglösa. Dessa molekyler bryts sedan ner till koldioxid (CO2) och vatten. Väteperoxid eller annat oxiderande ämne frigör \'ensamma\' syreatomer, så kallade fria radikaler. Dessa \'söker upp\' organiska molekyler och bryter ner dem, vilket ger ljusare tänder.' },
      { q: 'PRIME PROTECT', a: 'Efter själva tandblekningen rekommenderar vi Prime Protect som är en produkt som förseglar och skyddar emaljen direkt efter blekningen. Då kan du äta och dricka som vanligt utan att riskera resultatet från behandlingen. Produkten är det senaste komplementet till tandblekning. Högt rekommenderat för dem som använder tobak eller konsumerar viss typ av mat med röda nyanser. Förseglingen minskar risken för ilningar.' },
      { q: 'Efter behandlingen', a: 'Efter behandlingen är det vanligt med ilningar eller irriterat tandkött, men besvären brukar försvinna inom något dygn. <br> <br> <strong>Det är viktigt att vara extra noggrann med kosten, särskilt om du inte valt att använda Prime Protect som extra skydd mot missfärgningar.</strong>' },
      { q: 'Blekningstiden', a: 'Varierar mellan 20-40 minuter, beroende på om du väljer en fullbehandling eller en refresh. Därtill tar det 20 minuter extra för genomgång och konsultation. Tandblekning med plasma teknologi (LED) är en skonsam och bekväm behandling som utförs av våra certifierade tandblekningsexperter.' },
      { q: 'Är det säkert?', a: 'Produkterna som används är medicinskt CE-märkta och pH-neutrala. Vår metod gör tänderna även starkare.' },
      { q: 'Vad gör tänderna fläckiga och missfärgade?', a: 'Tänder kan bli missfärgade på grund av kost, tobak, medicinering, misskötsel eller åldrande.' },
      { q: 'Måste jag använda bettskena?', a: 'Med vår tandblekning behöver du inte använda bettskenor.' },
      { q: 'Vilka resultat kan garanteras?', a: 'Resultatet syns genast. Resultaten varierar beroende på individen, men i genomsnitt blir tänderna 4-10 nyanser vitare. Man rekommenderas att göra en refresh efter ca 3 månader för att behålla resultatet. <br> <br> <ul> <li> Man kan inte bleka metallfyllningar eller tänder som utsatts för skada. </li> <li> Resultatet på kronor är också svårt att bleka pga. det kan inte bleka kronor själva, men det går att bleka tänderna runt om kronan för att få tänderna ljusare. </li> </ul>' },
      { q: 'Kan man bleka kronor?', a: 'Det går inte att bleka själva kronorna, men om tänderna runt omkring är mörkare än kronorna, så går det bra att göra tandblekning med vår metod för att få tänderna runt kronorna att bli ljusare, så att skillnaden i färg minskar.' },
      { q: 'Vilka missfärgningar kan blekas?', a: 'Det är lättare att bleka tänder som är missfärgade i varma färger som brunt och gult, än de som går i kalla färger, det vill säga grått och blått. Missfärgningar som kommer från kost och ålder går till exempel i varma färger, medan de som kan uppstå från tandfyllningar och vissa mediciner ger tänderna gråa nyanser, det gör även viss antibiotika till så kallade tetracykliner.' },
      { q: 'Konsultation', a: "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras." },
    ],
  },

  'Migränbehandling': {
    image: './images/sunasfixar.jpg',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'Migränbehandling',
    infoTitle: 'Migränbehandling',
    subtitle: 'Migränbehandling på Ideal Clinic',
    intro: 'Många personer som lider av migrän och spänningshuvudvärk kan få lindring genom en injektionsbehandling. Migrän är en vanlig sjukdom som kan utlösas av faktorer som stress, sömnbrist, fasta, kost och hormonförändringar. Behandlingen görs med injektioner. Migrän och spänningshuvudvärk kan påverka livskvaliteten hos många och är en vanlig orsak till sjukskrivning. Genom att använda Botox, kan 7 av 10 få hjälp. Det är dock inte möjligt att botade migrän med injektioner, men det kan lindra symptomen. Många individer som behandlas hos oss upplever att migrän attackerna blir mildare, färre eller helt försvinner under tiden substansen är aktiv i muskeln. Injektioner görs i musklerna mellan ögonbrynen, pannan och ibland i temporala muskler och muskler på bakhuvudet. Resultatet av behandlingen märks efter ungefär en vecka och varar mellan 3- 6 månader.',
    sections: [],
    price: 'Från 5000kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: '30-45 Minuter',
    faq: [
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

  'PRP': {
    image: './images/HårNYBILDZ.png',
    toast: 'Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling',
    title: 'PRP',
    infoTitle: 'PRP (Platelet-Rich Plasma)',
    subtitle: 'PRP på Ideal Clinic',
    intro: 'PRP (Platelet-Rich Plasma), eller blodplättrik plasma, är en medicinsk behandling som har visat sig vara fördelaktig för att främja hårtillväxt och förbättra hårets hälsa.',
    sections: [
      { heading: 'Här är några fördelar med PRP för håret:', text: '<ul><li>Naturlig metod: PRP för hår är en naturlig behandling eftersom den använder patientens eget blod för att extrahera blodplättar och tillväxtfaktorer. Det finns ingen användning av kemikalier eller syntetiska ämnen, vilket minskar risken för biverkningar eller allergiska reaktioner.</li> <br><li>Främjar hårtillväxt: PRP innehåller höga nivåer av tillväxtfaktorer som främjar hårtillväxt och stimulerar vilande hårfolliklar. Genom att injicera PRP i områden med tunnhårighet eller håravfall kan man öka blodcirkulationen, näringsupptaget och stimulera hårfolliklarna för att producera tjockare, friskare hårstrån.</li> <br><li>Förbättrar hårets kvalitet: PRP-behandlingar förbättrar inte bara hårtillväxten, utan också hårets övergripande kvalitet. De tillväxtfaktorer och proteiner som finns i PRP hjälper till att stärka hårsäckarna, öka hårets elasticitet och förbättra dess struktur och glans. Det kan också minska håravfall och brytning av hårstrån.</li> <br><li>Snabb och enkel procedur: PRP-behandlingar för håret är relativt snabba och enkla att genomföra. En liten mängd blod tas från patienten, och blodet centrifugeras för att separera plasma med hög koncentration av blodplättar och tillväxtfaktorer. Detta PRP-serum injiceras sedan i det område som ska behandlas. Hela processen tar cirka en timme och kräver minimal återhämtningstid.</li> <br><li>Låg risk och minimala biverkningar: Eftersom PRP använder patientens eget blod minskas risken för allergiska reaktioner eller avstötning. Det är en icke-kirurgisk behandling och har minimala biverkningar såsom tillfällig rodnad eller svullnad i injektionsområdet, vilket vanligtvis försvinner inom några timmar eller dagar.</li> <br><li>Kompletterar andra behandlingar: PRP-behandlingar kan användas som en kompletterande behandling för personer som genomgår andra håråterväxtbehandlingar, såsom hårtransplantationer eller medicinsk behandling mot håravfall. Det kan förbättra resultaten av dessa behandlingar genom att stimulera hårtillväxt och förbättra hårets övergripande hälsa.</li></ul>' },
    ],
    price: 'Från 2500kr',
    funFact: 'Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt',
    duration: 'Behandlingen tar ca 40-60 minuter, inklusive konsultationen, beroende på områdets storlek.',
    faq: [
      { q: 'Hur går behandlingen till?', a: 'PRP-behandlingen börjar med en konsultation där vi diskuterar dina önskemål, förutsättningar och förväntade resultat. Därefter tas ett vanligt blodprov i sterila tuber som sätts i en centrifug som separerar plasman från blodet. Sedan injiceras den tillväxtrika plasman på det önskade området.' },
      { q: 'Gör det ont?', a: 'Du kan känna spänning vid sticket, men vi använder små nålar för att göra behandlingen så behaglig som möjligt.' },
      { q: 'Vad är PRP bra för?', a: 'PRP-behandlingen ses som ett sätt att få tillbaka ungdomlig hudstruktur genom att återställa elasticiteten och förbättra hudens förmåga att behålla fukt. Det är mest effektivt mot problem som gråaktig hud utan lyster, mörka ringar under ögonen, håravfall, slapp, solskadad och åldrad hy, djupa ärr och ojämn hudstruktur och grov och porig hud.' },
      { q: 'Hur många behandlingar behöver jag göra?', a: 'PRP-behandling görs i en kur med tre behandlingar, därefter rekommenderas 1-2 behandlingar per år för att behålla resultaten.' },
      { q: 'Vilka kan behandla sig med PRP?', a: 'PRP-behandling är lämplig för alla hudtyper. Men gravida eller ammande personer samt personer som konsumerar mycket alkohol eller röker rekommenderas inte att behandla sig. Personer med cancer, blodsjukdomar, hudsjukdomar (SLE, Porfyri, allergi), blödarsjuka eller vid sepsis ska inte genomgå behandlingen.' },
      { q: 'Vem utför behandlingen?', a: 'Behandlingen utförs av leg. läkare och sjuksköterskor.' },
      { q: 'Finns det biverkningar?', a: 'Liksom vid andra injektionsbehandlingar, kan du uppleva biverkningar efter en PRP-behandling, såsom smärta, rodnad, svullnad, blåmärken eller minskad känslighet på huden. Dessa biverkningar är oftast tillfälliga och övergående.' },
      { q: 'Konsultation', a: 'Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.' },
    ],
  },

};

// ─── Render logic ────────────────────────────────────────────────────────────
(function() {
  var params = new URLSearchParams(window.location.search);
  var treatment = params.get('treatment');
  if (!treatment) return;

  var data = treatments[treatment];
  if (!data) return;

  // Breadcrumb
  var crumb = document.getElementById('current-treatment');
  if (crumb) crumb.textContent = treatment;

  // Hero image
  var hairPic = document.getElementById('hairPic');
  if (hairPic) hairPic.src = data.image;

  // Toast
  var toastBody = document.querySelector('.toast-body');
  if (toastBody) toastBody.innerHTML = data.toast;

  // Main content
  var setText = function(id, val) {
    var el = document.getElementById(id) || document.querySelector('#' + id);
    if (el && val) el.innerHTML = val;
  };

  setText('behandlingsRubrik', data.title);
  setText('informationOm', data.infoTitle);
  setText('miniRubrik', data.subtitle);
  setText('pshortText', data.intro);
  setText('InfoCardPrice', data.price);
  setText('vissteduAtt', data.funFact);
  setText('EstimeradTidText', data.duration);

  // Content sections (up to 4 extra blocks)
  var sectionIds = [
    { heading: 'miniRubrik2', text: 'firststyckeText' },
    { heading: 'miniRubrik3', text: 'secondstyckeText' },
    { heading: 'miniRubrik4', text: 'thirdstyckeText' },
    { heading: 'miniRubrik5', text: 'fourthstyckeText' },
  ];

  (data.sections || []).forEach(function(section, i) {
    if (i < sectionIds.length) {
      setText(sectionIds[i].heading, section.heading);
      setText(sectionIds[i].text, section.text);
    }
  });

  // FAQ accordion - populate used items, remove empty ones
  var faqItems = data.faq || [];
  faqItems.forEach(function(item, i) {
    var n = i + 1;
    var rubrikEl = document.getElementById('dragspel' + n + 'Rubrik');
    var tipEl = document.getElementById('dragspelFirstTip');
    if (n > 1) tipEl = document.getElementById('dragspel' + n + 'FirstTip');
    if (rubrikEl) rubrikEl.innerHTML = item.q;
    if (tipEl) tipEl.innerHTML = item.a;
  });

  // Remove empty accordion items (those that weren't populated)
  Array.from(document.getElementsByClassName('accordion-item')).forEach(function(accordion) {
    // Keep the AVBOKNING item (it has static content)
    if (accordion.textContent.indexOf('AVBOKNING') !== -1) return;
    // Check if the accordion button is empty (no question text set)
    var btn = accordion.querySelector('.accordion-button');
    if (btn && btn.textContent.trim().length === 0) {
      accordion.parentNode.removeChild(accordion);
    }
  });
})();
