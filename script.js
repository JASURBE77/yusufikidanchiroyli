let sarlavha = document.querySelector('#sarlavha1')
let text1 = document.querySelector('#text1')
let text2 = document.querySelector('#text2')

let pr1 = +prompt('son kirgiz')


for (let index = 0; index < 15; index++) {
    let javob =  Math.round(Math.random() * pr1)
    sarlavha.textContent += ` ${index}, ${javob}`

    if (javob % 2 === 0) {
        text1.textContent += `${javob}, `
        text1.style.color = 'red'
    } else {
        text2.textContent += `${javob}, `
        text2.style.color = 'green'
    }
}


