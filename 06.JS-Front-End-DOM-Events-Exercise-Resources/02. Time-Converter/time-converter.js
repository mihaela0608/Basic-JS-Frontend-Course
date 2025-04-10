document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let days = document.getElementById('days-input');
    let hours = document.getElementById('hours-input');
    let minutes = document.getElementById('minutes-input');
    let seconds = document.getElementById('seconds-input');

    let buttons = document.querySelectorAll("input[type='submit']");

    for(let button of buttons){
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            let id = e.target.id;
            let value;

            if (id === 'daysBtn') {
                value = Number(days.value);
                hours.value = value * 24;
                minutes.value = value * 24 * 60;
                seconds.value = value * 24 * 60 * 60;
            } else if (id === 'hoursBtn') {
                value = Number(hours.value);
                days.value = value / 24;
                minutes.value = value * 60;
                seconds.value = value * 60 * 60;
            } else if (id === 'minutesBtn') {
                value = Number(minutes.value);
                days.value = value / 60 / 24;
                hours.value = value / 60;
                seconds.value = value * 60;
            } else if (id === 'secondsBtn') {
                value = Number(seconds.value);
                days.value = value / 60 / 60 / 24;
                hours.value = value / 60 / 60;
                minutes.value = value / 60;
            }
        });
    }
}