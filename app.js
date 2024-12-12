let x = document.getElementById("x");
let link1 = document.getElementById("sk");
let link2 = document.getElementById("ex");
let link3 = document.getElementById("ed");
let link1_desc = document.getElementById("sk1");
let link2_desc = document.getElementById("ex1");
let link3_desc = document.getElementById("ed1");
let responsive = document.querySelector("div.responsive");
let i = 0;
let txt = "Front End Developer </>";
function def(){
    if(i < txt.length){
        x.innerHTML += txt.charAt(i);
        i++;
        setTimeout(def, 100)
    }
}

function lol(){
    responsive.classList.toggle("open")
}

link1.onclick = ()=>{
    link1.classList.add("active-link");
    link1_desc.classList.add("active-tab")
    link2_desc.classList.remove("active-tab");
    link3_desc.classList.remove("active-tab");
    link2.classList.remove("active-link");
    link3.classList.remove("active-link");
}
link2.onclick = ()=>{
    link2.classList.add("active-link");
    link2_desc.classList.add("active-tab");
    link1_desc.classList.remove("active-tab");
    link3_desc.classList.remove("active-tab");
    link1.classList.remove("active-link");
    link3.classList.remove("active-link");
}
link3.onclick = ()=>{
    link3.classList.add("active-link");
    link3_desc.classList.add("active-tab");
    link2_desc.classList.remove("active-tab");
    link1_desc.classList.remove("active-tab");
    link2.classList.remove("active-link");
    link1.classList.remove("active-link");
}