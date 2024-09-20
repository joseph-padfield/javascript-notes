// START BY PRINTING TO CONSOLE

console.log("Let's start");

// declaring variables
console.log(typeof ('Jo'))
// string
console.log(typeof (123))
// number
console.log(typeof (3.14))
// number
console.log(typeof (true))
// boolean
console.log(typeof (null))
// object
console.log(typeof (undefined))
// undefined
console.log(typeof (NaN))
// number
console.log(typeof (1/0))
// number
console.log(typeof([1,2,3,4,5,6,7,8,9]))
// object

//TYPE-JUGGLING
console.log(3=='3')
console.log(3==='3')

const name = 'Jo'
const surname = 'Padfield'
let city = 'Bath'
let age = 36
const siblings = [
    'Sam',
    'Pia',
    'Ned',
    'Leo'
]

console.log(name + ' ' + surname)

console.log(city)
city = 'London'
console.log(city)
console.log(age)
age ++
console.log(age)

console.log(siblings.includes('Sam')) //true
console.log(siblings.includes('pia')) //false

siblings.push('Tabitha')
console.log(siblings)

//Objects

const playingCard = {
    label:'Jack',
    suit:'Hearts',
    score:'10'
}

console.log(playingCard)
console.log(playingCard.label)
console.log(playingCard['suit'])

const hand = [
    {
        label:'Jack',
        suit:'Hearts',
        score:'10'
    },
    {
        label:'Ace',
        suit:'Spades',
        score:'11'
    },
    {
        label:'7',
        suit:'Diamonds',
        score:'7'
    }
]

console.log(hand)

console.table(hand)

const test = {
    one : 'this',
    two: 'is',
    three: 'a',
}

console.table(test)

test['four'] = 'test'

console.table(test)

console.table(siblings)

siblings.pop()
console.log(siblings)
if (!siblings.includes('Tabs')) {
    siblings.push('Tabs')
}
console.log(siblings)

let x = 10


//conditional
if (x>5) {
    console.log('x is greater than 5')
}
else {
    console.log('x is less than 5')
}

//ternary
let message = x>5 ? 'x is greater than 5':'x is less than 5'
console.log(message)

//loops

const numArray = []
for (let i= 0; i < 10; i ++) {
    numArray.push(i)
}
console.table(numArray)

let count = 0
while (count < numArray.length) {
    console.log(count)
    count ++
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

// forEach and functions
months.forEach(function (m) {
    console.log(m)
})

months.forEach((month) => {
    console.log(month)
})

months.forEach((month, index) => {
    console.log(`${index + 1} : ${month}`)
})

for(let item of months) {
    console.log(`${item}`)
}

//functions

function printSomething (thing) {
    console.log(thing)
}

months.forEach(printSomething)

function greet(person,phrase){
    console.log(phrase + ', ' + person + '!')
}

greet ('Jo', 'Guten Tag')

const greet2 = function(person, phrase){
    console.log(phrase + ', ' + person + '!')
}

greet2 ('Sam','Hi')

//FAT ARROW FUNCTION

const greet4 = (person, phrase) => {
    console.log(phrase + ', ' + person)
}

greet4 ('Mr Tom','Good night')

//if your function only has one parameter:

square = number => console.log(number ** 2)

square(4)