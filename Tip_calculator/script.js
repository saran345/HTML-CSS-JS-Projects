const bill=document.getElementById("bill");
const tip=document.getElementById("tip");
const total=document.getElementById("total");
const btn=document.getElementById("calculate");


function calculatetotal(){
   const billt=bill.value;
   const tipt=tip.value;
   const cal=billt*(1+tipt/100);
   total.innerText=cal.toFixed(2);
}

btn.addEventListener("click",calculatetotal);