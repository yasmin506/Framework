const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destinations.forEach(dest=>
    console.log(dest.ville)
);
const TabVille = destinations.map(dest=>dest.ville);
    console.log(TabVille);
const BonPrix= destinations.filter(dest=>dest.prix<1500);
     console.log(BonPrix);
const destination = destinations.find(dest=>dest.id===3);
      console.log(destination);
const Index=destinations.findIndex(dest=>dest.ville=="Tokyo");
       console.log(Index);
const Dis=destinations.some(dest=>dest.disponible===true);
      console.log(Dis);
const zero=destinations.every(dest=>dest.prix>0);
      console.log(zero);
const calcule=destinations.reduce((somme,dest)=>somme+dest.prix,0);
      console.log(calcule);