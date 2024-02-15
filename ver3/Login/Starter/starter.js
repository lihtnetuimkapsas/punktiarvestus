
//FETCH DATA TO TABLE

fetch('https://script.google.com/macros/s/AKfycbysLOeQe9VjWgD4gxIFiNhlwlFXgzJSy5q4SvMJ-x460atmEflmNwnpVj6sx2tRGAO1/exec').then((data) => {
    return data.json();
}).then((objectData) => {
    const athleteList = objectData.data.slice(1)

    athleteList.forEach(athlete => {
        const athleteName = athlete.name;
        const sports = athlete.sports;
        const athleteNr = athlete.nr;

        const athleteItem = document.createElement('tr');

        athleteItem.innerHTML = `
        <td>${athleteName}</td>
        <td>${sports}</td>
        <td>${athleteNr}</td>`;

        document.getElementById('listBody').append(athleteItem);

        // CLICK EVENT FOR EACH ROW
        

        athleteItem.addEventListener('click', () => {
            nextAthlete = athlete.name;
            nextSports = athlete.sports;
            nextNr = athlete.nr;
            showNextAthlete(athlete);
            nextAthleteRow = athleteItem;
        });



        // CLICK EVENT FOR "START" BUTTON (removes the name from the list, removes number from "count", sends name to "currently riding")

        // displays remaning nr of athletes

        let rowCount = listBody.rows.length;
        document.getElementById('listCount').innerText = rowCount;

        // button click event

        const start = document.getElementById('start');

        start.addEventListener('click', () => {
            showRidingNow();
            document.getElementById('ridingNext').innerText = ('(vali)');
            document.getElementById('nextSports').innerText = ('');
            document.getElementById('nextNr').innerText = ('');
            nextAthleteRow.remove();
            remaingCount();
        });



    });
});



// FUNCTIONS

function showNextAthlete() {
    document.getElementById('ridingNext').innerText = nextAthlete;
    document.getElementById('nextSports').innerText = nextSports;
    document.getElementById('nextNr').innerText = nextNr;
};

function showRidingNow() {
    document.getElementById('ridingNow').innerText = nextAthlete;
    document.getElementById('ridingNowSports').innerText = nextSports;
    document.getElementById('ridingNowNr').innerText = nextNr;
};

function remaingCount() {
    let rowCount = listBody.rows.length;
    document.getElementById('listCount').innerText = rowCount;
    if (rowCount === 0) {
        document.getElementById('chooseTitle').innerText = 'Tänaseks on kõik võistlejad lõpetanud';
    }
};

