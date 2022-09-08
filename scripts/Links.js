//Iniciar

const bnt = document.getElementById("btn")

bnt.addEventListener('click', FnSoma)

function FnSoma() {
    alert('Ainda estou trabalhando nisso!')
    retorn
}

//INSTAGRAM

const insta = document.getElementById('insta')
const Url = 'https://www.instagram.com/_recovery_z/'

insta.addEventListener('click', openInNewTab)

function openInNewTab(Url) {
    const win = window.open(Url, 'blank')
    win.focus()
}

insta.addEventListener('click', () => {
    openInNewTab(Url)
})



//Twitter

const Twitter = document.getElementById("twitter")
const link = 'https://www.twitter.com'

Twitter.addEventListener('click', openInNewTab)

function openInNewTab(link) {
    const win = window.open(link, 'blank')
    win.focus()
}
Twitter.addEventListener('click', () => {
    openInNewTab(link)
})

//busca

const buscar = document.getElementById("busca")

buscar.addEventListener('click', FnSoma)

function FnSoma() {
    alert('Ainda estou trabalhando nisso!')
    retorn
}
//Response links

//instagram

const instagram = document.getElementById('resInsta')
const Url2 = 'https://www.instagram.com/_recovery_z/'

instagram.addEventListener('click', openInNewTab)

function openInNewTab(Url2) {
    const win = window.open(Url2, 'blank')
    win.focus()
}

instagram.addEventListener('click', () => {
    openInNewTab(Url2)
})

//Twitter

const twitter = document.getElementById("resTwitter")
const link2 = 'https://www.twitter.com'

twitter.addEventListener('click', openInNewTab)

function openInNewTab(link2) {
    const win = window.open(link2, 'blank')
    win.focus()
}
twitter.addEventListener('click', () => {
    openInNewTab(link2)
})

//Busca

const busca = document.getElementById('resBusca')

busca.addEventListener('click', FnSoma)

function FnSoma() {
    alert('Ainda estou trabalhando nisso!')
    return
}