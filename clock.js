console.log("digital clock");
let hrs=document.getElementById("hours");
let min=document.getElementById("min");
let sec=document.getElementById("sec");


setInterval(() => {
    hrs.innerHTML =(new Date().getHours()<10?"0":"")+new Date().getHours();
    min.innerHTML= (new Date().getMinutes()<10?"0":"")+new Date().getMinutes();
    sec.innerHTML= (new Date().getSeconds()<10?"0":"")+new Date().getSeconds();
      
}, 500);