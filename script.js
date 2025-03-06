let button=document.querySelector("button");
let text=document.querySelector(".text"); 
let word=document.querySelector(".word");
let letter=document.querySelector(".letter");
let sen=document.querySelector(".sen");

button.addEventListener("click",()=>{
    let len=text.value.replace(/\s/g, "").length;
    letter.innerText=`Total Letters : ${len}`;

    let wordarray=text.value.split(/\s+/).filter(word=>word.length>0);
    word.innerText=`Total Words : ${wordarray.length}`;

    let senarray=text.value.split(/[.!?]+/).filter(sentence=>sentence.trim().length>0); // Fixed regex
    sen.innerText=`Total Sentences : ${senarray.length}`;
});
