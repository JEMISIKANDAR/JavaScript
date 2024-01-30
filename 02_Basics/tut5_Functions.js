// function definition
function print(){
    console.log("Hello World!")
    console.log("Hello World!")
    console.log("Hello World!")
    console.log("Hello World!")
    console.log("Hello World!")

}
// function calling
// print()

// function add(num1, num2){
//    console.log(num1+num2);
// }

// add(5,5)

function add(num1, num2){
    return num1 + num2;
}

const result = add(5, 5);

// console.log("Result:",result);

function loginUSerMEssege(username = "JEMI"){
    if(!username){
        console.log("Please enter a username")
    }
    else
      return `${username} just logged in`
}

// console.log(loginUSerMEssege("Jameel"))

console.log(loginUSerMEssege("Jameel"));