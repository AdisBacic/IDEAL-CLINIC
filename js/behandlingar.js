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


let vissteduAtt = document.querySelector("#vissteduAtt");


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
    miniRubrik2.innerHTML ="Behandling";
    vissteduAtt.innerHTML = "Behandlingen utförs med marknadsledande Sapphire diodlaser för en skonsam och effektiv hårborttagning";

    dragspel1Rubrik.innerHTML = 
    dragspelFirstTip.innerHTML ="Efter en injektionsbehandling är det viktigt att inte röra vid det behandlade området under 6 timmar.";
    dragspelSecondTip.innerHTML ="Du bör inte utföra någon annan typ av behandling på det aktuella området under 1 vecka.";
    dragspelThirdTip.innerHTML ="Du bör inte träna samma dag som behandlingen.";
    dragspelForthTip.innerHTML ="Du bör inte bada eller besöka ett bastu under 1 vecka.";
    dragspelFifthTip.innerHTML ="Om du vill veta mer eller har fler frågor kan du alltid boka en tid för en konsultation med någon av våra läkare eller sjuksköterskor.";
    dragspelSixtTip.innerHTML = "Du kommer att känna en effekt av behandlingen redan efter några få dagar,men för vissa kan det ta upp till 1 vecka. Svettningar under armhålorna kommer gradvis att minska i en naturlig process.";

    dragspel2Rubrik.innerHTML ="";

    dragspel2FirstTip.innerHTML ="";
    dragspel2SecondTip.innerHTML="";
    dragspel2ThirdTip.innerHTML="";
    dragspel2ForthTip.innerHTML="";
    dragspel2FifthTip.innerHTML="";
    dragspel2SixtTip.innerHTML="";


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

  else if (treatment === "Hudbristning") 
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
  




