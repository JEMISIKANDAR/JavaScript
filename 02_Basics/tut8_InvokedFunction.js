// function chai(){
   //  console.log(`DB Connected`)
// }

// chai()

// IIFE

(function chai(){
    console.log(`DB Connected`)
}) ();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})("Jameel")

