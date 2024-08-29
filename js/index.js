let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let format = document.getElementById("format");
setInterval(()=>{
    let currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    let period;
    if (h>12){
        h = h-12
        period = "PM";
    }else{
        period = "AM";
    }
    hrs.innerHTML=(h<10 ? "0" :"") + h;
    mins.innerHTML=(m<10 ? "0":"")+m;
    sec.innerHTML=(s<10 ? "0":"")+s;
    format.innerHTML=period;
},1000)