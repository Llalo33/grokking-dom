const divFirst = document.createElement('div')
const divSecond = document.createElement('div')
const divThird = document.createElement('div')

divFirst.classList.add('red')
divSecond.classList.add('green')
divThird.classList.add('blue')

divThird.textContent = 'Я вложен'

document.body.append(divFirst)

divFirst.appendChild(divSecond)
divSecond.appendChild(divThird)

console.log(divFirst)
console.log(divSecond)
console.log(divThird)