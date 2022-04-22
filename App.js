setInterval(() => {
    let date = new Date();
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let hr = document.getElementById('hr');
    hr.style.transform = 'rotate(' + (((date.getHours() - 12) * 30) + 90 + 'deg');
    min.style.transform = 'rotate(' + ((date.getMinutes() * 6) + 90 + 'deg');
    sec.style.transform = 'rotate(' + ((date.getSeconds() * 6) + 90 + 'deg');
}, 1000);