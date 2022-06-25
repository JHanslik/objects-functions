// 01 - Object

// const cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true
// }

// console.log (cat)

// if (cat.isCute){
//     console.log("So cute !")
// }else {
//     console.log ("meh")
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - Combine

// const cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true
// }
// const cat2 = {
//     name: "Yumi",
//     age: 2,
//     isCute: true
// }
// const cats = [cat, cat2]

// console.log (cat.age)
// console.log (cat2.isCute)
// console.log ()
// console.log (cat["age"])
// console.log (cat2["isCute"])
// console.log ()
// console.log (cats[0].age)
// console.log (cats[1].isCute)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 03 - Even

// const checkIfEven = (num) => {
//     if (num % 2 === 0) {
//         console.log (`${num} is Even`)
//     } else {
//         console.log (`${num} is Odd`)
//     }
// }

// checkIfEven (35)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 04 - Compare

// const compare = (x, y) => {
//     if (x > y) {
//         console.log (`${x} is bigger`)
//     }else if (x < y) {
//         console.log (`${y} is bigger`)
//     }else {
//         console.log ("Both are the same")
//     }
// }

// compare (123, 748596)
// compare (74856, 456)
// compare (65, 65)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 05 - Add Up

// const addUp = (num) => {
//     let sum = 0 
//     for (i=0; i <= num; i++) {
//         sum += i
//     }
//     console.log (sum)
// }

// addUp (12)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 06 - Time

// const format = (num) => {
//     const hours = Math.floor(num / 3600)
//     const minutes = Math.floor ((num - (hours * 3600)) / 60)
//     const seconds = num - (hours * 3600) - (minutes * 60)

//     console.log (`${hours}h : ${minutes}m : ${seconds}s`)
// }

// format (3700)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 07 - Password generation

const generatePassword = (num) => {
    let password = ""

    for (i = 0; i < num; i ++) {
        password += String.fromCharCode (Math.floor(Math.random() * 26) + 65)
    }
    
    if (password.length >= 6 && password.length <= 15) {
        console.log (`Your password is ${password}`)
    } else {
        console.log ("ERROR")
    }
}

generatePassword (16)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 08 - Let's Play

// let player1 = null
// let player2 = null
// const launchDice = (numberOfDice) => {
//     let sum = 0
//         for (n = 1; n <= numberOfDice; n ++) {
//             sum += Math.floor(Math.random() * 6) + 1
//         }
//         return sum
// }
    
// player1 = launchDice (5)
// player2 = launchDice (5)

// if (player1 > player2) {
//     console.log (`Player 1 won with ${player1} against ${player2}`)
// }else if (player2 > player1) {
//     console.log (`Player 2 won with ${player2} against ${player1}`)
// }else {
//     console.log (`It's a draw with ${player1} !`)
// }