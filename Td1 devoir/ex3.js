const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const[p1,p2]=pays;
console.log(p1);
console .log(p2);
const p3 =pays[2];
console.log(p3);
const [destinationPrincipale, ...autresPays] = pays;
console.log(destinationPrincipale);
console.log(autresPays);

// partie B : 
const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};
const {destination, prix}=voyage;
console.log(destination);
console.log(prix);
const { destination: ville } = voyage;
console.log(ville); 
const { prix: prix2 = 1000, duree = 5 } = voyage;
console.log(prix2);     
console.log(duree); 

function afficherVoyage({ destination, prix, duree, transport, hotel }) {
  console.log(`Destination : ${destination}`);
  console.log(`Prix : ${prix} `);
  console.log(`Durée : ${duree} jours`);
  console.log(`Transport : ${transport}`);
  console.log(`Hôtel : ${hotel}`);
}
afficherVoyage(voyage);
