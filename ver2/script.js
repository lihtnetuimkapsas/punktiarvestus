const punktid = {};

function lisaPunktid() {
    const nimi = document.getElementById('nimi').value;
    const kohtunik1 = document.getElementById('kohtunik1').value;
    const kohtunik2 = document.getElementById('kohtunik2').value;
    const kohtunik3 = document.getElementById('kohtunik3').value;
    const kohtunik4 = document.getElementById('kohtunik4').value;
    const kohtunik5 = document.getElementById('kohtunik5').value;
    const kohtunik6 = document.getElementById('kohtunik6').value;

    if (nimi && kohtunik1 && kohtunik2 && kohtunik3 && kohtunik4 && kohtunik5 && kohtunik6) {
        const punktidSumma = parseInt(kohtunik1) + parseInt(kohtunik2) + parseInt(kohtunik3) + parseInt(kohtunik4) + parseInt(kohtunik5) + parseInt(kohtunik6);
        
        if (punktid[nimi]) {
            punktid[nimi] += punktidSumma;
        } else {
            punktid[nimi] = punktidSumma;
        }

        kuvaTulemus();
        kuvaTop3();
        kuvaVoitja();
    } else {
        alert('Palun täida kõik väljad enne punktide lisamist.');
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

function kuvaVoitja() {
    const voitjaElement = document.getElementById('voitja');
    const maxPunktid = Math.max(...Object.values(punktid));
    const voitjad = Object.keys(punktid).filter(võistleja => punktid[võistleja] === maxPunktid);

    if (voitjad.length === 1) {
        voitjaElement.textContent = `Võitja: ${voitjad[0]} (${maxPunktid} punkti)`;
    } else {
        voitjaElement.textContent = 'Viik!';
    }
}

// Lisa sündmus Enter klahvi vajutamiseks nime lahtris
document.getElementById('nimi').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik1').focus();
    }
});

// Lisa sündmus Enter klahvi vajutamiseks kohtuniku punktide lahtris
document.getElementById('kohtunik1').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik2').focus();
    }
});

document.getElementById('kohtunik2').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik3').focus();
    }
});

document.getElementById('kohtunik3').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik4').focus();
    }
});

document.getElementById('kohtunik4').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik5').focus();
    }
});

document.getElementById('kohtunik5').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('kohtunik6').focus();
    }
});

document.getElementById('kohtunik6').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        lisaPunktid();
    }
});
