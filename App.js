//SetInterval is repeat in every 1000ms (1 Second)
setInterval(() => {
    let date = new Date();
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let hr = document.getElementById('hr');
    //Here we do -12 with current hour to convert into 12 hour fromat
    //Then we multiply by 30 because, hours is between 1-12 so if we multiply it by 30 then it will be 30deg  to 360deg
    // also we can write as without cobverting into 24 hour format
    // hr.style.transform = 'rotate(' + ((date.getHours() * 15) + 90 + 'deg');
    hr.style.transform = 'rotate(' + (((date.getHours() - 12) * 30) + 90 + 'deg');

    //Then we multiply by 6 because, minutes is between 1-60 so if we multiply it by 6 then it will be 6deg  to 360deg
    min.style.transform = 'rotate(' + ((date.getMinutes() * 6) + 90 + 'deg');

    //Then we multiply by 6 because, seconds is between 1-60 so if we multiply it by 6 then it will be 6deg  to 360deg
    sec.style.transform = 'rotate(' + ((date.getSeconds() * 6) + 90 + 'deg');
}, 1000);