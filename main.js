// const text = "Betül senden adam olmadı  "
const metin = document.getElementById("input")
const div = document.getElementById("metin")
const btn = document.getElementById("btn")

let index = 0

function writeText(){
    // document.body.innerText = text.slice(0, index)
    div.innerText = metin.value.slice(0, index)

    index++

    if(index > metin.value.length){
        index = 0
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    setInterval(writeText, 150)
})