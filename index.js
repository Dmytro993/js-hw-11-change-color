

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
 
 const btn1 = document.querySelector('.box button[data-action="start"]')
 const btn2 = document.querySelector('.box button[data-action="stop"]')
 const body = document.querySelector('body')
 
btn1.addEventListener("click", start)
btn2.addEventListener("click", stop)

let gogo = "";


function start (){  
   gogo =  setInterval(() => {
   body.style.background =  colors[randomIntegerFromInterval(0,colors.length -1)]   
}, 1000);
   btn1.disabled = "disabled"
}  


function stop(){
  btn1.removeAttribute('disabled')
  clearInterval(gogo)
}
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
