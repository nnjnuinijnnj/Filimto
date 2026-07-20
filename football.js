const API_KEY = "400ae25d8aee49bd93e10efb65b50462";

fetch("https://api.football-data.org/v4/matches", {
    headers: {
        "X-Auth-Token": API_KEY
    }
})
.then(response => response.json())
.then(data => {

    if (!data.matches) {
    document.getElementById("matches").innerHTML =
    "<p>⚠️ اطلاعات بازی‌ها دریافت نشد</p>";
    return;
    }
    
    const box = document.getElementById("matches");

    data.matches.forEach(match => {

        box.innerHTML += `

        <div class="match-card">

            <h3>⚽ ${match.competition.name}</h3>

            <p>
            ${match.homeTeam.name}
            </p>

            <div class="score">
            ${match.score.fullTime.home ?? "-"}
            -
            ${match.score.fullTime.away ?? "-"}
            </div>

            <p>
            ${match.awayTeam.name}
            </p>

            <small>
            ${match.status}
            </small>

        </div>

        `;

    });

})
.catch(error => {
    console.log("خطا:", error);
});
