
const deg = 30;
const HH = document.querySelector(".HH")
const mm = document.querySelector(".mm")
const ss = document.querySelector(".ss")


setInterval(()=>{
    const agr = new Date();
    horas = agr.getHours() * deg;
    min   = agr.getMinutes()*360/60;
    sec   = agr.getSeconds()*360/60;

    HH.style.transform = `rotate(${horas + min/12}deg)` 
    mm.style.transform = `rotate(${min}deg)`
    ss.style.transform = `rotate(${sec}deg)`
})
