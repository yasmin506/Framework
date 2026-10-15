const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];
const confirmees = reservations.filter(res => res.statut === "Confirmée");
console.log(confirmees);
const NomClient = reservations.map(res=>res.client);
    console.log(NomClient);
const recher=reservations.filter(res=>res.numero===103);
    console.log(recher);
const calcul=reservations
     .filter(res=>res.statut==="Confirmée")
     . reduce((somme,res)=>somme+res.montant,0);
console.log(calcul);
const ResConf=reservations.every(res=>res.statut==="confirmée");
  console.log(ResConf);
const DesClient=reservations.map(res=> ({
    client:res.client,
    voyage:res.destination
}));
console.log(DesClient);
