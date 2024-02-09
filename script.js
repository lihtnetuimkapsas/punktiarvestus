
//INDEX.HTML

const punktid = {};

function lisaPunktid() {
    const nimi = document.getElementById('nimi').value;
    const punktidInput = document.getElementById('punktid').value;

    if (nimi && punktidInput) {
        if (punktid[nimi]) {
            punktid[nimi] += parseInt(punktidInput);
        } else {
            punktid[nimi] = parseInt(punktidInput);
        }

        kuvaTulemus();
        kuvaTop3();
    } else {
        alert('Palun täida mõlemad väljad enne punktide lisamist.');
    }
}

function kuvaTulemus() {
    const tulemusElement = document.getElementById('tulemus');
    tulemusElement.innerHTML = '<strong>Tulemus:</strong><br>';

    for (const võistleja in punktid) {
        tulemusElement.innerHTML += `${võistleja}: ${punktid[võistleja]} punkti<br>`;
    }
}

function kuvaTop3() {
    const top3Element = document.getElementById('top3');
    top3Element.innerHTML = '<strong>Top 3:</strong><br>';

    const sortedVõistlejad = Object.keys(punktid).sort((a, b) => punktid[b] - punktid[a]);

    for (let i = 0; i < Math.min(3, sortedVõistlejad.length); i++) {
        top3Element.innerHTML += `${i + 1}. ${sortedVõistlejad[i]}: ${punktid[sortedVõistlejad[i]]} punkti<br>`;
    }
}

// Lisa sündmus Enter klahvi vajutamiseks nime lahtris
document.getElementById('nimi').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('punktid').focus();
    }
});

// Lisa sündmus Enter klahvi vajutamiseks punktide lahtris
document.getElementById('punktid').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        lisaPunktid();
    }
});


// ATHLETES.HTML


fetch('https://script.google.com/macros/s/AKfycbxWsoLI6Vsu7Y3SHFJIXG5GR2rZTmLePDlOG-zAEdUV7tJ36p7tEqq-958DZicdweog/exec').then((data) => {
    return data.json();
}).then((objectData) => {

    let tableData = '';
    objectData.data.slice(1).map((value) => {
        tableData += `<tr>
            <td></td>
            <td>${value.TÄISNIMI}</td>
            <td></td>
            <td>${value["GOOFY VÕI REGU"]}</td>
            <td>${value["VÕISTLUS NR"]}</td>
            </tr>
            <tr>
            <div id="addPoints">
            <p><strong>1.Run</strong></p>
            <p id="firstRun"></p>
            <p><strong>2.Run</strong></p>
            <p id="secondRun"></p>
            </div>
            </tr>
            <hr/>`;

    });
    document.getElementById('listBody').innerHTML=tableData;
})




// PROOV 

/* fetch('https://script.google.com/macros/s/AKfycbxWsoLI6Vsu7Y3SHFJIXG5GR2rZTmLePDlOG-zAEdUV7tJ36p7tEqq-958DZicdweog/exec').then((data) => {
    return data.json();
}).then((objectData) => {
    const athletesList = objectData.data

    athletesList.slice(1).forEach(athlete => {
        const athleteName = athlete.TÄISNIMI;
        const style = athlete["GOOFY VÕI REGU"];
        const nr = athlete["VÕISTLUS NR"];

        const listItem = document.createElement('tr');
        listItem.setAttribute('type', 'button');
        listItem.setAttribute('id', 'athlete');

        const addPoints = document.createElement('tr');
        addPoints.setAttribute('id', 'addPoints')

        listItem.innerHTML = `
            <td><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg></td>
            <td>${athleteName}</td>
            <td></td>
            <td></td>
            <td>${style}</td>
            <td>${nr}</td>`;

        addPoints.innerHTML = `<div>${athleteName}</div>`

        const listBody = document.getElementById('listBody');
        listBody.append(listItem);
        listBody.append(addPoints)

        listItem.addEventListener('click', () => {
            showAddPoints(athlete);

        addPoints.addEventListener('click', () => {
            hideAddPoints();
        })
        })

        
function showAddPoints() {
    addPoints.style.display = 'block';
}

function hideAddPoints() {
    addPoints.style.display = 'none';
}

    });
}); */
