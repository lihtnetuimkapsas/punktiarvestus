
// SEE LÄHEB KOHTUNIKU LEHELE

// Display the nextAthlete variable in the other page

document.addEventListener('DOMContentLoaded', () => {
    const nextAthlete = localStorage.getItem('nextAthlete');
    if (nextAthlete) {
        console.log(nextAthlete)
    }
});