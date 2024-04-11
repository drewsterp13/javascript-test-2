//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function showFavoriteFoods() {
    for (let i = 0; i < Object.keys(person3).length; i++) {
        console.log(`${Object.keys(person3)[i]}: `)
        if (Array.isArray(Object.values(person3)[i])) {
            for (let j = 0; j < Object.values(person3)[i].length; j++) {
                if ((Object.values(person3)[i][j] instanceof Object) == true) {
                    let new_object = Object.values(person3)[i][j]
                    for (let k = 0; k < Object.keys(new_object).length; k++) {
                        console.log(`- ${Object.keys(new_object)[k]}: ${Object.values(new_object)[k]}`)
                    }
                } else {
                    console.log(`- ${Object.values(person3)[i][j]}`)
                }
            }
        } else {
            console.log(`- ${Object.values(person3)[i]}`)
        }
    }
    return "done"
}

console.log(showFavoriteFoods())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name
    this.age = age

    return this.name, this.age

}

let drew = new Person("Drew", 23)
let vanessa = new Person("Vanessa", 22)


// Use an arrow to create the printInfo method

printInfo = (n, a) => {
    return `NAME: ${n}, AGE: ${a}.`
}

addAge = (increment, n, a) => {
    a = a + increment;
    return `${n} is now ${a} years old.`
}

console.log(printInfo(drew.name, drew.age))
console.log(addAge(1, drew.name, drew.age))
console.log(printInfo(vanessa.name, vanessa.age))
console.log(addAge(3, vanessa.name, vanessa.age))


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let message = "Minecraft"

const measureLength = (len) => {
    return new Promise( (resolve, reject) => {
        if (len > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

measureLength(message.length)
.then( (result) => {
    console.log("Big word.")
})

.catch( (error) => {
    console.log("Small Number")
})