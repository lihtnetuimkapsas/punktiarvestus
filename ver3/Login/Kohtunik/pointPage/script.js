
const nextUp = document.getElementById('name, number')

document.addEventListener('DOMContentLoaded', () => {
    const nextAthlete = localStorage.getItem('nextAthlete');
    const nextNr = localStorage.getItem('nextNr');
    if (nextAthlete) {
        nextUp.innerText = nextAthlete + ' ' + nextNr
    }
});