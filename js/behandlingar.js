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


let rubrik = document.querySelector("#behandlingsRubrik");
let miniRubrik = document.querySelector("#miniRubrik");
let inledandeText = document.querySelector("#pshortText");
let miniRubrik2 = document.querySelector("#miniRubrik2");
let firststyckeText = document.querySelector("#firststyckeText");
let informationOm = document.querySelector("#informationOm");

let InfoCardPrice = document.querySelector("#InfoCardPrice");

let vissteduAtt = document.querySelector("#vissteduAtt");
let estimeradTidText = document.querySelector("#EstimeradTidText");


let dragspel1Rubrik = document.querySelector("#dragspel1Rubrik");
let dragspelFirstTip = document.querySelector("#dragspelFirstTip");
let dragspelSecondTip = document.querySelector("#dragspelSecondTip");
let dragspelThirdTip = document.querySelector("#dragspelThirdTip");
let dragspelForthTip = document.querySelector("#dragspelForthTip");
let dragspelFifthTip = document.querySelector("#dragspelFifthTip");
let dragspelSixtTip = document.querySelector("#dragspelSixtTip");


let dragspel2Rubrik = document.querySelector("#dragspel2Rubrik");

let dragspel2FirstTip = document.querySelector("#dragspel2FirstTip");
let dragspel2SecondTip = document.querySelector("#dragspel2SecondTip");
let dragspel2ThirdTip = document.querySelector("#dragspel2ThirdTip");
let dragspel2ForthTip = document.querySelector("#dragspel2ForthTip");
let dragspel2FifthTip = document.querySelector("#dragspel2FifthTip");
let dragspel2SixtTip = document.querySelector("#dragspel2SixtTip");


let dragspel3Rubrik = document.querySelector("#dragspel3Rubrik");

let dragspel3FirstTip = document.querySelector("#dragspel3FirstTip");
let dragspel3SecondTip = document.querySelector("#dragspel3SecondTip");
let dragspel3ThirdTip = document.querySelector("#dragspel3ThirdTip");
let dragspel3ForthTip = document.querySelector("#dragspel3ForthTip");
let dragspel3FifthTip = document.querySelector("#dragspel3FifthTip");
let dragspel3SixtTip = document.querySelector("#dragspel3SixtTip");



if (treatment === "Hårborttagning") {
    // Display content specific to Hårborttagning
    rubrik.innerHTML =  "Hårborttagning";
    informationOm.innerHTML ="Hårborttagning";
    miniRubrik.innerHTML = "Hårborttagning på Ideal Clinic";
    inledandeText.innerHTML ="Hårborttagning är en vanligt förekommande estetisk behandling som många människor väljer att genomgå för att bli av med oönskade hårväxt på olika delar av kroppen. På Ideal Clinic erbjuder vi hårborttagning med diodlaser, som är den snabbaste och mest effektiva metoden för permanent hårborttagning. Diodlaser används för att eliminera hårväxt för gott genom att skickar intensivt pulserat ljus till hårsäckarna. Diodlaser är en skonsam metod som är mindre smärtsam än andra traditionella hårborttagningsmetoder, tack vare ett kylt munstycke som kyler ner huden till hela -7 grader under behandlingen. På Ideal Clinic använder vi den mest kraftfulla maskinen på marknaden, Sapphire diodlaser, som ger marknadens bästa resultat och är den snabbaste vägen till att bli hårfri. För att uppnå permanent hårborttagning krävs vanligtvis flera behandlingar, eftersom bara en viss procent av hårstråna är i aktiv växtfas vid varje tillfälle. De hårstrån som förstörs vid hårborttagningsbehandlingen faller av efter några veckor, men nya strån som varit i vilofas växer upp efter ett par månader och det är då det är dags för en ny behandling."
    miniRubrik2.innerHTML ="Vad händer under en behandling med permanent hårborttagning med diodlaser?";
    firststyckeText.innerHTML ="För att permanent ta bort hår med diodlaser, lägger man på en kall gel på huden och belyser den med synligt intensivt pulserat ljus. Ljusblixtarna vid behandlingen kan ibland kännas som en liten stöt, men behandlingen går snabbt och är inte särskilt smärtsam. Ibland kan man se en lätt hudrodnad efter behandlingen, men oftast syns det ingenting. Vi flyttar ljusprisman snabbt över hela det område där du önskar ta bort oönskad hårväxt. Behandlingen känns väldigt lite och är nära på smärtfri.";
    
    vissteduAtt.innerHTML = "Behandlingen utförs med marknadsledande Sapphire diodlaser för en skonsam och effektiv hårborttagning";
    estimeradTidText.innerHTML ="10-150 minuter";

    
    dragspel1Rubrik.innerHTML ="Vad ska man tänka på före behandlingen?";

    dragspelFirstTip.innerHTML ="Undvik att sola en vecka före och en vecka efter en laserbehandling med Sapphire.";
    dragspelSecondTip.innerHTML="Detta minskar risken för pigmentering i efterförloppet avsevärt.";
    dragspelThirdTip.innerHTML="Undvik att plocka eller rycka bort dina hårstrån 4 veckor före behandlingen.";
    dragspelForthTip.innerHTML="Var slätrakad 1-2 dagar innan behandlingen.";
    dragspelFifthTip.innerHTML="Sola inte en vecka före eller efter behandlingen.";
    dragspelSixtTip.innerHTML="Undvik att plocka eller rycka bort dina hårstrån 4 veckor före behandlingen, men var slätrakad 1-2 dagar innan behandlingen.";

    dragspel2Rubrik.innerHTML ="Kan alla hårstrån behandlas? ";

    dragspel2FirstTip.innerHTML ="Hårborttagning fungerar inte på ljusa eller väldigt tunna hårstrån.";
    dragspel2SecondTip.innerHTML="Vid en konsultation kan vi bedöma om behandlingen fungerar för dig.";
    dragspel2ThirdTip.innerHTML="Vid osäkra fall kan en liten provbehandling utföras.";
    dragspel2ForthTip.innerHTML="Hårborttagning är inte lämplig för personer med mörk hud eller som är väldigt solbrända.";
    dragspel2FifthTip.innerHTML="En tumregel är att det ska vara en tydlig färgskillnad mellan hårstråna som man vill ta bort och den omgivande huden.";
    dragspel2SixtTip.innerHTML="Vid en konsultation kan vi avgöra om det finns tillräcklig färgskillnad mellan hårstråna och omgivande hud för att behandlingen ska vara effektiv.";

    dragspel3Rubrik.innerHTML ="Är resultatet permanent?";

    dragspel3FirstTip.innerHTML ="Antalet behandlingar som krävs kan variera beroende på området som behandlas och den individuella hårväxten.";
    dragspel3SecondTip.innerHTML="Efter 8-10 behandlingar kan man vanligtvis förvänta sig att den mesta hårväxten på ett område har försvunnit.";
    dragspel3ThirdTip.innerHTML="Behandlingar för att ta bort oönskad hårväxt har utförts i över 25 år. Under denna långa tid har det i extremt få fall sett hårväxten komma tillbaka. För att kallas permanent måste en förändring enligt medicinsk terminologi kunna observeras i minst 30 år, och så länge har inte laserborttagning av hår utförts i världen. Men många kallar oftast laserborttagning av hår för permanent eftersom man har sett att hårväxten inte har återkommit under en så lång tid.";
    dragspel3ForthTip.innerHTML="Jämfört med andra hårborttagningsmetoder som rakning, vaxning och plockning av hårstrån, är laserborttagning av hår i allmänhet permanent.";
    dragspel3FifthTip.innerHTML="Innan behandling med diodlaser bör man inte vaxa eller plocka hårstrån, men man kan raka eller klippa håret kort där det behövs.";
    dragspel3SixtTip.innerHTML="Efter behandling kan det vara bra att undvika exponering för solen och att använda solskyddskräm på området för att skydda huden.";

    

  }
   
  else if (treatment === "Svettbehandling") {
    // Display content specific to Svettbehandling
    rubrik.innerHTML =  "Svettbehandling";
    informationOm.innerHTML = "Svettbehandling"
    miniRubrik.innerHTML = "Svettbehandling på Ideal Clinic";
    inledandeText.innerHTML = "Extrem svettning (Hyperhidros) drabbar en liten del av befolkningen, ungefär 2%. Det brukar börja under puberteten eller tidig vuxenålder och i ungefär hälften av fallen är det medfött."
    miniRubrik2.innerHTML ="Behandling av Hyperhidros";
    firststyckeText.innerHTML = "Hyperhidros orsakas av överaktivitet hos svettkörtlarna, vanligtvis i händer, fötter och armhålor, men också i andra begränsade områden på kroppen. Tillståndet innebär en överdriven svettning som är mycket kraftig och har ingen naturlig funktion i kroppen. Svettningarna kan leda till att personen som lider av det har en försämrad livskvalitet och ibland undviker vardagssituationer, arbete och sociala kontakter medvetet. De områden på kroppen som vanligtvis påverkas är armhålor, handflator, fötter och pannan där svettbehandling med injektioner har varit den mest effektiva metoden. Med hjälp av injektioner kan detta slags svettning behandlas effektivt. Behandlingen blockerar svettkörtlarna i cirka 6-7 månader, därefter behövs en ny behandling. Effekten förlängs efter varje behandling eftersom svettkörtlarna inte återfår sin fulla aktivitet mellan varje injektion. Resultatet är mycket säkert och ger inga allvarliga biverkningar. Svettbehandling med injektioner har inneburit en stor revolution för patienter med hyperhidros. Behandlingen ges i form av injektioner under huden på det drabbade området. När händerna behandlas ger vi alltid bedövning. För andra områden är bedövning mycket sällan nödvändigt."
    
    vissteduAtt.innerHTML = "Svettbehandling med injektioner är det vanligaste tillvägagångssättet att behandla överdriven svettning";
    estimeradTidText.innerHTML ="30-40 minuter";

    
    dragspel1Rubrik.innerHTML ="Vad bör man ta hänsyn till innan en svettbehandling?"

    dragspelFirstTip.innerHTML = "Du bör inte ha utslag eller finnar på det område som ska behandlas.";
    dragspelSecondTip.innerHTML = "Du bör inte ha någon pågående herpesinfektion i kroppen eller på det område som ska behandlas.";
    dragspelThirdTip.innerHTML = "Du bör inte vara gravid eller amma.";
    dragspelForthTip.innerHTML = "Om du har tagit mediciner som Magnecyl eller Ipren eller liknande, kan du lättare få blåmärken vid det område som ska behandlas.";
    dragspelFifthTip.innerHTML = "För att minska smärta kan du köpa Emla-salva på apoteket och applicera ett tjockt lager på det område som ska behandlas ca 1 timme innan behandlingen.";
    dragspelSixtTip.innerHTML = "Du bör inte träna samma dag som behandlingen utförs.";


    dragspel2Rubrik.innerHTML = "Vad bör man ta hänsyn till efter en svettbehandling?";

    dragspel2FirstTip.innerHTML = "Efter en injektionsbehandling är det viktigt att inte röra vid det behandlade området under 6 timmar.";
    dragspel2SecondTip.innerHTML = "Du bör inte utföra någon annan typ av behandling på det aktuella området under 1 vecka.";
    dragspel2ThirdTip.innerHTML ="Du bör inte träna samma dag som behandlingen.";
    dragspel2ForthTip.innerHTML ="Du bör inte bada eller besöka en bastu under 1 vecka.";
    dragspel2FifthTip.innerHTML="Om du vill veta mer eller har fler frågor kan du alltid boka en tid för en konsultation med någon av våra läkare eller sjuksköterskor.";


    dragspel3Rubrik.innerHTML = "När bör man märka resultat efter en svettbehandling ?";
    dragspel3FirstTip.innerHTML ="Du kommer att känna en effekt av behandlingen redan efter några få dagar.";
    dragspel3SecondTip.innerHTML="För vissa personer kan det ta upp till 1 vecka innan de märker effekten av behandlingen.";
    dragspel3ThirdTip.innerHTML="Svettningar under armhålorna kommer gradvis att minska i en naturlig process.";
    dragspel3ForthTip.innerHTML="Resultaten av svettbehandlingen håller normalt i sig i upp till 4-6 månader, men Botox i armhålorna kan vara längre hållbar hos vissa personer och kan ibland hålla upp till 9-12 månader.";
    dragspel3FifthTip.innerHTML="Varaktigheten av resultatet kan variera beroende på behandlingsmetod och individuella faktorer som svettproduktion och metabolism.";
    dragspel3SixtTip.innerHTML="För att upprätthålla effekten av behandlingen kan det krävas upprepade behandlingar efter att resultatet har avtagit.";

  }

  else if (treatment === "Ärrbehandling") 
  {

    rubrik.innerHTML = "Ärrbehandling";
    informationOm.innerHTML = "Ärrbehandling"
    miniRubrik.innerHTML = "Ärrbehandling (Microneedling) på Ideal Clinic";
    inledandeText.innerHTML = "Microneedling är en behandling som används för åtstramning av huden, förbättrad lyster och bildning av kollagen. Det är en mer djupgående behandling än kemisk peeling. Microneedling-pennan är utrustad med hundratals mikronålar, som tränger igenom huden och skapar tusentals mikrokanaler. Nåltätheten och diametern på nålarna gör att behandlingen blir skonsam och ger en god penetration."
    miniRubrik2.innerHTML ="Vad är syftet med behandlingen?";
    firststyckeText.innerHTML = "De små mikrokanalerna skapar en kontrollerad skada på huden, vilket startar en läkningsprocess med ett gynnsamt hudföryngringsresultat som följd. Via mikrokanalerna appliceras bioaktiva substanser som passar just din hud för att den ska se fräschare ut. Normalt når bara cirka 0,3% av hudvårdsprodukterna de djupare hudlagren. Men med Microneedling ökar upptaget av aktiva substanser till mer än 50%. Genom att starta den naturliga läkningsprocessen och med hjälp av bioaktiva substanser sker en nyproduktion av kollagen och elastin, vilket resulterar i en förbättrad hudkvalitet."
   
    InfoCardPrice.innerHTML ="Från 600kr";
   
    vissteduAtt.innerHTML = "Svettbehandling med injektioner är det vanligaste tillvägagångssättet att behandla överdriven svettning";
    estimeradTidText.innerHTML ="Behandlingen tar mellan 20-60 minuter beroende på området.";



    dragspel1Rubrik.innerHTML ="Vad är Microneedling?";

    dragspelFirstTip.innerHTML ="Microneedling är en teknik för hudföryngring som involverar användning av en microneedling-penna med mikronålar.";
    dragspelSecondTip.innerHTML="Syftet med behandlingen är att skapa små kanaler i huden som initierar en läkningsprocess som stimulerar tillväxt av nytt kollagen och elastin.";
    dragspelThirdTip.innerHTML="Behandlingen är skonsam tack vare nåltätheten och diametern på nålarna, vilket möjliggör en effektiv penetration.";
    dragspelForthTip.innerHTML="Vanligtvis krävs 3-5 behandlingar med 4 veckors mellanrum för att uppnå kraftfulla resultat vid behandling av acneärr.";
    dragspelFifthTip.innerHTML="Eventuell rodnad och svullnad kan uppstå de första dagarna, men oftast behöver man bara vara hemma under behandlingsdagen.";
    dragspelSixtTip.innerHTML="Microneedling är inte lämpligt för personer som har behandlats med Roaccutan de senaste 3 månaderna, tar kortison, är gravida eller ammande, har öppna eller infekterade sår, tar blodförtunnande läkemedel, har försämrad sårläkningsförmåga, har en kronisk hudsjukdom eller nervskada i det aktuella området, har genomgått strålbehandling under det senaste året eller har genomgått nyligen ansiktskirurgi eller laserbehandling.";

    dragspel2Rubrik.innerHTML ="Acneärr och acnemärken?";

    dragspel2FirstTip.innerHTML ="Det är svårt att helt och hållet ta bort djupa acneärr eftersom ärrvävnad är permanent.";
    dragspel2SecondTip.innerHTML="Röda och bruna fläckar som orsakas av acne kan behandlas med kemisk peeling och microneedling.";
    dragspel2ThirdTip.innerHTML="Kemisk peeling kan utföras när man har mild acne för att behandla röda och bruna fläckar.";
    dragspel2ForthTip.innerHTML="För att undvika nya ärr och acne bör man vänta med behandling av ärr tills man blir av med acnen.";
    dragspel2FifthTip.innerHTML="Trots att det är svårt att helt ta bort acneärr, kan man få en betydande förbättring.";
    dragspel2SixtTip.innerHTML="Det är viktigt att konsultera en hudläkare eller skönhetsbehandlare för att få råd om vilken behandling som är lämplig för ens specifika acneärr.";

    dragspel3Rubrik.innerHTML ="Vilka får inte utföra microneedling?";

    dragspel3FirstTip.innerHTML ="Personer som tar Roaccutan eller andra acnemediciner bör undvika microneedling.";
    dragspel3SecondTip.innerHTML="Gravida eller ammande kvinnor bör också undvika microneedling.";
    dragspel3ThirdTip.innerHTML="Personer med öppna eller infekterade sår bör undvika microneedling.";
    dragspel3ForthTip.innerHTML="Diabetiker bör undvika microneedling.";
    dragspel3FifthTip.innerHTML="Personer med kronisk hudsjukdom, nervskada eller som har genomgått strålbehandling, ansiktskirurgi eller laserbehandling under det senaste året bör också undvika microneedling.";
    dragspel3SixtTip.innerHTML="Det är viktigt att diskutera eventuella hälsoproblem och medicineringar med en hudläkare eller kvalificerad behandlare innan man genomgår microneedling.";


  }

  else if (treatment === "Hudbristning") 
  {


    rubrik.innerHTML = "Hudbristning";
    informationOm.innerHTML = "Hudbristning"
    miniRubrik.innerHTML = "Retinol Peeling (Hudbristning) på Ideal Clinic";
    inledandeText.innerHTML = "Retinol Peeling NeoStrata Retinol Peel är en unik peel som innehåller Retinol och volymgivande Aminofill för att förbättra hudens struktur, spänst, ge en jämnare hudton och minska linjer och rynkor. Peelingen är ytlig och kräver minimal återhämtningstid, och passar de flesta hudtyper. Det är en snabb, enkel och effektiv peeling som påbörjas på kliniken och avlägsnas hemma."
    miniRubrik2.innerHTML ="Så här går det till";
    firststyckeText.innerHTML = "Retinolpeeling från NeoStrata innehåller Vitamin E, Bisabolol, Aminofil, NeoCitriate och 3% Retinol. Aminofil och Retinol gör att huden exfolierar, det vill säga att den flagnar av. Behandlingen utförs på kliniken och avlägsnas av dig själv hemma efter 3-8 timmar. Du kommer inte att känna någon obehag efter appliceringen. Exfolieringsprocessen startar inom 2-4 dagar och pågår vanligtvis i en vecka. Efter exfoliering kommer du att märka förbättringar i hudens struktur, spänst, lyster och hudton."
   
    InfoCardPrice.innerHTML ="Från 600kr";
   
    vissteduAtt.innerHTML = "";
    estimeradTidText.innerHTML ="Behandlingen tar mellan 20-60 minuter beroende på området.";


    dragspel1Rubrik.innerHTML ="För vem passar behandlingen?";

    dragspelFirstTip.innerHTML ="Personer med akne: Retinol peeling kan hjälpa till att minska akneutbrott genom att rensa porerna och minska inflammationen i huden.";
    dragspelSecondTip.innerHTML="Personer med solskador: Retinol kan minska synliga tecken på solskador, såsom hyperpigmentering, rynkor och torrhet.";
    dragspelThirdTip.innerHTML="Personer med ojämn hudton: Retinol peeling kan bidra till att jämna ut hudtonen och göra huden mer strålande.";
    dragspelForthTip.innerHTML="Personer med rynkor och fina linjer: Retinol har anti-aging-egenskaper och kan hjälpa till att minska synligheten av rynkor och fina linjer.";
    dragspelFifthTip.innerHTML="Personer med torr hud: Retinol peeling kan hjälpa till att återfukta och mjuka upp torr hud genom att öka produktionen av kollagen och elastin i huden.";
    dragspelSixtTip.innerHTML="Personer som vill förbättra hudens övergripande hälsa: Retinol peeling kan bidra till att förbättra hudens hälsa genom att öka cellförnyelsen och minska orenheter i huden.";

    dragspel2Rubrik.innerHTML ="Vilka områden kan behandlas? ";

    dragspel2FirstTip.innerHTML ="Retinol peeling kan utföras på ansikte, hals, dekolletage och handryggar.";
    dragspel2SecondTip.innerHTML="Behandlingen reducerar ålderstecken, aktiv acne, pigmentförändringar och ojämn hudton.";
    dragspel2ThirdTip.innerHTML="Retinol peeling tar bort gamla hudceller och återställer hudens kvalitet.";
    dragspel2ForthTip.innerHTML="Behandlingen reducerar mindre rynkor, stramar upp huden, reducerar ärr, hudbristningar och acne, minskar porer och dämpar pigmentförändringar och solskador.";
    dragspel2FifthTip.innerHTML="Det är ett bra alternativ för den som vill åtgärda flera problem på en gång.";
    dragspel2SixtTip.innerHTML="Ny och friskare hud uppnås genom en effektiv och djupgående behandling med Retinol peeling, där olika lösningar appliceras på huden för att avlägsna det yttre döda cellagret och stimulera till nybildning av nya celler.";

    dragspel3Rubrik.innerHTML ="Att tänka på efter behandlingen:";

    dragspel3FirstTip.innerHTML ="Undvik hudvårdsprodukter med retinoider eller andra exfolierande produkter en vecka innan behandlingen.";
    dragspel3SecondTip.innerHTML="Undvik att utsätta de behandlade områdena för solen under 3-4 veckor efter behandlingen.";
    dragspel3ThirdTip.innerHTML="Om du gör flera behandlingar, bör du vänta 6-8 veckor mellan varje behandling.";
    dragspel3ForthTip.innerHTML="Retinolbehandlingen kan utföras som en enskild behandling.";
    dragspel3FifthTip.innerHTML="Efter behandlingen kan det uppstå lätt rodnad i några dagar.";
    dragspel3SixtTip.innerHTML="Det är viktigt att följa de rekommendationer som ges för att minimera risken för biverkningar och för att uppnå bästa möjliga resultat av behandlingen.";

  }

  else if (treatment === "Profhilo") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }
  else if (treatment === "Filler") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Behandling mot dubbelhaka") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Skinbooster") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }
  else if (treatment === "Retinol peelin") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "MicroTox") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }
  else if (treatment === "PRX-T33") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Klassisk ansiktsbehandling") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }


  else if (treatment === "Djuprengöring") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Rynkbehandling Botox") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Microneedling") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }
  else if (treatment === "Kemisk peeling") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "Tandblekning") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }
  else if (treatment === "Migränbehandling") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }

  else if (treatment === "PRP") 
  {
    dragspel1Rubrik.innerHTML ="";

    dragspelFirstTip.innerHTML ="";
    dragspelSecondTip.innerHTML="";
    dragspelThirdTip.innerHTML="";
    dragspelForthTip.innerHTML="";
    dragspelFifthTip.innerHTML="";
    dragspelSixtTip.innerHTML="";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";

    dragspel3Rubrik.innerHTML ="";

    dragspel3FirstTip.innerHTML ="";
    dragspel3SecondTip.innerHTML="";
    dragspel3ThirdTip.innerHTML="";
    dragspel3ForthTip.innerHTML="";
    dragspel3FifthTip.innerHTML="";
    dragspel3SixtTip.innerHTML="";

  }




  // etc.
  




