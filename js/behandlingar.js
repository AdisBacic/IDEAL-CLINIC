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


if (treatment === "Hårborttagning") {
    // Display content specific to Hårborttagning
    rubrik.innerHTML =  "Hårborttagning";
    informationOm.innerHTML ="Hårborttagning";
    miniRubrik.innerHTML = "Hårborttagning på Ideal Clinic";
    inledandeText.innerHTML ="Hårborttagning är en vanligt förekommande estetisk behandling som många människor väljer att genomgå för att bli av med oönskade hårväxt på olika delar av kroppen. På Ideal Clinic erbjuder vi hårborttagning med diodlaser, som är den snabbaste och mest effektiva metoden för permanent hårborttagning. Diodlaser används för att eliminera hårväxt för gott genom att skickar intensivt pulserat ljus till hårsäckarna. Diodlaser är en skonsam metod som är mindre smärtsam än andra traditionella hårborttagningsmetoder, tack vare ett kylt munstycke som kyler ner huden till hela -7 grader under behandlingen. På Ideal Clinic använder vi den mest kraftfulla maskinen på marknaden, Sapphire diodlaser, som ger marknadens bästa resultat och är den snabbaste vägen till att bli hårfri. För att uppnå permanent hårborttagning krävs vanligtvis flera behandlingar, eftersom bara en viss procent av hårstråna är i aktiv växtfas vid varje tillfälle. De hårstrån som förstörs vid hårborttagningsbehandlingen faller av efter några veckor, men nya strån som varit i vilofas växer upp efter ett par månader och det är då det är dags för en ny behandling."
    miniRubrik2.innerHTML ="Behandling";
    vissteduAtt.innerHTML = "Behandlingen utförs med marknadsledande Sapphire diodlaser för en skonsam och effektiv hårborttagning";


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

  }
  // etc.
  




