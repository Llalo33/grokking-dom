const words = ['html', 'css', 'js']

function render(words) { 
const ul = document.createElement('ul')

for (let trueWords of words) {
    const li = document.createElement('li')
    li.textContent = trueWords
    ul.appendChild(li)
}
document.body.append(ul)
}
render(words)