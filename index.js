// let username

// document.getElementById('send_button').onclick = function() {
//     username = document.getElementById('user_input').value
//     document.getElementById('welcome_message').textContent = `Welcome, ${username}!`
//     console.log(username)
// }

// ===============================

// let age = '10'
// let x = 'pizza'
// let y = 'pizza'
// let z = 'pizza'

// age = Number(age)

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

// console.log(age + 1)

// ===============================

// const PI = 3.14159
// let radius
// let circumference

// document.getElementById('radiusSubm').onclick = function() {
//     radius = document.getElementById('new_myinput').value
//     radius = Number(radius)
//     circumference = 2 * PI * radius
//     document.getElementById('result').textContent = `Длина окружности равна ${circumference}cm`
// }

// ===============================

// const minus = document.getElementById('minus')
// const plus = document.getElementById('plus')
// const reset = document.getElementById('reset')
// const result = document.getElementById('counter')
// let counter = 0

// minus.onclick = function() {
//     counter -= 1
//     result.textContent = counter
// }

// plus.onclick = function() {
//     counter += 1
//     result.textContent = counter
// }

// reset.onclick = function() {
//     counter = 0
//     result.textContent = counter
// }

// ===============================

// console.log(Math.PI)

// ===============================

const min = 50
const max = 100

let randomyNumber = Math.floor(Math.random() * (max - min + 1)) + min

document.getElementById('roll_button').onclick = function() {
    randomyNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomyNumber < 50) {
        document.getElementById('my_number').textContent = `Выпало меньше 50 | ${randomyNumber}`
    } else if (randomyNumber > 50) {
        document.getElementById('my_number').textContent = `Выпало больше 50 | ${randomyNumber}`
    } else {
        document.getElementById('my_number').textContent = `Выпало 50 | ${randomyNumber}`
    }
    // document.getElementById('my_number').textContent = randomyNumber
}