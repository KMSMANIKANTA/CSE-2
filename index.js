const toggleBtn=document.querySelector(".toggle-btn")
const crossBtn=document.querySelector(".cross-btn")
const menu=document.querySelector(".menu")
const classmembersBtn=document.querySelector(".btn-container1")
const newsBtn=document.querySelector(".btn-container2")
const main=document.querySelector(".main")
const home=document.querySelector("#homelink")
const bgvideo=document.querySelector("#backgroudvideo")
const black=document.querySelector(".black")
const contentafterbg=document.querySelector(".contentafterbg")
const blackfortoggle=document.querySelector(".blackfortoggle")


toggleBtn.addEventListener("click",function(){
    menu.classList.add("active")
    toggleBtn.style.visibility="hidden"
    crossBtn.style.visibility="visible"
})
crossBtn.addEventListener("click",function(){
    menu.classList.remove("active")
    toggleBtn.style.visibility="visible"
    crossBtn.style.visibility="hidden"
})

home.addEventListener("click",function(){
    bgvideo.style.visibility="visible"
    learnMoreBtn.style.display="block"
    newsBtn.style.display="block"
    black.style.visibility="visible"
    menu.classList.remove("active")
    crossBtn.style.visibility="hidden"
    toggleBtn.style.visibility="visible"
    menu.classList.remove("afterbgvideo")
    contentafterbg.style.display="none"
    blackfortoggle.style.visibility="hidden"
})







// learnMoreBtn.addEventListener("click",function(){
//     main.style.visibility="hidden"
//     if(menu.classList.contains("active")){
//         menu.classList.remove("active")
//         crossBtn.style.visibility="hidden"
//         toggleBtn.style.visibility="visible"
//     }
// })
// homelink.addEventListener("click",function(){
//     main.style.visibility="visible"  
//     menu.classList.remove("afterpage")
//     menu.classList.toggle("active")
//     crossBtn.style.visibility="hidden"
//     toggleBtn.style.visibility="visible"
// })