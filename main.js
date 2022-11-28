let btn = document.querySelector("#btn")
let counter = document.querySelector("#counter")
let mode = window.localStorage.getItem("mode")
if(!mode){
    window.localStorage.setItem("mode",0)
}
if(mode=="1"){
    document.body.classList.add("dark")
}
const container_switcher = document.querySelector(".container-switch")
container_switcher.addEventListener("click", () => {
    container_switcher.classList.toggle("active")
    document.body.classList.toggle("dark")
    let mode = window.localStorage.getItem("mode")
    if(mode=="0"){
        window.localStorage.setItem("mode",1)
    }
    else{
        window.localStorage.setItem("mode",0)
    }
})