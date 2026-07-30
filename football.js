const API_KEY = "e9014cbd1ed6574d611845f404494ed3";

const box = document.getElementById("matches");

fetch("https://v3.football.api-sports.io", {
    method: "GET",
    headers: {
        "X-Auth-Key": API_KEY
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
