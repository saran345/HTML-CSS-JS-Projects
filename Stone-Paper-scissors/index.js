const button=document.querySelectorAll("button")
const result=document.getElementById("result")

const player=document.getElementById("user-score")

const computer=document.getElementById("cp-score")


let playerscore=0;
let computerscore=0;

button.forEach((button)=>{
   button.addEventListener("click",()=>{
      const res=playGround(button.id,computerPlay())
      result.textContent=res;
   })
})

function computerPlay(){
   const choice=["rock","paper","scissors"]
    const random=Math.floor(Math.random()*choice.length)
    return choice[random]
}


function playGround(playerOption,computerOption){
   if(playerOption===computerOption){
      return "IT is Tie!"
   }else if((playerOption ==="rock"&& computerOption ==="scissors")||(playerOption ==="paper"&& computerOption ==="rock")||(playerOption ==="scissors"&& computerOption ==="paper")){
      playerscore++;
      player.textContent=playerscore;
      return " You Win! "+playerOption+ " Beat "+computerOption;
   }else{
      computerscore++;
      computer.textContent=computerscore
      return " You lose "+computerOption+" beat "+playerOption
   }
}
