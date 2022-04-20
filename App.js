setInterval(() => {
    let date = new Date();
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let hr = document.getElementById('hr');
    hr.style.transform = 'rotate(' + (date.getHours() + 6) + 'deg)';
    min.style.transform = 'rotate(' + (date.getMinutes() + 6) + 'deg)';
    sec.style.transform = 'rotate(' + (date.getSeconds() + 6) + 'deg)';
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());

}, 1000);