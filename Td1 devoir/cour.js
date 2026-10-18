const pays=["italie","japen","grece","espagne","canada"];
const [p1,...reste]=pays;
console.log(p1);
console.log(reste);
reste[0]="tunisie";
console.log('reste',reste);
console.log(pays);
const p22=pays.map(p=>p);
console.log(p22)
p22[0]="tunisie"
console.log(p22);
console.log(pays);

const personne=[{nom:"ahmed",ville:"bizert",age:18},
                {nom:"yasmin",ville:"tunisie",age:20},
                {nom:"Oumaima",ville:"nabel",age:21}];
const{nom}=personne[0];
const{nom:identifant}=personne[0];
console.log(identifant);
const names=personne.map(({nom})=>nom);
console.log(names);
const nom_age=personne.map(({nom,age})=>({nom,age}));
console.log(nom_age);
const nvPersonne={nom:"hela",ville:"bizete",age:43};
const personne2=[...personne,nvPersonne];
console.log(personne2);
