
const addAthlete = document.getElementById('addAthlete');
const addAthleteBtn = document.getElementById('addAthleteBtn');


function showAthleteForm() {

    addAthlete.style.display = 'block';
    addAthleteBtn.style.display = 'none';
}

function hideAthleteForm() {

    addAthlete.style.display = 'none';
    addAthleteBtn.style.display = 'block';
}

fetch('https://script.google.com/macros/s/AKfycbxWsoLI6Vsu7Y3SHFJIXG5GR2rZTmLePDlOG-zAEdUV7tJ36p7tEqq-958DZicdweog/exec').then((data) => {
    return data.json();
}).then((objectData) => {

    let tableData='';
    objectData.data.slice(1).map((values) => {
        tableData += `<tr>
        <td>${values.TÄISNIMI}</td>
        <td></td>
        <td>${values.VANUSEKLASS}</td>
        <td>${values["GOOFY VÕI REGU"]}</td>
        <td>${values["VÕISTLUS NR"]}</td>
    </tr>
    <hr/>`;

    });

    document.getElementById('listBody').innerHTML=tableData;
})


