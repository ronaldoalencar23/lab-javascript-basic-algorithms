// Iteration 1: Names and Input
let hacker1;

hacker1 = "Ronaldo";

let hacker2;

hacker2 = "AmandaE";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

const nameInCaps = hacker1.toUpperCase();

for (let i = 0; i < nameInCaps.length; i++) {
  const spell = nameInCaps(i);
  console.log(spell(i)) + " ";
}

let nameReversed = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  const char = hacker2[j];
  nameReversed += char;
}
console.log(nameReversed);
