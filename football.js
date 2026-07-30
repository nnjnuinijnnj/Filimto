const API_TOKEN = "400ae25d8aee49bd93e10efb65b50462";

const box = document.getElementById("matches");

fetch("https://api.football-data.org/v4/matches", {
    method: "GET",
    headers: {
        "X-Auth-Token": API_TOKEN
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error("خطا: " + response.status);
    }
    return response.json();
})
.then(data => {

    box.innerHTML = "";

    data.matches.forEach(match => {

        const homeScore =
            match.score.fullTime.home ?? "-";

        const awayScore =
            match.score.fullTime.away ?? "-";

        box.innerHTML += `

        <div class="match-card">

            <h3>${match.homeTeam.shortName}</h3>

            <div class="score">
                ${homeScore} : ${awayScore}
            </div>

            <h3>${match.awayTeam.shortName}</h3>

            <p>${match.status}</p>

        </div>

        `;

    });

})
.catch(error => {

    box.innerHTML = `
        <div class="match-card">
            ❌ دریافت اطلاعات مسابقات انجام نشد.
        </div>
    `;

    console.error(error);

});
