const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

setInterval(()=>{
    let d = new Date();
    let h_rot = (d.getHours() % 12) * 30 + (d.getMinutes() / 12) * 6;
    document.getElementById('hour-id').style.transform = "rotate(" + h_rot + "deg)";

    let m_rot = (d.getMinutes() * 6);
    document.getElementById('min-id').style.transform = "rotate(" + m_rot + "deg)";

    let s_rot = (d.getSeconds() * 6);
    document.getElementById('sec-id').style.transform = "rotate(" + s_rot + "deg)";
},1000)

let d = new Date();
if(d.getHours() <= 12){
    document.getElementById('mer-id').innerText = "AM";
}
else{
    document.getElementById('mer-id').innerText = "PM";
}

document.getElementById('date-text').innerText = d.getDate() + " - " + months[d.getMonth()] + " - " + d.getFullYear();
