// Exo 1 Switch
// Stockez dans une variable, via un prompt, un jour de la semaine.
// let jour = prompt("Choisis un jour! :");
// if(jour){
//     jour = jour.toUpperCase();
// }
// switch (jour){
//     case "lundi":
//         alert(`On est ${jour}. Tu as cours  à MolenGeek et tu as sport en soirée.`);
//         break;
//     case "mardi":
//         alert(`On est ${jour}. Tu as cours  à MolenGeek et tu as sport en soirée.`);
//         break;
//     case "mercredi":
//         alert(`On est ${jour}. Tu as cours  à MolenGeek et tu as sport en soirée.`);
//         break;
//     case "jeudi":
//         alert(`On est ${jour}. Tu as cours  à MolenGeek et tu as sport en soirée.`);
//         break;
//     case "vendredi":
//         alert(`On est ${jour}. Tu as cours  à MolenGeek et tu as sport en soirée.`);
//         break;
//     case "samedi":
//         alert(`On est ${jour}.. Dors`);
//         break;
//     case "dimanche":
//         alert(`On est ${jour}.. Dors`);
//         break;
//     default:
//         alert("Ceci n'est pas un jour..")
// }
// À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//__________________ Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

//_____Exo2

// Déclarer une variable qui prendra comme valeur un prompt qui retourne un type de météo (pluie, soleil, neige, nuages, orages)
let meteo = prompt("Quel temps fait-il aujourd'hui ? :");
// À l'aide d'un switch, affichez une réaction appropriée au temps
switch(meteo){
    case "pluie":
        alert("Il pleut, sort le parapluie.");
        break;
    case "soleil":
        alert("ça brille");
        break;
    case "neige":
        alert("C blanc");
        break;
    case "nuages":
        alert("il va fr tt noir");
        break;
    case "orages":
        alert("Attaque tonnere!");
        break;
    default:
        alert("connai pa");
        break;
}
//___________________Ex: Il pleut. Je prend un parapluie

//_____Exo3
// Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;
let nb1 = parseInt(prompt("Choisis un nombre"));
let op = prompt("Choisis un opérateur ( + - / *)");
let nb2 = parseint(prompt("Choisis un nombre"));

switch(op){
    case"+":
        alert(`${nb1}+${nb2}= ${nb1+nb2}`);
        break;
    case"-":
        alert(`${nb1}-${nb2}= ${nb1-nb2}`);
        break;
    case"/":
        alert(`${nb1}/${nb2}= ${nb1/nb2}`);
        break;
    case"*":
        alert(`${nb1}*${nb2}= ${nb1*nb2}`);
        break;
    default:
        alert("Choisis un opérateur correct");
        break;
    
}
// Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

// Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4



let monTab = ["Fanny","Django","Nico","Banane"];
console.log(monTab.length);
console.log(monTab[1]);
for (let i = 0; i < monTab.length; i++){
    console.log("Bonjour"+ " " + monTab[i]);
    //i = i + 1
}

//for in
console.log("_________");

let str = "Hello";
for(i in str){
    console.log("Bonjour"+ " " + monTab[i]);
}

console.log("_________");

let monTab2 = ["cerise","banane","pomme","orange","poireaux"];
for ( i in monTab2){
    console.log(`Je vais au marché et j'achète... ${monTab2[i]}`);
}