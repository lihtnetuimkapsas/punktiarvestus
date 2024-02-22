
const nextUp = document.getElementById('name, number')
const ridingNowBox = document.getElementById('ridingNow')

document.addEventListener('DOMContentLoaded', () => {
    const nextAthlete = localStorage.getItem('nextAthlete');
    const nextNr = localStorage.getItem('nextNr');
    const ridingNow = localStorage.getItem('ridingNow');
    if (nextAthlete) {
        nextUp.innerText = nextAthlete + ' ' + nextNr;
        ridingNowBox.innerText = ridingNow
    }

});