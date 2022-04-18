function current() {
    let dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    document.getElementById('hr').innerHTML = hour;
    document.getElementById('mi').innerHTML = min;
    document.getElementById('sc').innerHTML = sec;
}
setInterval(current, 1000);