// partie A :

const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
console.log(destinationsEurope);
const dest=[...destinationsEurope,...destinationsAsie];
console.log(dest);
const modifDestinations=["lisbonne",...dest];
console.log(modifDestinations);
const modifDest=[...dest,"Londres"];
console.log(modifDest);
const saufParis = dest.filter(ville => ville !== "Paris");
console.log(saufParis);

//partie B :

const reservation = {
numero: 201,
client: "Nadia",
destination: "Bali",
statut: "En attente"
};
console.log(reservation);
const modifRes={...reservation,statut:"confirmée"};
console.log(modifRes);
const ajouRes={...modifRes,assurance: "true"};
console.log(ajouRes);
const nouvelleReservation={...reservation,statut:"confirmée",destination:"Itali"};
console.log(nouvelleReservation);
