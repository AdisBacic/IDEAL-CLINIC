//JS Kod för behandlingssidan. DOM Manipulation för att visa rätt värde. 

var behandlingsvardeElements = document.querySelectorAll(".behandlingsvarde");
for (var i = 0; i < behandlingsvardeElements.length; i++) {
  behandlingsvardeElements[i].addEventListener("click", function() {
    var treatment = this.textContent;
    window.location.href = "behandlingar.html?treatment=" + treatment;
  });
}

var params = new URLSearchParams(window.location.search);
var treatment = params.get("treatment");

var hairPic = document.getElementById('hairPic');

var toastBody = document.querySelector('.toast-body');



let rubrik = document.querySelector("#behandlingsRubrik");
let miniRubrik = document.querySelector("#miniRubrik");
let inledandeText = document.querySelector("#pshortText");
let miniRubrik2 = document.querySelector("#miniRubrik2");
let firststyckeText = document.querySelector("#firststyckeText");
let miniRubrik3 = document.querySelector("#miniRubrik3");
let secondstyckeText = document.querySelector("#secondstyckeText");
let miniRubrik4 = document.querySelector("#miniRubrik4");
let thirdstyckeText = document.querySelector("#thirdstyckeText");

let miniRubrik5 = document.querySelector("#miniRubrik5");
let fourthstyckeText = document.querySelector("#fourthstyckeText");

let informationOm = document.querySelector("#informationOm");
let InfoCardPrice = document.querySelector("#InfoCardPrice");
let vissteduAtt = document.querySelector("#vissteduAtt");
let estimeradTidText = document.querySelector("#EstimeradTidText");

//#region Accordion
let dragspel1Rubrik = document.querySelector("#dragspel1Rubrik");
let dragspelFirstTip = document.querySelector("#dragspelFirstTip");

let dragspel2Rubrik = document.querySelector("#dragspel2Rubrik");
let dragspel2FirstTip = document.querySelector("#dragspel2FirstTip");

let dragspel3Rubrik = document.querySelector("#dragspel3Rubrik");
let dragspel3FirstTip = document.querySelector("#dragspel3FirstTip");

let dragspel4Rubrik = document.querySelector("#dragspel4Rubrik");
let dragspel4FirstTip = document.querySelector("#dragspel4FirstTip");

let headingFive = document.querySelector("#headingFive");
let dragspel5Rubrik = document.querySelector("#dragspel5Rubrik");
let dragspel5FirstTip = document.querySelector("#dragspel5FirstTip");

let headingSix = document.querySelector("#headingSix");
let dragspel6Rubrik = document.querySelector("#dragspel6Rubrik");
let dragspel6FirstTip = document.querySelector("#dragspel6FirstTip");

let headingSeven = document.querySelector("#headingSeven");
let dragspel7Rubrik = document.querySelector("#dragspel7Rubrik");
let dragspel7FirstTip = document.querySelector("#dragspel7FirstTip");

let headingEight = document.querySelector("#headingEight");
let dragspel8Rubrik = document.querySelector("#dragspel8Rubrik");
let dragspel8FirstTip = document.querySelector("#dragspel8FirstTip");

let headingNine = document.querySelector("#headingNine");
let dragspel9Rubrik = document.querySelector("#dragspel9Rubrik");
let dragspel9FirstTip = document.querySelector("#dragspel9FirstTip");

let headingTen = document.querySelector("#headingTen");
let dragspel10Rubrik = document.querySelector("#dragspel10Rubrik");
let dragspel10FirstTip = document.querySelector("#dragspel10FirstTip");

let headingEleven = document.querySelector("#headingEleven");
let dragspel11Rubrik = document.querySelector("#dragspel11Rubrik");
let dragspel11FirstTip = document.querySelector("#dragspel11FirstTip");

let headingTwelve = document.querySelector("#headingTwelve");
let dragspel12Rubrik = document.querySelector("#dragspel12Rubrik");
let dragspel12FirstTip = document.querySelector("#dragspel12FirstTip");

let headingThirteen = document.querySelector("#headingThirteen");
let dragspel13Rubrik = document.querySelector("#dragspel13Rubrik");
let dragspel13FirstTip = document.querySelector("#dragspel13FirstTip");

let dragspel14Rubrik = document.querySelector("#dragspel14Rubrik");
let dragspel14FirstTip = document.querySelector("#dragspel14FirstTip");

let dragspel15Rubrik = document.querySelector("#dragspel15Rubrik");
let dragspel15FirstTip = document.querySelector("#dragspel15FirstTip");

let dragspel16Rubrik = document.querySelector("#dragspel16Rubrik");
let dragspel16FirstTip = document.querySelector("#dragspel16FirstTip");

let dragspel17Rubrik = document.querySelector("#dragspel17Rubrik");
let dragspel17FirstTip = document.querySelector("#dragspel17FirstTip");

let dragspel18Rubrik = document.querySelector("#dragspel18Rubrik");
let dragspel18FirstTip = document.querySelector("#dragspel18FirstTip");

let dragspel19Rubrik = document.querySelector("#dragspel19Rubrik");
let dragspel19FirstTip = document.querySelector("#dragspel19FirstTip");

let dragspel20Rubrik = document.querySelector("#dragspel20Rubrik");
let dragspel20FirstTip = document.querySelector("#dragspel20FirstTip");

let dragspel21Rubrik = document.querySelector("#dragspel21Rubrik");
let dragspel21FirstTip = document.querySelector("#dragspel21FirstTip");

let dragspel22Rubrik = document.querySelector("#dragspel22Rubrik");
let dragspel22FirstTip = document.querySelector("#dragspel22FirstTip");

//#endregion



if (treatment === "Hårborttagning") {
    // Display content specific to Hårborttagning

    hairPic.src = './images/Laser.png';

    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";
  
    rubrik.innerHTML =  "Hårborttagning";
    informationOm.innerHTML ="Hårborttagning";
    miniRubrik.innerHTML = "Hårborttagning på Ideal Clinic";
    inledandeText.innerHTML ="Hårborttagning är en vanligt förekommande estetisk behandling som många människor väljer att genomgå för att bli av med oönskade hårväxt på olika delar av kroppen. På Ideal Clinic erbjuder vi hårborttagning med diodlaser, som är den snabbaste och mest effektiva metoden för permanent hårborttagning. Diodlaser används för att eliminera hårväxt för gott genom att skickar intensivt pulserat ljus till hårsäckarna. Diodlaser är en skonsam metod som är mindre smärtsam än andra traditionella hårborttagningsmetoder, tack vare ett kylt munstycke som kyler ner huden till hela -7 grader under behandlingen. På Ideal Clinic använder vi den mest kraftfulla maskinen på marknaden, Sapphire diodlaser, som ger marknadens bästa resultat och är den snabbaste vägen till att bli hårfri. För att uppnå permanent hårborttagning krävs vanligtvis flera behandlingar, eftersom bara en viss procent av hårstråna är i aktiv växtfas vid varje tillfälle. De hårstrån som förstörs vid hårborttagningsbehandlingen faller av efter några veckor, men nya strån som varit i vilofas växer upp efter ett par månader och det är då det är dags för en ny behandling."
    miniRubrik2.innerHTML ="Vad händer under en behandling med permanent hårborttagning med diodlaser?";
    firststyckeText.innerHTML ="För att permanent ta bort hår med diodlaser, lägger man på en kall gel på huden och belyser den med synligt intensivt pulserat ljus. Ljusblixtarna vid behandlingen kan ibland kännas som en liten stöt, men behandlingen går snabbt och är inte särskilt smärtsam. Ibland kan man se en lätt hudrodnad efter behandlingen, men oftast syns det ingenting. Vi flyttar ljusprisman snabbt över hela det område där du önskar ta bort oönskad hårväxt. Behandlingen känns väldigt lite och är nära på smärtfri.";
    
    InfoCardPrice.innerHTML ="Från 180kr";
    vissteduAtt.innerHTML = "Behandlingen utförs med marknadsledande Sapphire diodlaser för en skonsam och effektiv hårborttagning";
    estimeradTidText.innerHTML ="10-150 minuter";

     //#region Frågor och svar

    // Får du raka håret före behandlingen?
    dragspel1Rubrik.innerHTML = "Får du raka håret före behandlingen?";
    dragspelFirstTip.innerHTML = "Ja, du bör raka håret 1-2 dagar innan du gör en hårborttagning med diodlaser. Däremot bör du inte plocka bort hårstråna med pincett eller dra ut dem med tråd eller liknande, eftersom själva hårroten måste finnas kvar inne i huden för att behandlingen ska fungera. Kvinnor bör inte raka sitt ansikte inför en behandling.";

    // Kan alla hårstrån behandlas?
    dragspel2Rubrik.innerHTML = "Kan alla hårstrån behandlas?";
    dragspel2FirstTip.innerHTML = "Nej, hårborttagning fungerar inte på ljusa eller väldigt tunna hårstrån. Vid en konsultation kan vi bedöma om behandlingen fungerar för dig. Vid osäkra fall kan du också göra en liten provbehandling.";

    // Kan alla göra permanent hårborttagning?
    dragspel3Rubrik.innerHTML = "Kan alla göra permanent hårborttagning?";
    dragspel3FirstTip.innerHTML = "Nej, om du har mörk hud eller är väldigt solbränd kan du inte göra hårborttagning. En tumregel är att det ska vara en tydlig färgskillnad mellan hårstråna som du vill ta bort och den omgivande huden.";

    // Hur många behandlingar behövs?
    dragspel4Rubrik.innerHTML = "Hur många behandlingar behövs?";
    dragspel4FirstTip.innerHTML = "Alla hårsäckar har inte hårstrå i sig. Man säger att de har olika växtfaser, de som har hårstrå är i växtfas, de som saknar hårstrå ligger i vilofas. Det är bara 20-30% av alla hårstrån som är i växtfas samtidigt. Ljuset påverkar bara hårsäcken när den är i växtfas, därför behövs det mer än en behandling.";

    // Vi behandlar många olika områden på kroppen
    dragspel5Rubrik.innerHTML = "Vi behandlar många olika områden på kroppen";
    dragspel5FirstTip.innerHTML = "Vi behandlar många olika områden på kroppen, till exempel ansikte, armhålor, bikinilinje, ben och rygg på både kvinnor och män. Ja, i stort sett hela kroppen kan behandlas. Ljuset passerar genom huden till hårsäcken där hårroten förstörs. Behandlingen tar säkerligen bort hundratals hårstrån på bara någon sekund.";

    // Hur lång tid tar behandlingen?
    dragspel6Rubrik.innerHTML = "Hur lång tid tar behandlingen?";
    dragspel6FirstTip.innerHTML = "Stora ytor som armar och ben kan behandlas snabbt. Hela ben eller armar behandlas på 30-60 minuter. Ansiktsregionen som överläpp och haka behandlas på bara ett par minuter.";

    // Försvinner alla hårstrån direkt?
    dragspel7Rubrik.innerHTML = "Försvinner alla hårstrån direkt?";
    dragspel7FirstTip.innerHTML = "En del hårstrån faller bort direkt, en del hårstrån faller bort under de kommande veckorna. Du bör inte vaxa eller plocka hårstrån före behandling med diodlaser. Däremot kan du raka eller klippa ner hårstråna så att de är korta där du har hårväxt. Efter 8-10 behandlingar är du oftast av med den mesta hårväxten på ett område.";

    // Vilka typer av hår kan behandlas?
    dragspel8Rubrik.innerHTML = "Vilka typer av hår kan behandlas?";
    dragspel8FirstTip.innerHTML = "Hårborttagning fungerar på alla hårstrån som är mörka och innehåller pigment så länge huden inte är för mörk. Du bör inte vara alltför solbränd vid hårborttagning och det finns en rad läkemedel som du inte får ta när du gör behandling med diodlaser. Vita hårstrån går oftast inte att ta bort.";

    // Hygien?
    dragspel9Rubrik.innerHTML = "Hygien?";
    dragspel9FirstTip.innerHTML = "Viktigt att du är nyduschad och fräsch inför din behandling.";

    // Behandlar ni alla delar på kroppen?
    dragspel10Rubrik.innerHTML = "Behandlar ni alla delar på kroppen?";
    dragspel10FirstTip.innerHTML = "Vi behandlar i stort sett hela kroppen med vissa undantag där det kan finnas slemhinnor.";

    // Vilka maskiner använder ni vid hårborttagning?
    dragspel11Rubrik.innerHTML = "Vilka maskiner använder ni vid hårborttagning?";
    dragspel11FirstTip.innerHTML = "Vi använder Sapphire diodlaser vid behandling. Sapphire är den senaste lasertekniken och är marknadens kraftfullaste lasermaskin med 2400W och ger mellan 10Hz-15Hz per sekund i uteffekt vilken ingen annan diodlaser når upp till. Det är också det som avgör hur många behandlingar du behöver göra. Stora ytor kan behandlas snabbt och skonsamt vilket innebär att du får en effektiv och snabb behandling med mycket goda dokumenterade resultat.";

    // Hur ofta ska behandlingarna ske?
    dragspel12Rubrik.innerHTML = "Hur ofta ska behandlingarna ske?";
    dragspel12FirstTip.innerHTML = "Vanligtvis sker behandlingarna med 1-2 månaders mellanrum, beroende på lokalisation och hur snabb hårväxt du har, vilket är individuellt och dessutom helt beroende på vilken del på kroppen det gäller. I armhålor, bikinilinje och underben samt ansikte så kommer håret tillbaka fortare än på andra ställen. En del patienter har så snabb och intensiv hårväxt att du kan göra behandling var tredje vecka, hos andra kan ett intervall på 6-8 veckor vara bäst. Det är dags att behandla igen när du upplever att tillräckligt med nya hårstrån kommit upp igen. Har du bara fått ett litet antal nya hårstrån är det bättre att vänta något.";

    // Vilken effekt får jag av behandlingen?
    dragspel13Rubrik.innerHTML = "Vilken effekt får jag av behandlingen?";
    dragspel13FirstTip.innerHTML = "Hur många behandlingar som krävs är beroende av en mängd faktorer såsom färg på hårstrån (mörka hår svarar bättre än ljusa och grå), hudfärg (ljusare hud är lättare att behandla än mörkare hud), grovlek på hårstrån (tjockare hårstrån är lättare att behandla än tunna). Tidigare behandling med plockning och kan påverka behandlingsresultatet.";

    // Gör det ont?
    dragspel14Rubrik.innerHTML = "Gör det ont?";
    dragspel14FirstTip.innerHTML = "Ljuset kommer i snabba impulser så att du bara känner att det hettar till i huden. Det är en stickande känsla men inte så att det gör ont, även om vissa områden kan vara känsligare än andra.";

    // Är resultatet permanent?
    dragspel15Rubrik.innerHTML = "Är resultatet permanent?";
    dragspel15FirstTip.innerHTML = "Behandlingar för att ta bort oönskad hårväxt har utförts i över 25 år. Under denna långa tid har det i extremt få fall sett hårväxten komma tillbaka. För att kallas permanent måste en förändring enligt medicinsk terminologi kunna observeras i minst 30 år, och så länge har inte laserborttagning av hår utförts i världen. Men många kallar oftast laserborttagning av hår för permanent eftersom man har sett att hårväxten inte har återkommit under en så lång tid. Särskilt om man jämför med andra behandlingar som rakning, vaxning och plockning av hårstrån är laserborttagning av hår permanent.";

    // Vilka komplikationer kan du få?
    dragspel16Rubrik.innerHTML = "Vilka komplikationer kan du få?";
    dragspel16FirstTip.innerHTML = "Komplikationer är mycket sällsynta. Rodnad, blåsor och lätt klåda kan ibland uppstå, men brukar försvinna inom några dagar. I sällsynta fall kan huden tillfälligt bli ljusare eller mörkare (hyperpigmenterad). Denna hyperpigmentering uppstår hos mindre än 1% av våra kunder och är tillfällig och försvinner efter en eller några månader.";

    // Vad ska du tänka på före behandlingen?
    dragspel17Rubrik.innerHTML = "Vad ska du tänka på före behandlingen?";
    dragspel17FirstTip.innerHTML = "Du ska inte sola 1 vecka innan och 1 vecka efter en laserbehandling med Sapphire diodlaser. Vid behandling i ansiktet bör du ha några dagars skäggväxt så att håren syns. Du ska inte använda solningsspray eller brun utan sol krämer innan din behandling. Du ska inte använda starka kortisonkrämer före eller efter behandlingen. Om du har brännmärken, skrubbsår eller blåsor i det område du vill behandla kan vi inte behandla där.";

    // Vad ska du tänka på efter behandlingen?
    dragspel18Rubrik.innerHTML = "Vad ska du tänka på efter behandlingen?";
    dragspel18FirstTip.innerHTML = "Du ska undvika att sola och använda solarium, inte vara i starkt solljus eller i varmt vatten, bada i pool eller hav samt träna på 48 timmar efter behandlingen. Du ska också undvika starka krämer och smink. Du ska skydda behandlingsområdet mot sol genom att använda solskyddskräm med minst faktor 30.";

    // Kan man ta sol innan behandling?
    dragspel19Rubrik.innerHTML = "Kan man ta sol innan behandling?";
    dragspel19FirstTip.innerHTML = "Nej, du bör inte sola 1 vecka innan behandlingen med diodlaser. Eftersom huden inte får vara solbränd och det ska vara en tydlig färgskillnad mellan hårstråna och huden.";

    // Kan man träna efter behandlingen?
    dragspel20Rubrik.innerHTML = "Kan man träna efter behandlingen?";
    dragspel20FirstTip.innerHTML = "Vi rekommenderar att du undviker träning och andra aktiviteter som gör att du svettas i 48 timmar efter behandlingen. Svettning kan irritera huden och eventuellt orsaka infektioner.";

    // Hur länge varar behandlingseffekten?
    dragspel21Rubrik.innerHTML = "Hur länge varar behandlingseffekten?";
    dragspel21FirstTip.innerHTML = "Efter att du har genomgått hela behandlingsprogrammet så kan håret vara borta för alltid. Men om du har hormonell obalans eller kroppen förändras av någon annan anledning så kan nya hårsäckar bildas. Därför kan man behöva göra någon enstaka behandling igen efter några år.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

    //#endregion
  }
   
  else if (treatment === "Svettbehandling") {
  
    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling";

    hairPic.src = './images/Laser.png';

    rubrik.innerHTML =  "Svettbehandling";
    informationOm.innerHTML = "Svettbehandling"
    miniRubrik.innerHTML = "Svettbehandling på Ideal Clinic";
    inledandeText.innerHTML = "Extrem svettning (Hyperhidros) drabbar en liten del av befolkningen, ungefär 2%. Det brukar börja under puberteten eller tidig vuxenålder och i ungefär hälften av fallen är det medfött."
    miniRubrik2.innerHTML ="Behandling av Hyperhidros";
    firststyckeText.innerHTML = "Hyperhidros orsakas av överaktivitet hos svettkörtlarna, vanligtvis i händer, fötter och armhålor, men också i andra begränsade områden på kroppen. Tillståndet innebär en överdriven svettning som är mycket kraftig och har ingen naturlig funktion i kroppen. Svettningarna kan leda till att personen som lider av det har en försämrad livskvalitet och ibland undviker vardagssituationer, arbete och sociala kontakter medvetet. De områden på kroppen som vanligtvis påverkas är armhålor, handflator, fötter och pannan där svettbehandling med injektioner har varit den mest effektiva metoden. Med hjälp av injektioner kan detta slags svettning behandlas effektivt. Behandlingen blockerar svettkörtlarna i cirka 6-7 månader, därefter behövs en ny behandling. Effekten förlängs efter varje behandling eftersom svettkörtlarna inte återfår sin fulla aktivitet mellan varje injektion. Resultatet är mycket säkert och ger inga allvarliga biverkningar. Svettbehandling med injektioner har inneburit en stor revolution för patienter med hyperhidros. Behandlingen ges i form av injektioner under huden på det drabbade området. När händerna behandlas ger vi alltid bedövning. För andra områden är bedövning mycket sällan nödvändigt. Ideal Clinic har en eller flera behandlare som är Certifierade för estetiska injektioner. Certifieringen utfärdas av Estetiska Injektionsrådet och utgör en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare som erbjuder dig som patient möjlighet att göra upplysta och trygga val. Kliniker som använder loggan ”Certifierad för estetisk injicering” har personal som har gått igenom denna examinationen. Alla som har rätt medicinsk utbildning och arbetar med estetiska injektionsbehandlingar kan certifiera sig och förväntas följa det etiska kontraktet som de förbinder sig till vid certifieringen."
    
    InfoCardPrice.innerHTML ="Från 4500kr";

    vissteduAtt.innerHTML = "Svettbehandling med injektioner är det vanligaste tillvägagångssättet att behandla överdriven svettning";
    estimeradTidText.innerHTML ="40 minuter";


          // Vad bör du ta hänsyn till innan en svettbehandling?
      dragspel1Rubrik.innerHTML = "Vad bör du ta hänsyn till innan en svettbehandling?";
      dragspelFirstTip.innerHTML = "Du bör inte ha utslag eller finnar på det område som ska behandlas.<li>\Du skall inte ha någon pågående herpesinfektion i kroppen eller på det område som ska behandlas.<li>\Du skall inte vara gravid eller amma.<li>\Om du har tagit mediciner som Treo eller Ipren eller liknande, kan du lättare få blåmärken vid det område som ska behandlas.<li>\För att minska smärta kan du köpa Emla-salva på apoteket och applicera ett tjockt lager på det område som ska behandlas ca 1 timme innan behandlingen.<li>\Du bör inte träna samma dag som behandlingen utförs.";

      // Vad bör du ta hänsyn till efter efter svettbehandling? 
      dragspel2Rubrik.innerHTML = "Vad bör du ta hänsyn till efter efter svettbehandling?";
      dragspel2FirstTip.innerHTML = "Efter en injektionsbehandling är det viktigt att inte röra vid det behandlade området under 6 timmar.<br>\<br> <strong> Följande punkter är också viktiga att tänka på efter en svettbehandling: </strong>\ <br>\<br>\ <li>\Du bör inte utföra någon annan typ av behandling på det aktuella området under 1 vecka.<li>\ Du ska inte träna samma dag som behandlingen.<li>\ Du ska undvika bastu och solarium under 1 vecka. <li>\Om du vill veta mer eller har fler frågor kan du alltid boka en tid för en konsultation med någon av våra behandlare vilket alltid är kostnadsfritt.";

      // När bör du märka resultat efter en svettbehandling?
      dragspel3Rubrik.innerHTML = "När bör du märka resultat efter en svettbehandling?";
      dragspel3FirstTip.innerHTML = "Du kommer att känna en effekt av behandlingen redan efter några få dagar, men för vissa kan det ta upp till 2 veckor för fullt resultat. Svettningar under armhålorna kommer gradvis att minska i en naturlig process.";

      // Hur länge håller botox i armhålorna?
      dragspel4Rubrik.innerHTML = "Hur länge håller botox i armhålorna?";
      dragspel4FirstTip.innerHTML = "Resultaten håller normalt i sig i upp till 4-6 månader, men Botox i armhålorna kan ofta vara längre hållbar hos vissa personer och kan hålla upp till 9-12 månader.";

      dragspel22Rubrik.innerHTML = "Konsultation";
      dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";


      let accordions = document.getElementsByClassName("accordion-item");

      // Convert the HTMLCollection to an array
      let accordionArray = Array.from(accordions);
      
      accordionArray.forEach(accordion => {
        // Check if the accordion has no text content
        if (accordion.textContent.trim().length === 0) {
          // Remove the accordion from the DOM
          accordion.parentNode.removeChild(accordion);
        }
      });
  }

  else if (treatment === "Ärrbehandling") 
  {

    hairPic.src = './images/Micro needling klar.jpg';

    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";


    rubrik.innerHTML = "Ärrbehandling";
    informationOm.innerHTML = "Ärrbehandling"
    miniRubrik.innerHTML = "Ärrbehandling (Microneedling) på Ideal Clinic";
    inledandeText.innerHTML = "Microneedling, även känt som mikronålning, är en av de mest effektiva behandlingarna för att minska synligheten av acneärr och andra ärr. Behandlingen utförs med en nål-försedd penna som innehåller hundratals mikronålar. När nålarna penetrerar huden skapas tusentals mikrokanaler djupt ner i huden. Varje punkt stimulerar till en ökning av kollagen och elasticitet, vilket resulterar i en jämnare och slätare hud med mindre synliga ärr. Microneedling ger utmärkta resultat i ansiktet, speciellt vid behandling av acneärr."
    miniRubrik2.innerHTML ="Vad är syftet med behandlingen?";
    firststyckeText.innerHTML = "Syftet med behandlingen är att orsaka en kontrollerad skada på huden, som i sin tur startar en läkningsprocess som leder till ett gynnsamt hudföryngringsresultat. Genom mikrokanalerna som skapas under behandlingen, kan bioaktiva substanser som innehåller hyaluronsyra och en vitamin-cocktail tränga in djupt i huden och ge den näring som den behöver. Detta ökar upptaget av aktiva ingredienser och kan öka effekten av hudvårdsprodukter upp till 50%, jämfört med den vanliga 0,3% som normalt når de djupare hudlagren."
    secondstyckeText.innerHTML = "För att behandla fördjupningar och gropar i acneärr, kan Microneedling kombineras med Skinbooster för att lyfta upp dessa områden. I dessa fall kan vi använda en kombination av tunnflytande Skinboosters, såsom Juvederm Volite eller Restylane Vital. Om acneärr är milda och mindre framträdande, kan kemisk peeling vara ett lämpligt och prisvärt alternativ.";
    thirdstyckeText.innerHTML ="För att få ut så mycket som möjligt av en behandling med microneedling, är det viktigt att du tillför serum till huden som innehåller en hög koncentration av hyaluronsyra, samt vitaminer och antioxidanter. Detta är nödvändigt för att huden ska kunna dra full nytta av de mikrokanaler som skapats under behandlingen, eftersom huden lättare kan ta upp de aktiva ingredienserna. På Ideal Clinic använder vi oss av serumet Skinko, som innehåller marknadens högsta koncentration av hyaluronsyra - det viktigaste ämnet som ett microneedling-serum ska innehålla. Hyaluronsyra är det mest värdefulla ämnet i ett serum, då det hjälper till att återfukta och ge näring till huden. Efter behandlingen, du får även en återfuktande ansiktsmask som lugnar ner huden, för att ytterligare hjälpa huden att återhämta sig. Vi på Ideal Clinic har en lång erfarenhet av behandling av acneärr och vi kan hjälpa dig att välja den bästa behandlingen för dina ärr vid en konsultation."

    InfoCardPrice.innerHTML ="Från 500kr";
   
    vissteduAtt.innerHTML = "Våra specialister har en lång erfarenhet av behandling av acneärr och kan hjälpa dig att välja den bästa behandlingen för dina ärr vid en konsultation.";
    estimeradTidText.innerHTML ="Behandlingen tar mellan 20-40 minuter beroende på området.";


        // Vad är microneedling?
    dragspel1Rubrik.innerHTML = "Vad är microneedling?";
    dragspelFirstTip.innerHTML = "Microneedling är en behandling som använder mikronålar för att skapa mikrokanaler i huden. Nåltätheten och den genomtänkta konstruktionen av nålarnas diameter gör att behandlingen är skonsam och ger en god penetration och jämn tryckfördelning. Vid behandling av acneärr gör vi oftast 3 till 5 behandlingar med en månads mellanrum, vilket ger kraftfulla resultat med en kort återhämtningstid. Efter behandlingen kan du ha en lätt rodnad och svullnad i huden, men det räcker med att vara hemma under behandlingsdagen för att rodnaden ska minska.";

    // Vilka områden kan behandlas?
    dragspel2Rubrik.innerHTML = "Vilka områden kan behandlas?";
    dragspel2FirstTip.innerHTML = "Microneedling kan användas på flera olika områden såsom:<br>Ansikte<br>Dekolletage<br>Kropp";

    // Vilka får inte utföra microneedling?
    dragspel3Rubrik.innerHTML = "Vilka får inte utföra microneedling?";
    dragspel3FirstTip.innerHTML = "Personer som tar Roaccutan eller andra acnemediciner.<li>\Gravida eller ammande.<li>\Personer med öppna eller infekterade sår.<li>\Diabetiker.<li>\Personer med kronisk hudsjukdom, nervskada, eller personer som har strålbehandlats eller genomgått ansiktskirurgi eller laserbehandling under det senaste året bör också undvika microneedling.";

    // Hur lång tid tar behandlingen?
    dragspel4Rubrik.innerHTML = "Hur lång tid tar behandlingen?";
    dragspel4FirstTip.innerHTML = "Tiden varierar beroende på område, behandlingen kan ta mellan 20-60 minuter.";

    // Acneärr och acnemärken?
    dragspel5Rubrik.innerHTML = "Acneärr och acnemärken?";
    dragspel5FirstTip.innerHTML = "Det är svårt att få bort djupa acneärr helt och hållet eftersom ärrvävnad är permanent. Däremot kan du få en stor förbättring. Röda och bruna fläckar kan behandlas med kemisk peeling och microneedling. Men om du har mild acne så kan du utföra kemisk peeling. Det rekommenderas att du väntar med behandling av ärr tills du blir av med acnen, för att undvika nya ärr och acne. Annars så kan du utföra kemisk peeling när du har mild acne.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });
    

  }

  else if (treatment === "Retinol Peeling") 
  {
    hairPic.src = './images/Laser.png';

    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "Retinol Peeling";
    informationOm.innerHTML = "Hudbristning"
    miniRubrik.innerHTML = "Retinol Peeling på Ideal Clinic";
    inledandeText.innerHTML = "Retinol Peeling NeoStrata Retinol Peel är en unik peel som innehåller Retinol och volymgivande Aminofill för att förbättra hudens struktur, spänst, ge en jämnare hudton och minska linjer och rynkor. Peelingen är ytlig och kräver minimal återhämtningstid, och passar de flesta hudtyper. Det är en snabb, enkel och effektiv peeling som påbörjas på kliniken och avlägsnas hemma."
    miniRubrik2.innerHTML ="Så här går det till";
    firststyckeText.innerHTML = "Retinolpeeling från NeoStrata innehåller Vitamin E, Bisabolol, Aminofil, NeoCitriate och 3% Retinol. Aminofil och Retinol gör att huden exfolierar, det vill säga att den flagnar av. Behandlingen utförs på kliniken och avlägsnas av dig själv hemma efter 3-8 timmar. Du kommer inte att känna någon obehag efter appliceringen. Exfolieringsprocessen startar inom 2-4 dagar och pågår vanligtvis i en vecka. Efter exfoliering kommer du att märka förbättringar i hudens struktur, spänst, lyster och hudton."
   
    InfoCardPrice.innerHTML ="Från 1500kr";
   
    vissteduAtt.innerHTML = "Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val.";
    estimeradTidText.innerHTML ="Behandlingen tar mellan 30-60 minuter beroende på området.";

        // För vem passar behandlingen?
    dragspel1Rubrik.innerHTML = "För vem passar behandlingen?";
    dragspelFirstTip.innerHTML = "Retinol peelingen passar de flesta hudtyper och toner, särskilt:<br>Personer med aktiv acne<br>Personer med orenheter eller ojämn hudton<br>Personer med pigmentförändringar på huden";

    // Vilka områden kan behandlas?
    dragspel2Rubrik.innerHTML = "Vilka områden kan behandlas?";
    dragspel2FirstTip.innerHTML = "Behandlingen kan utföras på ansikte, hals, dekolletage och handryggar";

    // Reducera ålderstecken, aktiv acne, pigmentförändringar och ojämn hudton
    dragspel3Rubrik.innerHTML = "Reducera ålderstecken, aktiv acne, pigmentförändringar och ojämn hudton";
    dragspel3FirstTip.innerHTML = "Retinol peeling tar bort gamla hudceller och återställer hudens kvalitet. Den reducerar mindre rynkor, stramar upp huden, reducerar ärr, hudbristningar och acne, minskar porer och dämpar pigmentförändringar och solskador. Det är ett bra alternativ för den som vill åtgärda flera problem på en gång. Ny och friskare hud uppnås genom en effektiv och djupgående behandling med Retinol peeling. Vi applicerar olika lösningar på huden för att avlägsna det yttre döda lagret och stimulera till nybildning av nya celler.";

    // Att tänka på efter behandlingen
    dragspel4Rubrik.innerHTML = "Att tänka på efter behandlingen";
    dragspel4FirstTip.innerHTML = "Du bör undvik hudvårdsprodukter som innehåller retinoider eller andra exfolierande produkter en vecka innan behandlingen. <li>\ Du bör inte utsätta de behandlade områdena för solen under 3-4 veckor efter behandlingen.<li>\Om du gör flera behandlingar bör du vänta 6-8 veckor mellan varje behandling.<li>\ Retinol behandlingen kan göras som en enskild behandling.<li>\Efter behandlingen kan det uppstå lätt rodnad i några dagar.";

    // Behandlar man alla pigmentförändringar på samma sätt?
    dragspel5Rubrik.innerHTML = "Behandlar man alla pigmentförändringar på samma sätt?";
    dragspel5FirstTip.innerHTML = "Nej, hur man behandlar en pigmentförändring beror på dess djup och typ. Det finns epidermala, dermala eller mixade förändringar, epidermala är lättare att ta bort än dermala. Pigmentförändringar kan också vara intra eller extracellulära.<br>Handryggar: Pigmentfläckar på handryggarna kan också behandlas.<br>Vilken typ av förändring det är kan du få reda på genom ett besök på kliniken, där gör hudterapeuten en bedömning och föreslår vilken metod som är lämplig att ta bort pigmentförändringen.<br>Test behandling: Det kan också vara lämpligt att göra en testbehandling för att se om pigmentfläcken svarar på behandlingen.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

    
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

  }

  else if (treatment === "Profhilo") 
  {

    hairPic.src = './images/hello.png';


    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "Profhilo";
    informationOm.innerHTML = "Profhilo"
    miniRubrik.innerHTML = "Profhilo på Ideal Clinic";
    inledandeText.innerHTML = "Profhilo är en revolutionerande och innovativ estetisk behandling som riktar sig direkt på slapp hud och fokuserar på att bygga vävnad. PROFHILO® är den första hyaluronsyra-baserade produkten som helt saknar kemiska tvärbindningsmedel (BDDE) och är unik i sin förmåga att återskapa förlorad vävnad.";
    
    miniRubrik2.innerHTML ="Minskning av slapp hud.";
    firststyckeText.innerHTML = "Den åtstramande effekten är ett resultat av hyaluronsyrans höga molekylvikt som neutraliserar slapp hud och ger en lätt lyftning. PROFHILO® är din nya allierade mot åldrande som ger näring till hudceller och återställer fasthet i huden, med en förlängd hållbarhet. Det är en produkt med mycket god vävnadsintegration, som består av mycket ren kvalitetshyaluronsyra producerad genom biofermentering. På grund av sin höga renhet och frånvaro av tillsatser, inklusive BDDE som många andra fillers innehåller, erbjuder PROFHILO® större säkerhet och därför färre biverkningar. Den patenterade tekniken för PROFHILO® ger en förlängd hållbarhet. Bara fem injektioner krävs för att erbjuda en maximal komfortabel behandling med synliga resultat efter bara två sessioner. 5-punktsbehandling (BAP-teknik).BAP-tekniken (Bio Aesthetic Points), som granskats och utvecklats av IBSA, baseras på fem injektionsställen som särskilt väljs för att minimera riskerna och maximera spridningen av produkten i ansiktet. Faktum är att PROFHILO® är speciellt utformad för behandling av hudens slapphet i malar- och submalarområdena. Det injiceras i det djupa hudlagret. Hybridkombinationen möjliggör återstabilisering av fysiologiska nivåer av endogen hyaluronsyra och förbättring av hudens fukt.";
   
    miniRubrik3.innerHTML ="Varför Profhilo?";
    secondstyckeText.innerHTML = "PROFHILO är en mycket ren produkt som består av hyaluronsyra som har producerats genom biofermentering. På grund av sin höga renhet och frånvaro av tillsatser erbjuder PROFHILO ökad säkerhet och därmed färre biverkningar. Den patenterade tekniken för PROFHILO återskapar även förlorad vävnad, vilket inte är möjligt med filler eller Skinbooster.";
    thirdstyckeText.innerHTML="Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val. Kliniker som använder loggan Certifierad för estetisk injicering har personal som har genomgått denna examination. All personal med rätt medicinsk utbildning som arbetar med estetiska injektions behandlingar kan certifiera sig och förväntas följa det etiska kontrakt som de förbinder sig till vid certifieringen. För mer information besök www.estetiskainjektionsradet.se Är du intresserad av en behandling – eller vill du veta mer? Välkommen att höra av dig till oss på Ideal Clinic!";

    InfoCardPrice.innerHTML ="Från 3400kr";
   
    vissteduAtt.innerHTML = "Ideal Clinic har en eller flera behandlare som är certifierade för estetisk injicering av Estetiska Injektionsrådet. Certifieringen är en trovärdig kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare och ger patienterna möjlighet att göra upplysta och trygga val.";
    estimeradTidText.innerHTML ="30 Minuter";

        // För vem är denna behandling lämplig?
    dragspel1Rubrik.innerHTML = "För vem är denna behandling lämplig?";
    dragspelFirstTip.innerHTML = "Med åren förlorar vi vävnad och fettdepåer vilket kan göra att du ser trött och äldre ut. Profhilo lämpar sig bäst för dig som har förlorat volym i ansiktet och önskar få tillbaka den ungdomliga fylligheten, spänsten och mer 'liv' i ansiktet. Behandlingen har en lätt återfuktande effekt som ger lyster. Behandlingen är därför rekommenderad för personer som är runt 30 år eller om du upplever dessa ålderstecken i tidigare ålder.";

    // Hur många behandlingar behöver jag?
    dragspel2Rubrik.innerHTML = "Hur många behandlingar behöver jag?";
    dragspel2FirstTip.innerHTML = "Profhilo utförs alltid i kur med flera behandlingar för att ge önskad effekt. Efter den initiala kuren rekommenderar vi att du gör en behandling 2-3 gånger per år.";

    // Vad innehåller Profhilo?
    dragspel3Rubrik.innerHTML = "Vad innehåller Profhilo?";
    dragspel3FirstTip.innerHTML = "Profhilo består av högkvalitativ hyaluronsyra i ren form. Produkten har inte några tvärbindningstillsatser vilket gör den unikt ren.";

    // När kan jag se skillnad?
    dragspel4Rubrik.innerHTML = "När kan jag se skillnad?";
    dragspel4FirstTip.innerHTML = "Redan efter första behandlingen kan vissa uppleva den föryngrande effekten av Profhilo, dels genom en fylligare vävnad, dels mer spänst. Dessa resultat förstärks redan efter andra behandlingen för att nå maximal effekt efter tredje behandlingen, cirka en vecka efter.";

    // Hjälper Profhilo mot torr hud?
    dragspel5Rubrik.innerHTML = "Hjälper Profhilo mot torr hud?";
    dragspel5FirstTip.innerHTML = "Profhilo har en återfuktande effekt och hjälper din hud att få mer fukt och lyster på ett effektivt sätt. Men om du önskar mer återfuktning så kan Skinbooster vara ett bättre alternativ, detta bör dock diskuteras under en konsultation vilket alltid är kostnadsfritt här på Ideal Clinic.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

    
  }
  else if (treatment === "Filler") 
  {


      hairPic.src = './images/Fillers.png';


    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";


    rubrik.innerHTML = "Fillers";
    informationOm.innerHTML = "Fillers"
    miniRubrik.innerHTML = "Fillers på Ideal Clinic";
    inledandeText.innerHTML = "Vilka områden kan behandlas med fillers? Fillers kan användas för att förbättra läpparna, kindbenen, och näsan, jämna ut nasolabialvecken och påsar under ögonen, definiera haka och käklinjen, och reducera fina linjer. De kan även användas för att återställa fyllighet och ungdomliga konturer i områden på ansiktet som har förlorat volym på grund av åldrande. Många väljer fillers framför kirurgi för att korrigera en krokig eller sned näsa eftersom de erbjuder en mer kostnadseffektiv och icke-invasiv alternativ. Resultat med fillers är ofta omedelbara, och kan hjälpa dig att uppnå ett ungdomligare och uppfriskat utseende.";
    miniRubrik2.innerHTML ="Vad kan jag behandla med fillers?";
    firststyckeText.innerHTML = "Vi på Ideal Clinic arbetar med bland annat Juvederm, som är det mest framstående märket av fillers som finns på marknaden. Dessa injiceras i valda delar av ansiktet för att fylla ut rynkor, nasolabialvecken, kindbenen, näsan, eller för att fylla ut läpparna. Behandlingen syftar till att strama upp, bygga volym, och göra ansiktet jämnare. Vi strävar alltid efter ett naturligt resultat som gör att du blir ännu vackrare och känner dig ännu mer nöjd med din hud och ditt utseende.";
    secondstyckeText.innerHTML = "Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling. Den hyaluronsyra som skapas naturligt i våra kroppar bryts ner på fem dagar, och kroppen producerar därför ständigt ny hyaluronsyra. När vi blir äldre minskar kroppens produktion av syran, vilket leder till att huden tappar volym, lyster och fukt, vilket kan orsaka rynkor, veck och fina linjer. Därför väljer många att injicera fillers för att motverka detta.";

    miniRubrik4.innerHTML ="Hur går en behandling till?";
    thirdstyckeText.innerHTML = "Vi börjar alltid behandlingen med att rengöra området som ska behandlas. Därefter injicerar vi fillern med en tunn nål. Du kan känna en stickande känsla och en känsla av spänning i huden under injiceringen. Fillern lyfter därefter upp rynkan eller bygger volym, beroende på vad som önskas, vilket ger ett omedelbart synligt resultat. Om du ska behandla läpparna kan du känna smärta, så vi erbjuder lokalbedövning kostnadsfritt för den som vill ha det.";

    InfoCardPrice.innerHTML ="Från 2300kr";
   
    vissteduAtt.innerHTML = "Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.";
    estimeradTidText.innerHTML ="30-60 Minuter";

        // Hur många sprutor behövs?
    dragspel1Rubrik.innerHTML = "Hur många sprutor behövs?";
    dragspelFirstTip.innerHTML = "Som regel behövs en ampull, dvs 1 ml, för att göra en förstoring av läpparna. Andra områden beror helt på hur mycket volym som behöver byggas upp eller hur djup en rynka är. Vanligtvis räcker det med en spruta för att få en större läpp vid första behandlingen. Men om du vill ha en mer markant förstoring kan det behövas fler sprutor vid kommande behandlingar. Många vill dock inte ha för stora läppar utan nöjer sig med en mindre uppfräschning med mer markerade läppar som resultat. För att åstadkomma rätt balans och ett naturligt resultat fördelas en större del av injiceringen vid underläppen i jämförelse med överläppen. Har du en ojämnhet eller snedhet kan vi också försöka korrigera detta under behandlingen.";

    // Gör det ont?
    dragspel2Rubrik.innerHTML = "Gör det ont?";
    dragspel2FirstTip.innerHTML = "De fillers som vi använder innehåller oftast lokalbedövning vilket gör att behandlingen känns väldigt lite. För den som önskar kan vi erbjuda lokalbedövning i form av salva med minst 10% Lidokain för att minska smärta.";

    // Hur känns det efteråt?
    dragspel3Rubrik.innerHTML = "Hur känns det efteråt?";
    dragspel3FirstTip.innerHTML = "Läpparna svullnar ofta lite efter behandlingen och det kan ta ett par dagar innan svullnaden har lagt sig helt. Det kan därför vara bra att inte planera något viktigt samma dag som behandlingen görs. Det kan kännas lite bedövat runt läpparna efter behandlingen, detta beror på bedövningen och försvinner efter någon timme.";

    // Hur många behandlingar behövs?
    dragspel4Rubrik.innerHTML = "Hur många behandlingar behövs?";
    dragspel4FirstTip.innerHTML = "Läppar har en snabbare absorptionsförmåga av fillers i förhållande till andra delar av ansiktet, därför krävs det ofta en uppbyggnadsfas för att uppnå bästa möjliga resultat. Uppbyggnadsfasen kräver oftast 2 till 3 behandlingar beroende på individ. Som regel behövs påfyllning en till två månader efter första besöket för att bibehålla och uppnå ett långvarigt och naturligt resultat.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    let accordions = document.getElementsByClassName("accordion-item");

    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });


  }

  else if (treatment === "Behandling mot dubbelhaka") 
  {

    hairPic.src = './images/Fillers.png';



    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "Belkyra";
    informationOm.innerHTML = "Behandling mot dubbelhaka";
    miniRubrik.innerHTML = "Behandling mot dubbelhaka på Ideal Clinic";
    inledandeText.innerHTML = "Belkyra (deoxicholsyra) är en injektionsbehandling som reducerar envist och oönskat fett under hakan. Med hjälp av Belkyra kan dubbelhakan försvinna och hakprofilen kan förbättras redan efter en behandling. På Ideal Clinic har vi en eller flera behandlare som är Certifierade av Estetiska Injektionsrådet. Certifieringen är en kvalitetsstämpel för behandlande läkare, sjuksköterskor och tandläkare, och garanterar att våra behandlare har kompetens och erfarenhet inom området. Vi är också sedan 2018 en Juvederm-klinik, vilket innebär att vi är certifierade inom injektionsbehandlingar och att våra behandlare följer etiska regler och riktlinjer.";
    miniRubrik2.innerHTML ="Vad är Belkyra®?";
    firststyckeText.innerHTML = "Belkyra är ett FDA-godkänt läkemedel som används för att eliminera oönskat fett under hakan. Belkyra, som även är godkänt av läkemedelsverket, går under namnet Kybella i USA. Belkyra är en icke-kirurgisk behandling som förstör fettcellerna permanent, och som kan ge en mer markerad haka och en mer symmetrisk ansiktsprofil. Belkyra innehåller deoxicholsyra, vilket är en aktiv substans som finns naturligt i kroppen med uppgift att underlätta nedbrytningen av fett. Deoxicholsyran i Belkyra är av icke-human och icke-animalisk form som inte härstammar från människa eller djur.";
    miniRubrik4.innerHTML ="Behandling av överflödigt fett under hakan";
    thirdstyckeText.innerHTML = "Överflödigt fett under hakan kan uppstå av olika anledningar. De vanligaste orsakerna är ärftliga faktorer, åldrande eller viktuppgång. Trots träning och kost kan det envisa fettet under hakan kvarstå, vilket kan vara psykiskt påfrestande. En behandling med Belkyra är alltid individuellt anpassad och resultatet är permanent.";

    InfoCardPrice.innerHTML ="Från 8500kr";
   
    vissteduAtt.innerHTML = "Hyaluronsyra, som våra fillers består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.";
    estimeradTidText.innerHTML ="40 Minuter";

        // Hur går behandlingen till?
    dragspel1Rubrik.innerHTML = "Hur går behandlingen till?";
    dragspelFirstTip.innerHTML = "Först går vi igenom dina förutsättningar. Liksom alla våra behandlingar börjar vi med en konsultation där vi går igenom dina önskemål, förutsättningar och vilka resultat du kan förvänta dig.";

    // Hur lång tid tar behandlingen?
    dragspel2Rubrik.innerHTML = "Hur lång tid tar behandlingen?";
    dragspel2FirstTip.innerHTML = "Behandlingen tar ca 30-40 minuter, beroende på hur stort område som behandlas. Tidsåtgången inkluderar både behandling och bedövning.";

    // Gör det ont?
    dragspel3Rubrik.innerHTML = "Gör det ont?";
    dragspel3FirstTip.innerHTML = "Eftersom vi alltid ger effektiv bedövning innan behandlingen, upplever de flesta ingen större smärta vid en behandling hos oss. Vissa kan känna ett spänningstillstånd vid injektionen.";

    // Hur många behandlingar behöver jag göra?
    dragspel4Rubrik.innerHTML = "Hur många behandlingar behöver jag göra?";
    dragspel4FirstTip.innerHTML = "Mängden överflödig hud under hakan kan minskas vid varje behandlingstillfälle och resultatet syns redan efter några veckor. Den som vill uppnå ännu mer effekt kan behandlas igen efter cirka 4 veckor. Patienter som behandlats med Belkyra upplever en synlig förbättring av hakprofilen redan efter 1–2 behandlingar. Resultatet är dock individuellt och hur många behandlingar som behövs varierar beroende på exempelvis mängden fett under hakan.";

    // Vilka eventuella biverkningar kan uppstå?
    dragspel5Rubrik.innerHTML = "Vilka eventuella biverkningar kan uppstå?";
    dragspel5FirstTip.innerHTML = "Efter behandlingen kan man få blåmärken vid det behandlade området. Minskad känslighet, smärta och svullnad/vätskeansamling är andra biverkningar som kan uppstå. Dessa effekter är i allmänhet tillfälliga och försvinner vanligtvis av sig själva.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });




  }

  else if (treatment === "Skinbooster") 
  {

    hairPic.src = './images/sunasfixar.jpg';


    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "Skinbooster";
    informationOm.innerHTML = "Skinbooster"
    miniRubrik.innerHTML = "Skinbooster på Ideal Clinic";
    inledandeText.innerHTML = "Skinbooster ger djupgående återfuktning, förbättrar hudens kvalitet och ger den en naturlig lyster. Det innehåller en speciell form av hyaluronsyra som är ett naturligt förekommande ämne i kroppen och har förmågan att binda vatten. Behandlingen innebär att hyaluronsyran injiceras i mikrodoser under huden och drar till sig vatten för att ge långvarig återfuktning. Denna behandling syftar till att göra huden mjuk, slät och återfuktad istället för att bygga volym som vanliga fillers gör. Skinbooster innehåller även ett antioxidantmedel som hjälper till att skydda huden mot fria radikaler och förlänger effekten av behandlingen.";
  
    InfoCardPrice.innerHTML ="Från 3400kr";
   
    vissteduAtt.innerHTML = "Hyaluronsyra, som våra skinboosters består av, är en bindvävssubstans som finns naturligt i vår kropp och har en stark förmåga att binda vatten. Det är denna förmåga som ger huden volym och fräschhet efter en fillerbehandling.";
    estimeradTidText.innerHTML ="30 Minuter";

          // När bör du börja behandla dig?
    dragspel1Rubrik.innerHTML = "När bör du börja behandla dig?";
    dragspelFirstTip.innerHTML = "Skinbooster rekommenderas vanligtvis från omkring 23 års ålder, eftersom kroppens egen produktion av hyaluronsyra minskar redan vid den åldern. Generellt så minskar produktionen drastiskt runt 30-årsåldern, vilket kan göra att huden förlorar sin lyster, volym och får en grå ton. Hyaluronsyra är den viktigaste faktorn för att hålla huden ung och glansig. Börja behandlingen så tidigt som möjligt, då rynkor och volymförlust är lättare att behandla när de är ”mjuka” än när de har blivit ”inrotade”.";

    // Behandlingsprogram och områden
    dragspel2Rubrik.innerHTML = "Behandlingsprogram och områden";
    dragspel2FirstTip.innerHTML = "Juvederm Volite är den mest avancerade Skinboostern och har en hållbarhet på 9-12 månader. Många väljer att behandla sig en gång per år. Ett vanligt behandlingsprogram med andra varumärken består av tre initiala behandlingar med 2-4 veckors mellanrum och en underhållsbehandling var 6:e månad. Områden som är lämpliga att behandla med Skinbooster är ansikte, hals, dekolletage och handryggar. Finare linjer och rynkor kan också behandlas effektivt med Skinbooster, eftersom det inte bygger volym utan istället fokuserar på återfuktning.";

    // När kan jag se resultat?
    dragspel3Rubrik.innerHTML = "När kan jag se resultat?";
    dragspel3FirstTip.innerHTML = "Resultatet av en Skinbooster-behandling kan ses redan efter 1 vecka, dels genom att du känner dig mer livad i huden och dels genom en fin och diskret lyster. För att få maximal effekt rekommenderar vi att dricka 2-3 liter vatten de dagarna efter behandlingen, eftersom hyaluronsyra behöver binda vatten de första dagarna. Skinbooster är mycket effektivt mot eksem och är kanske den mest effektiva metoden som finns idag.";

    // Fungerar Skinbooster mot eksem?
    dragspel4Rubrik.innerHTML = "Fungerar Skinbooster mot eksem?";
    dragspel4FirstTip.innerHTML = "Behandlingen minskar eksemen och ger huden en mer 'hudliknande' färg och lyster på områden där det har funnits eksem. Skinbooster injiceras ytligt i huden, så att produkten hamnar i hudlagret och inte försvinner i djupare lager som muskler.";

    // Hur injiceras Skinbooster i huden?
    dragspel5Rubrik.innerHTML = "Hur injiceras Skinbooster i huden?";
    dragspel5FirstTip.innerHTML = "Skinbooster injiceras ytligt i huden för att säkerställa att produkten hamnar i hudlagret och inte försvinner i djupare lager som muskler. Ibland används en vass nål eller en trubbig kanyl för detta syfte.";

    // Kan Skinbooster göras på hals och händer?
    dragspel6Rubrik.innerHTML = "Kan Skinbooster göras på hals och händer?";
    dragspel6FirstTip.innerHTML = "Ja, Skinbooster är en effektiv metod för att förnya huden på hals och händer. Det är lämpligt för personer som har bra vävnad på dessa områden och önskar den återfuktande effekten. Men om du har tappat vävnad på hals och händer, rekommenderar vi istället att använda Profhilo på dessa områden.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });
  

  }
  
  else if (treatment === "MicroTox") 
  {
    hairPic.src = './images/sunasfixar.jpg';


    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "MicroTox";
    informationOm.innerHTML = "MicroTox";
    miniRubrik.innerHTML = "Microtox på Ideal Clinic";
    inledandeText.innerHTML = "Microtox är en effektiv behandling för dig som bl.a. önskar påverka hudens åldrande och struktur utan att förlora den naturliga mimiken i ansiktet. Genom att en mindre mängd Botox injiceras i huden kan man reducera rynkor och fina linjer med ett mer naturligt slutresultat än vid traditionella rynkbehandlingar. Till skillnad från de traditionella behandlingarna för rynkor arbetar Microtox på hudens yta för att undvika att påverka ansiktsmimiken, samtidigt som behandlingen verkar lystergivande och ger ett slätare helhetsintryck med hjälp av Hyaluronsyra och vitaminer. Det unika med denna behandling är att man kombinerar Botox med vitaminer och Hyaluronsyra för ett slätare och piggare utseende.";
    miniRubrik2.innerHTML ="Så här går en Microtox-behandling till:";
    firststyckeText.innerHTML = "Konsultation: Som med alla våra behandlingar börjar en Microtox-behandling med en konsultation där vi går igenom dina önskemål, förutsättningar och förväntade resultat.";

    miniRubrik4.innerHTML ="Behandling:";
    thirdstyckeText.innerHTML = "Behandlingen påbörjas genom att vår läkare eller sjuksköterska stämplar huden med en behållare som innehåller botox, hyaluronsyra och vitaminer. Microtox-behållaren har 20 tunna titannålar som är överdragna med 24k guld. Dessa nålar skapar små mikrokanaler ytligt i huden, genom vilka produkten slussas in. Injiceringen är ytlig, vilket gör att man kan minska porer och få lyster utan att ändra mimiken.";

    miniRubrik5.innerHTML ="Effekter:";
    fourthstyckeText.innerHTML = "Microtox ger många positiva effekter som associeras med ett fräscht yttre och är ofta en av de mest prisvärda behandlingarna för att snabbt se fräsch och pigg ut. Behandlingen är mest effektiv mot Fina linjer Stora porer Förebyggande mot åldrande Jämnare och slätare helhetsintryck";

    InfoCardPrice.innerHTML ="Från 3000kr";
   
    vissteduAtt.innerHTML = "En Microtox-behandling har effekt i ca 2-4 månader.";
    estimeradTidText.innerHTML ="Behandlingen tar ungefär 30 minuter beroende på behandlingsområdets storlek. Konsultationen är också inkluderad i den totala tidsåtgången.";


        // Hur många behandlingar behöver jag göra?
    dragspel1Rubrik.innerHTML = "Hur många behandlingar behöver jag göra?";
    dragspelFirstTip.innerHTML = "Resultatet av behandlingen varierar mellan individer. Men för att behålla effekterna brukar de flesta göra 3-4 behandlingar per år.";

    // Vem kan behandla sig med Microtox?
    dragspel2Rubrik.innerHTML = "Vem kan behandla sig med Microtox?";
    dragspel2FirstTip.innerHTML = "Alla, oavsett hudtyp, kan behandla sig med Microtox för att dra nytta av dess effekter. Likt andra injektionsbehandlingar, behandlar vi inte gravida eller ammande personer. Dessutom rekommenderar vi att du inte är förkyld, har feber, akne eller herpesutslag på ansiktet och att du har avslutat eventuella Tetralysal-kurer senast 14 dagar innan behandlingen. Du bör också inte ha använt produkter/behandlingar som innehåller Retin-A och BHA/AHA-syror under en vecka innan behandlingen.";

    // Finns det biverkningar?
    dragspel3Rubrik.innerHTML = "Finns det biverkningar?";
    dragspel3FirstTip.innerHTML = "Likt som vid andra injektionsbehandlingar kan du uppleva biverkningar efter Microtox-behandlingen, som viss smärta, rodnad, svullnad, blåmärken eller minskad känslighet i huden. Dessa biverkningar är oftast tillfälliga och övergående.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });
  }
  else if (treatment === "PRX-T33") 
  {


    hairPic.src = './images/KemiskPeeling.png';



    
    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "PRX-T33";
    informationOm.innerHTML = "PRX-T33";
    miniRubrik.innerHTML = "PRX-T33: En revolutionerande behandling";
    inledandeText.innerHTML = "PRX-T33 är en behandling som kallas för den nya generationens TCA-peeling, eftersom den ger liknande resultat som en TCA-peeling men utan sociala begränsningar. Den är effektiv och resultatinriktad och verkar på cellulär nivå, vilket ger din hudegenskaper som tidigare inte varit möjliga.";
    miniRubrik2.innerHTML ="Vilka områden och vad kan jag behandla med PRX-T33?";
    firststyckeText.innerHTML = "PRX-T33 är en nålfri behandling som använder sig av de aktiva substanserna TCA (triklorättiksyra och väteperoxid) för att aktivera cellförnyelsen. Behandlingen verkar på cellulär nivå och stimulerar hudens egna tillväxtfaktorer, vilket ger synliga resultat direkt efter behandlingen. Du kommer att känna och se skillnaden i form av uppstramning, lyster, jämnare hudton och färre linjer. Till skillnad från vanliga peelingar ger PRX-T33 knappt någon rodnad eller fjällning. Behandlingen kan även utföras året runt eftersom det inte ger ljuskänslighet, men det rekommenderas alltid att använda solskydd. PRX-T33 är även lämplig att kombinera med andra behandlingar såsom Dermapen, Botox, fillers, PRP och Profhilo.";

    miniRubrik4.innerHTML ="Behandlingsområden:";
    thirdstyckeText.innerHTML = "Ansiktet: Rynkor och linjer, förstorade porer, förlorad spänst och fyllighet, ojämn hy och glåmighet, pigmenteringar, åldersfläckar, ärrbildningar och torrhet. Kroppen: Åldrad hud och/eller förlorad spänst på hals, dekolletage och handrygg, bristningar och ärr.";

    InfoCardPrice.innerHTML ="Från 1800kr";
   
    vissteduAtt.innerHTML = "En Microtox-behandling har effekt i ca 2-4 månader.";
    estimeradTidText.innerHTML ="Behandlingen tar ungefär 40-50 minuter beroende på behandlingsområdets storlek. Konsultationen är också inkluderad i den totala tidsåtgången.";


        // Hur många behandlingar behöver jag göra?
    dragspel1Rubrik.innerHTML = "Hur många behandlingar behöver jag göra?";
    dragspelFirstTip.innerHTML = "Resultatet av behandlingen varierar mellan individer. Men för att behålla effekterna brukar de flesta göra 3-4 behandlingar per år.";

    // Vem kan behandla sig med Microtox?
    dragspel2Rubrik.innerHTML = "Vem kan behandla sig med Microtox?";
    dragspel2FirstTip.innerHTML = "Alla, oavsett hudtyp, kan behandla sig med Microtox för att dra nytta av dess effekter. Likt andra injektionsbehandlingar, behandlar vi inte gravida eller ammande personer. Dessutom rekommenderar vi att du inte är förkyld, har feber, akne eller herpesutslag på ansiktet och att du har avslutat eventuella Tetralysal-kurer senast 14 dagar innan behandlingen. Du bör också inte ha använt produkter/behandlingar som innehåller Retin-A och BHA/AHA-syror under en vecka innan behandlingen.";

    // Finns det biverkningar?
    dragspel3Rubrik.innerHTML = "Finns det biverkningar?";
    dragspel3FirstTip.innerHTML = "Likt som vid andra injektionsbehandlingar kan du uppleva biverkningar efter Microtox-behandlingen, som viss smärta, rodnad, svullnad, blåmärken eller minskad känslighet i huden. Dessa biverkningar är oftast tillfälliga och övergående.";

    // Hur många behandlingar behövs?
    dragspel4Rubrik.innerHTML = "Hur många behandlingar behövs?";
    dragspel4FirstTip.innerHTML = "Vi rekommenderar en kur med 3-6 behandlingar med 1-2 veckors intervaller. Därefter brukar det räcka att underhålla behandlingen någon gång per år.";

    // Gör det ont?
    dragspel5Rubrik.innerHTML = "Gör det ont?";
    dragspel5FirstTip.innerHTML = "Behandlingen är nästan smärtfri.";

    // Hur känns det efteråt?
    dragspel6Rubrik.innerHTML = "Hur känns det efteråt?";
    dragspel6FirstTip.innerHTML = "Vissa personer kan uppleva en liten rodnad, som brukar gå över efter någon timme. Fjällning är ovanlig men kan förekomma hos vissa individer.";

    // Hur långvarig är effekten?
    dragspel7Rubrik.innerHTML = "Hur långvarig är effekten?";
    dragspel7FirstTip.innerHTML = "Du kommer att märka en uppstramning av huden omedelbart efter behandlingen, samt att huden känns fylligare och får en jämnare och klarare hudton. Därefter fortsätter substanserna i PRX-T33 att stimulera hudens dermis och keratinocyternas tillväxtfaktorer. För bästa resultat rekommenderar vi att du gör en kur.";

    // Att tänka på:
    dragspel8Rubrik.innerHTML = "Att tänka på:";
    dragspel8FirstTip.innerHTML = "Undvik att använda produkter som innehåller retinol 1-2 veckor innan behandlingen.";
    
    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

    var newTip = document.createElement("li");
    newTip.innerHTML = "Undvik solning under 48 timmar efter behandlingen.";
    var tipList = dragspel8FirstTip.parentNode;
    tipList.appendChild(newTip);

    var newTip2 = document.createElement("li");
    newTip2.innerHTML = "Undvik att raka eller vaxa det område som ska behandlas.";
    var tipList = dragspel8FirstTip.parentNode; 
    tipList.appendChild(newTip2);

    var newTip3 = document.createElement("li");
    newTip3.innerHTML = "Behandlingen bör inte utföras under graviditet eller amning.";
    var tipList = dragspel8FirstTip.parentNode; 
    tipList.appendChild(newTip3);


    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });


  }

  else if (treatment === "Klassisk ansiktsbehandling") 
  {
    hairPic.src = './images/Tandblekning.png';

    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "Klassisk ansiktsbehandling";
    informationOm.innerHTML = "Klassisk ansiktsbehandling";
    miniRubrik.innerHTML = "Klassisk ansiktsbehandling på Ideal Clinic";
    inledandeText.innerHTML = "Känns din hud trött, torr eller oren? Eller kanske allt på en gång? Unna dig en ordentlig vårboost med marknadens mest generösa och kompletta ansiktsbehandling. Vi skräddarsyr behandlingen efter din hudtyp och använder de mest lämpliga produkterna för att ge din hud det den behöver.";
    miniRubrik2.innerHTML ="Anpassad hudvårdsbehandling - Uppfyller dina specifika behov";
    firststyckeText.innerHTML = "Eftersom huden är i konstant förändring och har olika behov beroende på årstid, livsstil, ålder och annan behandling är denna behandling perfekt att unna sig med jämna mellanrum. Med hjälp av 11 olika oljor, serum, krämer, peelingar och masker tillgodoser denna behandling, på en innovativ bioteknologisk nivå, det som din hud behöver.";

    InfoCardPrice.innerHTML ="Från 1195kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="60-80 Minuter";


          // Hur många behandlingar behöver jag göra?
      dragspel1Rubrik.innerHTML = "Hur många behandlingar behöver jag göra?";
      dragspelFirstTip.innerHTML = "Vi rekommenderar att du gör behandlingen 2-4 gånger per år, speciellt inför årstidsskiftningar eftersom huden kan behöva mer fukt, vård, syror eller skydd vid dessa tillfällen. Om du har några problem med huden, rekommenderar vi att du rådgör med din terapeut.";

      // Behöver jag tänka på något särskilt inför behandlingen?
      dragspel2Rubrik.innerHTML = "Behöver jag tänka på något särskilt inför behandlingen?";
      dragspel2FirstTip.innerHTML = "Se till att komma utan smink och att du inte har gjort några påfrestande behandlingar på ansiktet under veckan innan behandlingen.";

      // Kan jag agera normalt efter behandlingen?
      dragspel3Rubrik.innerHTML = "Kan jag agera normalt efter behandlingen?";
      dragspel3FirstTip.innerHTML = "Ja, du kan agera som vanligt efter behandlingen, men vi rekommenderar att du låter huden vila från makeup under 24 timmar efter behandlingen.";

      // Ser jag resultat direkt?
      dragspel4Rubrik.innerHTML = "Ser jag resultat direkt?";
      dragspel4FirstTip.innerHTML = "Ja, huden kommer att upplevas ren, återfuktad, mjuk och lätt uppstramad efter behandlingen.";

      dragspel22Rubrik.innerHTML = "Konsultation";
      dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

      let accordions = document.getElementsByClassName("accordion-item");
      // Convert the HTMLCollection to an array
      let accordionArray = Array.from(accordions);
      accordionArray.forEach(accordion => {
        // Check if the accordion has no text content
        if (accordion.textContent.trim().length === 0) {
          // Remove the accordion from the DOM
          accordion.parentNode.removeChild(accordion);
        }
      });

  }


  else if (treatment === "Djuprengöring") 
  {

    hairPic.src = './images/Tandblekning.png';



    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "Djuprengöring";
    informationOm.innerHTML = "Djuprengöring";
    miniRubrik.innerHTML = "Djuprengöring på Ideal Clinic";
    inledandeText.innerHTML = "Djuprengöring Lider du av glåmighet, oren hy, eller förstorade porer? På LTC kan vi med hjälp av den senaste teknologin med ultraljud erbjuda dig en effektiv och skonsam djuprengöring av dina problemområden. Resultatet blir en ren, lugnad, uppstramad hud med en fräschör som är redo att möta våren och sommaren.";
    miniRubrik2.innerHTML ="Behandlingen inkluderar:";
    firststyckeText.innerHTML = "-Reglering av talgproduktionen -Portömning -Fräschör -Grundlig rengöring";

    InfoCardPrice.innerHTML ="Från 1095kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="60-80 Minuter";

    // Hur många behandlingar behöver jag?
    dragspel1Rubrik.innerHTML = "Hur många behandlingar behöver jag?";
    dragspelFirstTip.innerHTML = "En djuprengjord hud är grunden för en fräsch och välmående hud. Det förbättrar upptaget av produkter och resultaten av dina andra behandlingar. Vi rekommenderar därför att göra denna behandling med jämna mellanrum, cirka 2-4 gånger per år, beroende på utgångsläget. Vid svåra problem med oren hy eller acne rekommenderar vi att du rådfrågar med din terapeut.";

    // Behöver jag tänka på något innan behandlingen?
    dragspel2Rubrik.innerHTML = "Behöver jag tänka på något innan behandlingen?";
    dragspel2FirstTip.innerHTML = "Kom till behandlingen utan smink och undvik påfrestande behandlingar på ansiktet under veckan innan behandlingen.";

    // Kan jag agera normalt efter behandlingen?
    dragspel3Rubrik.innerHTML = "Kan jag agera normalt efter behandlingen?";
    dragspel3FirstTip.innerHTML = "Ja, men vi rekommenderar att vila huden från smink och annan påfrestning, såsom värme, träning och alkohol.";

    // Ser jag resultat direkt?
    dragspel4Rubrik.innerHTML = "Ser jag resultat direkt?";
    dragspel4FirstTip.innerHTML = "Ja, huden kommer att kännas lugn, ren och med minskade porer.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";
    let accordions = document.getElementsByClassName("accordion-item");
      // Convert the HTMLCollection to an array
      let accordionArray = Array.from(accordions);
      accordionArray.forEach(accordion => {
        // Check if the accordion has no text content
        if (accordion.textContent.trim().length === 0) {
          // Remove the accordion from the DOM
          accordion.parentNode.removeChild(accordion);
        }
      });

  }

  else if (treatment === "Rynkbehandling Botox") 
  {
    hairPic.src = './images/hello.png';


    hairPic.src = './images/hello.png';

    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "Rynkbehandling Botox";
    informationOm.innerHTML = "Rynkbehandling Botox";
    miniRubrik.innerHTML = "Rynkbehandling på Ideal Clinic";
    inledandeText.innerHTML = "Injektionsbehandlingar är den mest populära formen av estetiska behandlingar idag. De hjälper till att motverka rynkor och fina linjer genom att injicera Botulinumtoxin typ A i utvalda områden för att jämna ut rynkor. Detta är en smidig och smärtfri behandling som tar cirka 10–20 minuter. De områden som kan behandlas inkluderar horisontella rynkor i pannan, bekymmersrynkan mellan ögonbrynen, kråksparkar, ögonbrynslyft, näsrynkor, apelsinhaka, gummy smile, läpplyft även kallad lipflip och halslyft (behandling av platysma). Injektionerna är så tunna och mängden som injiceras är så liten att obehaget för patienten är minimal. Om önskat kan vi även lokalbedöva området före behandlingen. Resultatet av behandlingen syns normalt inom 3-10 dagar, men i vissa fall kan det ta upp till två veckor. Resultatet varar normalt i 3–6 månader, men varaktigheten kan öka vid varje upprepad behandling. På Ideal Clinic har vi certifierats för estetisk injicering från Estetiska Injektionsrådet, vilket ger en trovärdig kvalitetsstämpel för våra behandlande läkare, sjuksköterskor och tandläkare. Välkommen att kontakta oss via telefon på 010–33 33 553 eller via E-post: info@idealclinic.se för mer information och bokning av behandling.";
    InfoCardPrice.innerHTML ="Från 2000kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="30 Minuter";

        // Hållbarhet:
    dragspel1Rubrik.innerHTML = "Hållbarhet";
    dragspelFirstTip.innerHTML = "Behandlingen innebär att en liten mängd av Botulinumtoxin typ A injiceras i den underliggande mimikmuskulaturen i det område som ska behandlas. Behandlingen är snabb och nästan helt smärtfri. Resultaten syns ofta redan efter ett par dagar och håller i sig i upp till 4-6 månader.";

    // Alltid rätt till efterkontroll:
    dragspel2Rubrik.innerHTML = "Alltid rätt till efterkontroll";
    dragspel2FirstTip.innerHTML = "Efter utförd behandling har du rätt till en kostnadsfri touch-up inom 12-18 dagar där du tillsammans med behandlaren går igenom vad som har gjorts och följer upp med eventuella korrigeringar.";

    // Att tänka på inför din behandling:
    dragspel3Rubrik.innerHTML = "Att tänka på inför din behandling";
    dragspel3FirstTip.innerHTML = "Du ska inte ha någon infektion eller feber eller känna dig sjuk.";

    var newTip = document.createElement("li");
    newTip.innerHTML = "Du ska inte ha utslag eller finnar på injektionsområdet.";
    var tipList = dragspel3FirstTip.parentNode;
    tipList.appendChild(newTip);

    var newTip2 = document.createElement("li");
    newTip2.innerHTML = "Du ska inte ha Herpes infektion som pågår i kroppen eller på injektionsområdet.";
    tipList.appendChild(newTip2);

    var newTip3 = document.createElement("li");
    newTip3.innerHTML = "Du ska inte vara gravid eller amma.";
    tipList.appendChild(newTip3);

    var newTip4 = document.createElement("li");
    newTip4.innerHTML = "Om du har tagit treo, Ipren eller liknande läkemedel kan blåmärken uppkomma lättare på injektionsområdet.";
    tipList.appendChild(newTip4);

    var newTip5 = document.createElement("li");
    newTip5.innerHTML = "För smärtlindring kan man införskaffa Emla salva på Apoteket och smörja ett tjockt lager på injektionsområdet ca 1 timme före behandling.";
    tipList.appendChild(newTip5);

    var newTip6 = document.createElement("li");
    newTip6.innerHTML = "Du ska inte träna samma dag som behandlingen utförs.";
    tipList.appendChild(newTip6);


    // Att tänka på efter din behandling:
    dragspel4Rubrik.innerHTML = "Att tänka på efter din behandling";
    dragspel4FirstTip.innerHTML = "Behandlingsresultatet kan tidigast börja synas efter ca 3-4 dagar och varar generellt upp till 3-6 månader.";

    var newTip7 = document.createElement("li");
    newTip7.innerHTML = "Du ska inte utföra peeling eller massage på ansiktet samma dag.";
    var tipList = dragspel4FirstTip.parentNode;
    tipList.appendChild(newTip7);

    var newTip8 = document.createElement("li");
    newTip8.innerHTML = "Du ska inte träna samma dag.";
    tipList.appendChild(newTip8);

    var newTip9 = document.createElement("li");
    newTip9.innerHTML = "Du ska inte sminka dig eller ta på det behandlade området de närmaste 6 timmarna efter behandling.";
    tipList.appendChild(newTip9);

    var newTip10 = document.createElement("li");
    newTip10.innerHTML = "Du ska inte basta samma dag.";
    tipList.appendChild(newTip10);

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    
    let accordions = document.getElementsByClassName("accordion-item");
      // Convert the HTMLCollection to an array
      let accordionArray = Array.from(accordions);
      accordionArray.forEach(accordion => {
        // Check if the accordion has no text content
        if (accordion.textContent.trim().length === 0) {
          // Remove the accordion from the DOM
          accordion.parentNode.removeChild(accordion);
        }
      });

  }

  else if (treatment === "Microneedling/Hudbristning") 
  {



    hairPic.src = 'images/Micro needling klar.jpg';


    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "Microneedling/Hudbristning";
    informationOm.innerHTML = "Microneedling";
    miniRubrik.innerHTML = "Microneedling på Ideal Clinic";
    inledandeText.innerHTML = "Microneedling är en behandling som används för åtstramning av huden, förbättrad lyster och bildning av kollagen. Det är en mer djupgående behandling än kemisk peeling. Microneedling-pennan är utrustad med hundratals mikronålar, som tränger igenom huden och skapar tusentals mikrokanaler. Nåltätheten och diametern på nålarna gör att behandlingen blir skonsam och ger en god penetration.";
    miniRubrik2.innerHTML ="Vad är syftet med behandlingen?";
    firststyckeText.innerHTML = "De små mikrokanalerna skapar en kontrollerad skada på huden, vilket startar en läkningsprocess med ett gynnsamt hudföryngringsresultat som följd. Via mikrokanalerna appliceras bioaktiva substanser som passar just din hud för att den ska se fräschare ut. Normalt når bara cirka 0,3% av hudvårdsprodukterna de djupare hudlagren. Men med Microneedling ökar upptaget av aktiva substanser till mer än 50%. Genom att starta den naturliga läkningsprocessen och med hjälp av bioaktiva substanser sker en nyproduktion av kollagen och elastin, vilket resulterar i en förbättrad hudkvalitet.";

    InfoCardPrice.innerHTML ="Från 1495kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="40 Minuter beroende på området";

        // Vad är microneedling?
    dragspel1Rubrik.innerHTML = "Vad är microneedling?";
    dragspelFirstTip.innerHTML = "Microneedling är en hudföryngringsteknik där en microneedling-penna med mikronålar används för att skapa mikrokanaler i huden. Detta startar en läkningsprocess som leder till bildning av nytt kollagen och elastin. Nåltätheten och diametern på nålarna gör att behandlingen blir skonsam och ger en god penetration.";

    // Vid behandling av acneärr görs ofta 3-5 behandlingar med 4 veckors mellanrum...
    dragspel2Rubrik.innerHTML = "Vid behandling av acneärr";
    dragspel2FirstTip.innerHTML = "Vid behandling av acneärr görs ofta 3-5 behandlingar med 4 veckors mellanrum, vilket ger kraftfulla resultat med ett minimum av konvalescens. Första dagarna kan du ha lätt rodnad och/eller svullnad, men man brukar bara behöva vara hemma under behandlingsdagen.";

    // Vilka områden kan behandlas?
    dragspel3Rubrik.innerHTML = "Vilka områden kan behandlas?";
    dragspel3FirstTip.innerHTML = "Microneedling kan användas på ansikte, dekolletage och kropp.";

  // För vilka lämpar sig inte microneedling?
  dragspel4Rubrik.innerHTML = "För vilka lämpar sig inte microneedling?";
  dragspel4FirstTip.innerHTML = "Microneedling är inte lämpligt för personer som:\
  <ul>\
  <li>Har behandlats med Roaccutan de senaste 3 månaderna</li>\
  <li>Tar Kortison</li>\
  <li>Är gravida eller ammande</li>\
  <li>Har öppna eller infekterade sår, som Herpes Simplex</li>\
  <li>Tar blodförtunnande läkemedel, inklusive vissa typer av naturläkemedel</li>\
  <li>Har försämrad sårläkningsförmåga, som diabetes</li>\
  <li>Har en kronisk hudsjukdom eller nervskada i aktuellt område</li>\
  <li>Har genomgått strålbehandling under det senaste året</li>\
  <li>Har genomgått nyligen ansiktskirurgi eller laserbehandling</li>\
  </ul>";

  dragspel22Rubrik.innerHTML = "Konsultation";
  dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

  let accordions = document.getElementsByClassName("accordion-item");
  // Convert the HTMLCollection to an array
  let accordionArray = Array.from(accordions);
  accordionArray.forEach(accordion => {
    // Check if the accordion has no text content
    if (accordion.textContent.trim().length === 0) {
      // Remove the accordion from the DOM
      accordion.parentNode.removeChild(accordion);
    }
  });



  }
  else if (treatment === "Kemisk peeling") 
  {

    hairPic.src = 'images/KemiskPeeling.png';

    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";


    rubrik.innerHTML = "Kemisk peeling";
    informationOm.innerHTML = "Kemisk Peeling";
    miniRubrik.innerHTML = "Vad är kemisk peeling?";
    inledandeText.innerHTML = "Kemisk peeling är en effektiv hudföryngringsteknik som använder olika lösningar för att avlägsna det yttre döda cellagret och främja nybildning av fräschare, mer ungdomliga hudceller. Denna behandling ger synliga resultat genom att göra huden slätare, lenare och ge den ett friskare utseende. Med hjälp av kemisk peeling kan pigmentförändringar och fina linjer reduceras samtidigt som porerna dras ihop. På Ideal Clinic använder vi endast den patenterade och originala AHA-syran för kemisk peeling, vilket garanterar en så effektiv behandling som möjligt. Vår behandling är skonsam och kan användas för att behandla flera problem samtidigt, exempelvis rynkor, pigmentförändringar och förstorade porer.";
    miniRubrik2.innerHTML ="Hur går behandlingen till vid kemisk peeling?";
    firststyckeText.innerHTML = "Vid kemisk peeling applicerar vi olika lösningar på huden, beroende på vilken styrka du väljer och vilket resultat du vill uppnå. Vi anpassar styrkan utifrån de specifika hudproblem du vill behandla samt den återhämtningstid du är beredd att ha. En mildare peeling ger minimal eller ingen konvalescens, medan en starkare peeling tränger djupare ner i hudlagren och kan kräva några dagars återhämtning. Kemisk peeling kan användas på ansikte, hals, dekolletage och handryggar för att förbättra hudens utseende och kvalitet.";


    miniRubrik5.innerHTML ="Naturligt resultat med kemisk peeling:";
    fourthstyckeText.innerHTML = "Genom att kombinera olika metoder kan vi ofta uppnå överlägsna resultat med mindre kontraster efter ingreppet samt kortare återhämtningstid och lägre totalkostnader. För oss handlar det inte bara om själva ingreppet, utan också om att erbjuda personlig vård under hela behandlingsprocessen. Vi lägger lika stor vikt vid uppföljning för att säkerställa din nöjdhet och välbefinnande som du gör.";

    InfoCardPrice.innerHTML ="Från 700kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="40 Minuter";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

  }

  else if (treatment === "Tandblekning") 
  {

    hairPic.src = './images/Tandblekning.png';


    toastBody.innerHTML = "Mycket text? Glöm inte att vi erbjuder kostnadsfria konsultationer!";

    rubrik.innerHTML = "Tandblekning";
    informationOm.innerHTML = "Tandblekning";
    miniRubrik.innerHTML = "Tandblekning på Ideal Clinic";
    inledandeText.innerHTML = "Att bleka tänderna är idag en mycket populär behandling och det finns flera metoder att välja mellan. Dock är inte alla metoder lämpliga för alla typer av tänder. De metoder som ger bra resultat är laserblekning, ultraljudsblekning, men den metod som är mest effektiv och skonsam mot tänderna, och också den senaste inom tandblekning, är plasmaljusblekning (LED). Inte alla har lika bra kvalitet på tänder eller naturligt vita tänder från början. Därför lider många av missfärgade tänder på grund av mat, medicinering, dryck eller rökning. Färgen på tänderna kan variera av många olika anledningar, men det vanligaste är att de naturligt blir mörkare med åren.";
    miniRubrik2.innerHTML ="SENASTE TEKNIKEN";
    firststyckeText.innerHTML = "Att bleka tänderna är idag en mycket populär behandling och det finns flera metoder att välja mellan. Dock är inte alla metoder lämpliga för alla typer av tänder. De metoder som ger bra resultat är laserblekning, ultraljudsblekning, men den metod som är mest effektiv och skonsam mot tänderna, och också den senaste inom tandblekning, är plasmaljusblekning (LED). Med senaste plasmateknologin (LED) erbjuder vi dig en snabb och enkel lösning för vitare tänder. Denna metod gör också att tänderna och emaljen blir starkare. Metoden är ledande för säker och effektiv tandblekning där man kan se tydliga resultat, vilket i genomsnitt motsvarar 7 nyanser vitare på ett behandlingstillfälle enligt Vitapan Classic's nyansnivåer. Normalt krävs inte fler behandlingar för att uppnå ett tillfredsställande resultat. Vår klinikbehandling är perfekt för dig som vill ha effektiva och snabba resultat på ett behagligt sätt. Behandlingen utförs på våra kliniker under ett och samma tillfälle och tar totalt 40-60 minuter beroende på om du väljer en Full Smile eller Fast Smile. Gelen som vi använder innehåller 6% väteperoxid.";

    miniRubrik4.innerHTML ="Skonsamt mot tänderna:";
    thirdstyckeText.innerHTML = "Det avgörande för om en tandblekning är skonsam eller inte är gelen och ljusmetoden som används. Båda kan skada tänderna. Därför använder vi en gel med ett neutralt pH-värde (7), vilket innebär att blekningen inte förändrar emaljmolekylernas struktur eller tandytan. Gelen innehåller också ämnen som motverkar ilningar, reparerar skador och stärker tänderna. Detta gör att du får starkare och friskare tänder efter en tandblekning hos oss. En annan orsak till ilningar och sensibilitet vid tandblekning är ljusblekning med värmeproducerande lampor, som lasermetoden. Detta är mycket smärtsamt och kan skada tandnerven permanent. Metoden vi använder, plasmaljus (LED), är effektiv utan att avge värme och är fri från UV-ljus och skadliga våglängder. Detta gör att biverkningar är mer sällsynta vid tandblekning med vår metod. Ilningar som förekommer är tillfälliga och ofarliga.";

    miniRubrik5.innerHTML ="Varför du ska bleka tänderna med plasmaljus(led):";
    fourthstyckeText.innerHTML = "\
    <ul>\
    <li>Den senaste metoden på marknaden</li>\
    <li>Ämnen som stärker emaljen och motverkar ilningar</li>\
    <li>Resultat direkt i våra kliniker</li>\
    <li>Fyra till 10 nyanser vitare tänder</li>\
    <li>LED-ljuset avger inte värme</li>\
    <li>PH-neutral gel skadar inte tänderna</li>\
    <li>Prime Protect för remineralisering av emaljen och minimering av ilningar</li>\
    <li>Prime Protect gör att du kan äta och dricka vad som helst redan 2 timmar efter behandlingen</li>\
    </ul>";

    InfoCardPrice.innerHTML ="Från 1195kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="70 Minuter";


     // Inför behandlingen:
    dragspel1Rubrik.innerHTML = "Inför behandlingen:";
    dragspelFirstTip.innerHTML = "Det är viktigt att rådfråga din tandläkare innan du utför tandblekning om du tidigare har haft tandställning de senaste sex månaderna. Detta beror på att tandblekningsprodukter kan påverka tandställningens resultat och eventuellt orsaka ojämna resultat på tänderna. Personer under 18 år, gravida eller ammande kvinnor får inte bleka sina tänder eftersom det finns osäkerhet kring eventuella biverkningar.";

    // Hur går behandlingen till:
    dragspel2Rubrik.innerHTML = "Hur går behandlingen till:";
    dragspel2FirstTip.innerHTML = "Vi börjar med att rengöra tänderna för att ta bort ytliga beläggningar och fläckar. Därefter applicerar vi en skyddande salva längs med tandköttskanten för att skydda tandköttet från gelen. Gel med väteperoxid appliceras direkt på tänderna och aktiveras med blått plasmaljus. Ljuset i sig bleker inte tänderna utan dess syfte är att påskynda blekningsprocessen genom att aktivera gelen.\
    <br><br>\
    Det som bleker bort missfärgningarna i tandens emalj är en oxidationsreduktionsreaktion som delar upp långa färgande molekyler till mindre färglösa. Dessa molekyler bryts sedan ner till koldioxid (CO2) och vatten. Väteperoxid eller annat oxiderande ämne frigör 'ensamma' syreatomer, så kallade fria radikaler. Dessa 'söker upp' organiska molekyler och bryter ner dem, vilket ger ljusare tänder.";

    // PRIME PROTECT:
    dragspel3Rubrik.innerHTML = "PRIME PROTECT:";
    dragspel3FirstTip.innerHTML = "Efter själva tandblekningen rekommenderar vi Prime Protect som är en produkt som förseglar och skyddar emaljen direkt efter blekningen. Då kan du äta och dricka som vanligt utan att riskera resultatet från behandlingen. Produkten är det senaste komplementet till tandblekning. Högt rekommenderat för dem som använder tobak eller konsumerar viss typ av mat med röda nyanser. Förseglingen minskar risken för ilningar.";

    // Efter behandlingen:
    dragspel4Rubrik.innerHTML = "Efter behandlingen:";
    dragspel4FirstTip.innerHTML = "Efter behandlingen är det vanligt med ilningar eller irriterat tandkött, men besvären brukar försvinna inom något dygn. Det är viktigt att vara extra noggrann med kosten, särskilt om du inte valt att använda Prime Protect som extra skydd mot missfärgningar.";

    // Blekningstiden:
    dragspel5Rubrik.innerHTML = "Blekningstiden:";
    dragspel5FirstTip.innerHTML = "Varierar mellan 20-40 minuter, beroende på om du väljer en fullbehandling eller en refresh. Därtill tar det 20 minuter extra för genomgång och konsultation. Tandblekning med plasma teknologi (LED) är en skonsam och bekväm behandling som utförs av våra certifierade tandblekningsexperter.";

    // Är det säkert?
    dragspel6Rubrik.innerHTML = "Är det säkert?";
    dragspel6FirstTip.innerHTML = "Produkterna som används är medicinskt CE-märkta och pH-neutrala. Vår metod gör tänderna även starkare.";

    // Vad gör tänderna fläckiga och missfärgade?
    dragspel7Rubrik.innerHTML = "Vad gör tänderna fläckiga och missfärgade?";
    dragspel7FirstTip.innerHTML = "Tänder kan bli missfärgade på grund av kost, tobak, medicinering, misskötsel eller åldrande.";

    // Måste jag använda bettskena?
    dragspel8Rubrik.innerHTML = "Måste jag använda bettskena?";
    dragspel8FirstTip.innerHTML = "Med vår tandblekning behöver du inte använda bettskenor.";

    // Vilka resultat kan garanteras?
    dragspel9Rubrik.innerHTML = "Vilka resultat kan garanteras?";
    dragspel9FirstTip.innerHTML = "Resultatet syns genast. Resultaten varierar beroende på individen, men i genomsnitt blir tänderna 4-10 nyanser vitare. Man rekommenderas att göra en refresh efter ca 3 månader för att behålla resultatet. Kan inte bleka metallfyllningar eller tänder som utsatts för skada. Resultatet på kronor är också svårt att bleka pga. det kan inte bleka kronor själva, men det går att bleka tänderna runt om kronan för att få tänderna ljusare.";

    // Kan man bleka kronor?
    dragspel10Rubrik.innerHTML = "Kan man bleka kronor?";
    dragspel10FirstTip.innerHTML = "Det går inte att bleka själva kronorna, men om tänderna runt omkring är mörkare än kronorna, så går det bra att göra tandblekning med vår metod för att få tänderna runt kronorna att bli ljusare, så att skillnaden i färg minskar.";

    // Vilka missfärgningar kan blekas?
    dragspel11Rubrik.innerHTML = "Vilka missfärgningar kan blekas?";
    dragspel11FirstTip.innerHTML = "Det är lättare att bleka tänder som är missfärgade i varma färger som brunt och gult, än de som går i kalla färger, det vill säga grått och blått. Missfärgningar som kommer från kost och ålder går till exempel i varma färger, medan de som kan uppstå från tandfyllningar och vissa mediciner går i grått, det hör även vissa antibiotika till så kallade tetracykliner.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Innan du börjar en behandling, rekommenderar vi att du kommer in på en kostnadsfri konsultation. Då träffar du en av våra certifierade behandlare som går igenom dina önskemål och vad du vill ha hjälp med. <br> <a href='https://www.bokadirekt.se/boka-tjanst/ideal-clinic-50596/konsultation-injektion-forstagangsbesok-2046921'>Boka Konsultation</a> <br> <br> Under konsultationen skräddarsyr vi en behandling som passar dig och berättar också om möjligheter och risker med behandlingen. På plats tar ni tillsammans ett beslut om en behandling ska utföras.";

    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

  }
  else if (treatment === "Migränbehandling") 
  {

    hairPic.src = './images/sunasfixar.jpg';


    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "Migränbehandling";
    informationOm.innerHTML = "Migränbehandling";
    miniRubrik.innerHTML = "Migränbehandling på Ideal Clinic";
    inledandeText.innerHTML = "Många personer som lider av migrän och spänningshuvudvärk kan få lindring genom en injektionsbehandling. Migrän är en vanlig sjukdom som kan utlösas av faktorer som stress, sömnbrist, fasta, kost och hormonförändringar. Behandlingen görs med injektioner. Migrän och spänningshuvudvärk kan påverka livskvaliteten hos många och är en vanlig orsak till sjukskrivning. Genom att använda Botox, kan 7 av 10 få hjälp. Det är dock inte möjligt att botade migrän med injektioner, men det kan lindra symptomen. Många individer som behandlas med oss upplever att migrän attackerna blir mildare, färre eller helt försvinner under tiden substansen är aktiv i muskeln. Injektioner görs i musklerna mellan ögonbrynen, pannan och ibland i temporala muskler och muskler på bakhuvudet. Resultatet av behandlingen märks efter ungefär en vecka och varar mellan 3- 6 månader.";
    
    InfoCardPrice.innerHTML ="Från 5000kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="30-45 Minuter";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";

    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

  }

  else if (treatment === "PRP") 
  {

    hairPic.src = './images/Tandblekning.png';



    toastBody.innerHTML = "Ny kund eller inte utfört injektionsbehandling på 6 månader, glöm inte din obligatoriska konsultation minst 48h innan behandling</div>";

    rubrik.innerHTML = "PRP";
    informationOm.innerHTML = "PRP (Platelet-Rich Plasma)";
    miniRubrik.innerHTML = "PRP på Ideal Clinic";
    inledandeText.innerHTML = "PRP (Platelet-Rich Plasma), eller blodplättrik plasma, är en medicinsk behandling som har visat sig vara fördelaktig för att främja hårtillväxt och förbättra hårets hälsa.";
    miniRubrik2.innerHTML ="Här är några fördelar med PRP för håret:    ";
    firststyckeText.innerHTML = "\
    <ul>\
    <li>Naturlig metod: PRP för hår är en naturlig behandling eftersom den använder patientens eget blod för att extrahera blodplättar och tillväxtfaktorer. Det finns ingen användning av kemikalier eller syntetiska ämnen, vilket minskar risken för biverkningar eller allergiska reaktioner.</li> <br>\
    <li>Främjar hårtillväxt: PRP innehåller höga nivåer av tillväxtfaktorer som främjar hårtillväxt och stimulerar vilande hårfolliklar. Genom att injicera PRP i områden med tunnhårighet eller håravfall kan man öka blodcirkulationen, näringsupptaget och stimulera hårfolliklarna för att producera tjockare, friskare hårstrån.Främjar hårtillväxt: PRP innehåller höga nivåer av tillväxtfaktorer som främjar hårtillväxt och stimulerar vilande hårfolliklar. Genom att injicera PRP i områden med tunnhårighet eller håravfall kan man öka blodcirkulationen, näringsupptaget och stimulera hårfolliklarna för att producera tjockare, friskare hårstrån.</li> <br>\
    <li>Förbättrar hårets kvalitet: PRP-behandlingar förbättrar inte bara hårtillväxten, utan också hårets övergripande kvalitet. De tillväxtfaktorer och proteiner som finns i PRP hjälper till att stärka hårsäckarna, öka hårets elasticitet och förbättra dess struktur och glans. Det kan också minska håravfall och brytning av hårstrån.</li> <br>\
    <li>Snabb och enkel procedur: PRP-behandlingar för håret är relativt snabba och enkla att genomföra. En liten mängd blod tas från patienten, och blodet centrifugeras för att separera plasma med hög koncentration av blodplättar och tillväxtfaktorer. Detta PRP-serum injiceras sedan i det område som ska behandlas. Hela processen tar cirka en timme och kräver minimal återhämtningstid.</li> <br>\
    <li>Låg risk och minimala biverkningar: Eftersom PRP använder patientens eget blod minskas risken för allergiska reaktioner eller avstötning. Det är en icke-kirurgisk behandling och har minimala biverkningar såsom tillfällig rodnad eller svullnad i injektionsområdet, vilket vanligtvis försvinner inom några timmar eller dagar.</li> <br>\
    <li>Kompletterar andra behandlingar: PRP-behandlingar kan användas som en kompletterande behandling för personer som genomgår andra håråterväxtbehandlingar, såsom hårtransplantationer eller medicinsk behandling mot håravfall. Det kan förbättra resultaten av dessa behandlingar genom att stimulera hårtillväxt och förbättra hårets övergripande hälsa.</li> <br>\
    </ul>";

  

    InfoCardPrice.innerHTML ="Från 2500kr";
   
    vissteduAtt.innerHTML = "Vi har en kundnöjdhet på 4.9 av 5 stjärnor på Bokadirekt";
    estimeradTidText.innerHTML ="Behandlingen tar ca 40-60 minuter, inklusive konsultationen, beroende på områdets storlek.";



    // Hur går behandlingen till?
    dragspel1Rubrik.innerHTML = "Hur går behandlingen till?";
    dragspelFirstTip.innerHTML = "PRP-behandlingen börjar med en konsultation där vi diskuterar dina önskemål, förutsättningar och förväntade resultat. Därefter tas ett vanligt blodprov i sterila tuber som sätts i en centrifug som separerar plasman från blodet. Sedan injiceras den tillväxtrika plasman på det önskade området.";

    // Gör det ont?
    dragspel2Rubrik.innerHTML = "Gör det ont?";
    dragspel2FirstTip.innerHTML = "Du kan känna spänning vid sticket, men vi använder små nålar för att göra behandlingen så behaglig som möjligt.";

    // Vad är PRP bra för?
    dragspel3Rubrik.innerHTML = "Vad är PRP bra för?";
    dragspel3FirstTip.innerHTML = "PRP-behandlingen ses som ett sätt att få tillbaka ungdomlig hudstruktur genom att återställa elasticiteten och förbättra hudens förmåga att behålla fukt. Det är mest effektivt mot problem som gråaktig hud utan lyster, mörka ringar under ögonen, håravfall, slapp, solskadad och åldrad hy, djupa ärr och ojämn hudstruktur och grov och porig hud.";

    // Hur många behandlingar behöver jag göra?
    dragspel4Rubrik.innerHTML = "Hur många behandlingar behöver jag göra?";
    dragspel4FirstTip.innerHTML = "PRP-behandling görs i en kur med tre behandlingar, därefter rekommenderas 1-2 behandlingar per år för att behålla resultaten.";

    // Vilka kan behandla sig med PRP?
    dragspel5Rubrik.innerHTML = "Vilka kan behandla sig med PRP?";
    dragspel5FirstTip.innerHTML = "PRP-behandling är lämplig för alla hudtyper. Men gravida eller ammande personer samt personer som konsumerar mycket alkohol eller röker rekommenderas inte att behandla sig. Personer med cancer, blodsjukdomar, hudsjukdomar (SLE, Porfyri, allergi), blödarsjuka eller vid sepsis ska inte genomgå behandlingen.";

    // Vem utför behandlingen?
    dragspel6Rubrik.innerHTML = "Vem utför behandlingen?";
    dragspel6FirstTip.innerHTML = "Behandlingen utförs av leg. läkare och sjuksköterskor.";

    // Finns det biverkningar?
    dragspel7Rubrik.innerHTML = "Finns det biverkningar?";
    dragspel7FirstTip.innerHTML = "Liksom vid andra injektionsbehandlingar, kan du uppleva biverkningar efter en PRP-behandling, såsom smärta, rodnad, svullnad, blåmärken eller minskad känslighet på huden. Dessa biverkningar är oftast tillfälliga och övergående.";

    dragspel22Rubrik.innerHTML = "Konsultation";
    dragspel22FirstTip.innerHTML = "Kära kunder, framöver behöver du boka en konsultation minst 48 timmar innan din behandling om du inte har varit hos oss inom de senaste 6 månaderna.";
    
    let accordions = document.getElementsByClassName("accordion-item");
    // Convert the HTMLCollection to an array
    let accordionArray = Array.from(accordions);
    accordionArray.forEach(accordion => {
      // Check if the accordion has no text content
      if (accordion.textContent.trim().length === 0) {
        // Remove the accordion from the DOM
        accordion.parentNode.removeChild(accordion);
      }
    });

  }
  




