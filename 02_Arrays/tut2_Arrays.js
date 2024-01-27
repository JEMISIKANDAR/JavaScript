const heros = ["Steve Jobs", "John Wick", "Cisco", "Linkdin"];

const more_heros = ["Jameel", "Noman", "Farooq", "Uzair"];

// heros.push(more_heros);    add array as an element

// let allHeros = heros.concat(more_heros);   // combines or concanate two arrays

let all_new_heros = [...heros, ...more_heros];

// console.log(all_new_heros);

// console.log(Array.isArray("Jameel Sikandar"));      // check if it is array
// console.log(Array.from("Jameel Sikandar"));            // creates array from given

let num1 = 100;
let num2 = 200;
let num3 = 300;
let num4 = 400;

console.log(Array.of(num1, num2, num3, num4));    // creates array of seperate variables