const textareaE1=document.getElementById("textarea");
const totalCounter=document.getElementById("total-counter")
const remainingcounter=document.getElementById("remaining-counter")
const maxlength=textareaE1.getAttribute("maxlength")
textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounter.innerText=textareaE1.value.length;
    remainingcounter.innerText=maxlength-textareaE1.value.length;
}