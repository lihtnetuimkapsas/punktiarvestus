
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

fetch('https://sheetdb.io/api/v1/ng4ctpea7ebkw').then((data) => {
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData='';
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values["EES- JA PEREKONNANIMI"]}</td>
        <td></td>
        <td>${values.VANUSEKLASS}</td>
        <td>${values["GOOFY VÕI REGU"]}</td>
        <td>${values["Võistlus nr"]}</td>
    </tr>
    <hr/>`;
    });
    document.getElementById('listBody').innerHTML=tableData;
})