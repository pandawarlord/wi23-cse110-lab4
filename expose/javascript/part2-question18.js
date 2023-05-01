function muc(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(muc, 1000);