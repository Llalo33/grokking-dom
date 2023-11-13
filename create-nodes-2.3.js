const words = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

function render(words) {
    const ul = document.createElement('ul')
    for (let trueWords of words) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = trueWords.name
        a.href = trueWords.url
        ul.appendChild(li)
        li.appendChild(a)
    }
    document.body.append(ul)
}

render(words)
