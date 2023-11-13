const words = ['html', 'css', 'js']
const ul = document.createElement('ul')

document.body.append(ul)

for (let trueWords of words) {
    const li = document.createElement('li')
    li.textContent = trueWords
    ul.appendChild(li)
}

