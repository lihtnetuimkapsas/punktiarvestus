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
