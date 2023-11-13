const ul = document.createElement('ul')
ul.classList.add('list')

const li = document.createElement('li')
li.textContent = 'Привет мир'

document.body.appendChild(ul)

ul.appendChild(li)

console.log(ul)
console.log(li)