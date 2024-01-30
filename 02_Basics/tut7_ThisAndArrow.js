const user = {
    name: "Jameel",
    price: "1999",

    welcomeMessege: function(){
        console.log(`${this.name}, Welcome to website!`)
        console.log(this)
    }
}

// user.welcomeMessege()

// user.name = "Jenny"

// user.welcomeMessege()

function chai(){
    console.log(this)
}

// chai()

const chaio = () => {
    let username = "Jameel"
    console.log(this)
}

// chaio()

// const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);  // Implict return 

const addTwo = (num1, num2) => ({username: "Jameel"})    // Object ko () mai rakhna he hoga


console.log(addTwo(4, 3))