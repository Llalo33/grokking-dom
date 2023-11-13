const div = document.createElement('div')
const ul = document.createElement('ul')
const liFirst = document.createElement('li')
const liSecond = document.createElement('li')
const aFirst = document.createElement('a')
const aSecond = document.createElement('a')

aFirst.href = 'https://instagram.com/intocode'
aFirst.textContent = 'Наш инстаграм'

aSecond.href = 'https://intocode.ru'
aSecond.textContent = 'Наш сайт'

document.body.appendChild(div)

div.appendChild(ul)

ul.appendChild(liFirst)
ul.appendChild(liSecond)

liFirst.appendChild(aFirst)
liSecond.appendChild(aSecond)
