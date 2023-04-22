const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
let d1 = new Date();
let h = 0, m = 0, s = 0;
const h_si = setInterval(()=>{
    h++;
    document.getElementById("hour-id").innerText = h;
    if(h == d1.getHours()){
        clearInterval(h_si);
    }
},25);

const m_si = setInterval(()=>{
    m++;
    document.getElementById("min-id").innerText = m;
    if(m == d1.getMinutes()){
        clearInterval(m_si);
    }
},25);

const s_si = setInterval(()=>{
    s++;
    document.getElementById("sec-id").innerText = s;
    if(s == d1.getSeconds()){
        clearInterval(s_si);
    }
},25); 

setInterval(()=>{
    let d = new Date();
    document.getElementById("hour-id").innerText = d.getHours();
    document.getElementById("min-id").innerText = d.getMinutes();
    document.getElementById("sec-id").innerText = d.getSeconds();
},1000)

document.getElementById('date-id').innerText = d1.getDate() + " - " + months[d1.getMonth()] + " - " + d1.getFullYear();
