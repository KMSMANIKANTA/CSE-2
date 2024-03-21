const data=[
    {
    id:"N210006",
    name:"Ch Divya",
    role:"News Reporting"
    },
    {
    id:"N210016",
    name:"K.M.S.Manikanta",
    role:"CR"
    },
    {
    id:"N210026",
    name:"B.Archana",
    role:"Student"
    },
    {
    id:"N210039",
    name:"M.Mahendra",
    role:"News Reporting"
    },
    {
    id:"N210040",
    name:"K.Pavani",
    role:"Student"
    },
    {
        id:"N210046",
        name:"G Manoj Kumar",
        role:"News Reporting"
    },
    {
    id:"N210050",
    name:"K.Tarun",
    role:"Student"
    },
    {
    id:"N210052",
    name:"G.Vijay Kumar Reddy",
    role:"Student"
    },
    {
    id:"N210056",
    name:"M.Suryam",
    role:"Student"
    },
    {
    id:"N210081",
    name:"M.Trisha Divya",
    role:"Student"
    },
    {
    id:"N210086",
    name:"A.Neeraja",
    role:"Student"
    },
    {
    id:"N210089",
    name:"K.Lokesh",
    role:"Student"
    },
    {
    id:"N210143",
    name:"P.Ranjith kumar",
    role:"Student"
    },
    {
    id:"N210161",
    name:"N.Siddartha",
    role:"Student"
    },
    {
    id:"N210163",
    name:"K.Naga Mahesh",
    role:"Student"
    },
    {
    id:"N210175",
    name:"A.Pranathi",
    role:"Student"
    },
    {
    id:"N210204",
    name:"M.Gopi Jagadeesh",
    role:"Deputy CR"
    },
    {
    id:"N210216",
    name:"B.Lakshmi",
    role:"Student"
    },
    {
    id:"N210239",
    name:"G.Mohan Krishna",
    role:"Student"
    },
    {
    id:"N210246",
    name:"G.Raghu",
    role:"Student"
    },
    {
    id:"N210272",
    name:"C.Pravallika",
    role:"Student"
    },
    {
    id:"N210288",
    name:"A.Sailaja",
    role:"News Reporting"
    },
    {
    id:"N210299",
    name:"S.V.Bindu Sathwika",
    role:"Student"
    },
    {
    id:"N210354",
    name:"G.Hemanth",
    role:"Student"
    },
    {
    id:"N210369",
    name:"G.V.N.S.Yaswanth",
    role:"Student"
    },
    {
    id:"N210396",
    name:"D.Maneesha",
    role:"Student"
    },
    {
    id:"N210398",
    name:"K.Aman Hemad",
    role:"Student"
    },
    {
    id:"N210409",
    name:"A.M.N.Vardhan",
    role:"Student"
    },
    {
    id:"N210412",
    name:"Y.Akshaya Lakshmi",
    role:"Student"
    },
    {
    id:"N210414",
    name:"B.Devika",
    role:"Student"
    },
    {
    id:"N210436",
    name:"K.Akash",
    role:"Student"
    },
    {
    id:"N210454",
    name:"T.Divya",
    role:"CR"
    },
    {
    id:"N210463",
    name:"Sk.Anas",
    role:"Student"
    },
    {
    id:"N210487",
    name:"T.Pooja",
    role:"Student"
    },
    {
    id:"N210527",
    name:"G.Keerthana",
    role:"Student"
    },
    {
    id:"N210539",
    name:"V.Bhanusree",
    role:"Student"
    },
    {
    id:"N210545",
    name:"G.Yugendhar",
    role:"Student"
    },
    {
    id:"N210548",
    name:"A.V.Hema Nandhini",
    role:"Student"
    },
    {
    id:"N210559",
    name:"T.Praveen",
    role:"Student"
    },
    {
    id:"N210605",
    name:"C.Akhila",
    role:"Student"
    },
    {
    id:"N210624",
    name:"K.Kanakamahalakshmi",
    role:"Deputy CR"
    },
    {
    id:"N210633",
    name:"V.Santosh Kumar",
    role:"Student"
    },
    {
    id:"N210671",
    name:"C.Sireesha",
    role:"Student"
    },
    {
    id:"N210685",
    name:"N.Jagadeesh",
    role:"News Reporting"
    },
    {
    id:"N210726",
    name:"K.Aswanth",
    role:"Student"
    },
    {
    id:"N210736",
    name:"S.Ganga Bhavani",
    role:"Student"
    },
    {
    id:"N210801",
    name:"U.Niharika",
    role:"Student"
    },
    {
    id:"N210841",
    name:"D.Hasinee Sreeja",
    role:"Student"
    },
    {
    id:"N210862",
    name:"P.Srivarshini",
    role:"Student"
    },
    {
    id:"N210877",
    name:"J.Karthik",
    role:"Student"
    },
    {
    id:"N210944",
    name:"M.Durga Prasad",
    role:"Student"
    },
    {
    id:"N210948",
    name:"SK.Naseer Ali",
    role:"Student"
    },
    {
    id:"N210967",
    name:"M.Swarna",
    role:"Student"
    },
    {
    id:"N210974",
    name:"R.Mohan Vinay Raj",
    role:"Student"
    },
    {
    id:"N210993",
    name:"G.Revathi",
    role:"Student"
    },
    {
    id:"N210995",
    name:"G.Mahesh sai",
    role:"Student"
    },
    {
    id:"N211024",
    name:"K.Kumar Nayak",
    role:"Student"
    },
    {
    id:"N211057",
    name:"V.Prem Chand",
    role:"Student"
    },
    {
    id:"N211086",
    name:"D.Revanth",
    role:"Student"
    },
    {
    id:"N211101",
    name:"D.Thamad Khan",
    role:"Student"
    },{
        id:"N190993",
        name:"A Pawan Kalyan",
        role:"Student"
    }
    ]
 const toggleBtn=document.querySelector(".toggle-btn")
 const crossBtn=document.querySelector(".cross-btn")
 const navbar=document.querySelector(".navbar")
const menu=document.querySelector(".menu")
const main=document.querySelector(".main")
const btn=document.querySelectorAll(".btn")
window.addEventListener("DOMContentLoaded",function(){
    var str=data.map(function(singleitem){
        return `
        <div class="infocontainer">
            <img src="https://intranet.rguktn.ac.in/SMS/usrphotos/user/${singleitem.id}.jpg"  class="image" >
            <div class="details">
                <h4 id="name"  > <span > Name&nbsp;&nbsp;:</span>${singleitem.name}</h1>
                <h4 id="idno" ><span >Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>${singleitem.id}</h4>
                <h4 id="role" ><span >Role&nbsp;&nbsp;&nbsp;&nbsp;:</span>${singleitem.role}</h4>
            </div>
            </div>
        `
    })
    str=str.join("")
    main.innerHTML=str
})  
window.addEventListener("scroll",function(){
    var pageh=window.pageYOffset
    if(pageh>=100){
        btn.forEach(function(singlebtn){
            singlebtn.style.visibility="visible"

        })
    }
    else{
        btn.forEach(function(singlebtn){
            singlebtn.style.visibility="hidden"

        })
    }
    
})

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
