//Nombre Pair
// Somme
// Nombre divisible par 5
let number = [1, 5, 25, 2, 4, 8, 90, 100];
let sum = 0;
let evenPair2 = [];
let evenPair5 = [];
// Nombre Pair et somme
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    sum += number[i];
    evenPair2.push(number[i]);
  }
}

// divisible par 5
for (let i = 0; i < number.length; i++) {
  if (number[i] % 5 === 0) {
    evenPair5.push(number[i]);
  }
}
console.log(evenPair2);
console.log(sum);
console.log(evenPair5);

// chaine de caractere +5
// chaine "a"
// remplace "o" par "i"

let nameOfPeoples = ["Andry", "Ravalomanana", "Bema", "Mom", "Koto"];
let characterMoreThan5 = [];
let namesWhithA = [];
let modifiedNames = [];

// chaine de caractere +5
for (let i = 0; i < nameOfPeoples.length; i++) {
  if (nameOfPeoples[i].length >= 5) {
    characterMoreThan5.push(nameOfPeoples[i]);
  }
}
//chaine "a"

for (let i = 0; i < nameOfPeoples.length; i++) {
  if (nameOfPeoples[i].includes("A") || nameOfPeoples[i].includes("a")) {
    namesWhithA.push(nameOfPeoples[i]);
  }
}

// remplace "o" par "i"
for (let i = 0; i < nameOfPeoples.length; i++) {
  modifiedNames.push(nameOfPeoples[i].replaceAll(/o/gi, "i"));
}

console.log(characterMoreThan5);
console.log(namesWhithA);
console.log(modifiedNames);
