// Singleton
// const facebookUser = new Object();

// non-singleton

const facebookUser = {}

facebookUser.id = "123abc";
facebookUser.name = "JEMI";
facebookUser.isLoggedin = false;

// console.log(facebookUser);

const regularUser = {
    email: "someone@email.com",
    fullname: {
        username: {
            firstname: "Jameel",
            lastname: "Sikandar",
        }
    }
}
// console.log(regularUser.fullname.username.lastname);     // accessed via . notation

// Objects combining
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = Object.assign({}, obj1, obj2, obj4);   

const obj3 = {...obj1, ...obj2, ...obj4}    // relaible meathod for combining


// console.log(obj3);

// object inside array

const user = [
    {
        is: 1,
        email: "so@mail.com",

    },
    {
        is: 2,
        email: "so@mail.com",

    },
    {
        is: 3,
        email: "so@mail.com",

    },
]

// console.log(facebookUser);

// console.log(Object.keys(facebookUser));  // it makes array of an object very usefull
// console.log(Object.values(facebookUser));

 // de-structuring of object
const course = {
    name: "JavaScript",
    price: "999",
    couseInstructor: "Hitesh",
}

const {couseInstructor: instructor} = course

console.log(instructor);


 // JSON intro
 // {
 //    "name": "Jameel",
 //    "coursename": "JAvascript",
 //    "price": "free",

 // }

 
