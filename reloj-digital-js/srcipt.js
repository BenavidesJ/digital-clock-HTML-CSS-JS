

const clock = () => {
    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
    const day = date.getDay();
    const today = date.getDate();
    const calendarDate = date.getMonth();
    const year = date.getFullYear();
    

    document.querySelector('.hour').textContent = hour;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;

    document.querySelector('.day').textContent = today;
    document.querySelector('.month').textContent = `${months[calendarDate]}`;
    document.querySelector('.week-day').textContent = `${weekDays[day]}`;
    document.querySelector('.year').textContent = year;

    if(hour > 12){
        document.querySelector('.dayOrNigth').textContent = 'p.m';
    }else{
        document.querySelector('.dayOrNigth').textContent = 'a.m';
    }
}




clock();
setInterval(clock,1000);