const pertanyaan = document.getElementById('question')
const jawaban = document.getElementById('answer')
let init = 0

const botSay = (data) => {
    return ["Hello, perkenalkan saya GoyBot. siapa nama kamu?",
    `HAII! ${data?.nama} salam kenal, btw usia kamu berapa? `,
    `Ohh ${data?.usia}, btw hobi kamu apa `,
    `wah sama aku juga hobi ${data?.hobi}, kamu udah punya pacar ?`,
    `ohh ${data?.pacar}, yaudah udahan yaa?`,]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart( ) {
    init ++ 
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    }else if(init === 2 ) {
        botDelay({ usia: jawaban.value})
    }else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    }else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    }else if (init === 5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    console.log({ userData: userData })
    setTimeout (() => { 
    pertanyaan.innerHTML = botSay(jawabanUser) [init]
    }, [500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ya ${userData} udh nyobain bot ini hehe`
    jawaban.value = "siap thanks juga"
}

function botEnd() {
    window.location.reload()
}