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

// const min = 50
// const max = 100

// let randomyNumber = Math.floor(Math.random() * (max - min + 1)) + min

// document.getElementById('roll_button').onclick = function() {
//     randomyNumber = Math.floor(Math.random() * (max - min + 1)) + min
//     if (randomyNumber < 50) {
//         document.getElementById('my_number').textContent = `Выпало меньше 50 | ${randomyNumber}`
//     } else if (randomyNumber > 50) {
//         document.getElementById('my_number').textContent = `Выпало больше 50 | ${randomyNumber}`
//     } else {
//         document.getElementById('my_number').textContent = `Выпало 50 | ${randomyNumber}`
//     }
// }

// ===============================

// let age = 18

// if (age >= 18) {
//     console.log('Вы совершеннолетний')
// }
// else {
//     console.log('Вы не совершеннолетний')
// }

// ===============================

// const myCheckBox = document.getElementById('myCheckBox')
// const visaBtn = document.getElementById('viseBtn')
// const mrBtn = document.getElementById('MrBtn')
// const mirBtn = document.getElementById('MirBtn')
// const mySubmit = document.getElementById('mySubmit')
// const subResult = document.getElementById('subResult')
// const paymentResult = document.getElementById('paymentResult')

// mySubmit.onclick = function() {
//     if (myCheckBox.checked) {
//         subResult.textContent = `Вы подписаны!`
//     }
//     else {
//         subResult.textContent = `Вы не подписаны!`
//     }
//     if (visaBtn.checked) {
//         paymentResult.textContent = `Вы выбрали Visa`
//     }
//     else if (mrBtn.checked) {
//         paymentResult.textContent = `Вы выбрали MrBtn`
//     }
//     else 
//     {
//         paymentResult.textContent = `Вы выбрали MirBtn`
//     }
// }

// let age = 18

// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вы не совершеннолетний')

// ===============================

// let username = ''

// while (username == '' | username === null){
//     username = window.prompt('Введите ваше имя')
// }

// console.log(username)

// ===============================

// for(let i = 0; i < 10 + 1; i++){
//     if(i == 5) {
//         continue
//     }
//     if (i == 8) {
//         break
//     }
//     console.log(i)
// }

// ===============================

// const min = 1
// const max = 100
// const answer = Math.floor(Math.random() * (max - min + 1)) + min

// let attempts = 0
// let guess
// let running = true

// while (running) {

//     guess = window.prompt(`Угадай число от ${min} до ${max}`)
//     guess = Number(guess)

//     if(isNaN(guess)) {
//         window.alert('Укажите валидное число!')
//     }
//     else if (guess < min | guess > max) [
//         window.alert('Укажите валидное число!')
//     ]
//     else {
//         attempts += 1
//         if (guess > answer){
//             window.alert('Загаданное число меньше')
//         }
//         else if (guess < answer){
//             window.alert('Загаданное число больше')
//         }
//         else {
//             window.alert(`Вы угадали за ${attempts} попыток!`)
//             running = false
//         }
        
//     }
// }

// ===============================