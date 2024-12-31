const heading=document.querySelector(".heading");
const text=heading.textContent;
const words=text.split("");
heading.textContent="";

for(let i=0;i<words.length;i++){
    heading.innerHTML+="<span>"+ words[i] +"</span>";
}

let count=0;
let timer=setInterval(onfade,50);

function onfade(){
        const span=heading.querySelectorAll("span")[count];
        span.classList.add("fade");
        count++;
}