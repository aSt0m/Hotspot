

const number = document.querySelector(".numero");
const start = document.querySelector(".iniciar");
const stop = document.querySelector(".detener")


number.innerHTML = 10;

start.addEventListener("click", iniciar)


let num = 10;
function iniciar(){
    intervalTime = setInterval(()=>{
       console.log(num);
       num--
       number.innerText = num;
       if (num===0){
           clearInterval(intervalTime)
           console.log("Felicidades")
           
           location.href = "https://www.google.com";
       }
    }, 1000)
     
}
