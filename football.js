const API_KEY = "e9014cbd1ed6574d611845f404494ed3";

const box = document.getElementById("matches");

fetch("https://v3.football.api-sports.io/fixtures?live=all", {
    method: "GET",
    headers: {
        "x-apisports-key": API_KEY
    }
})
.then(response => response.json())
.then(data => {

    box.innerHTML = "";

    if (!data.response || data.response.length === 0) {
        box.innerHTML = "<div class='match-card'>هیچ مسابقه‌ای پیدا نشد.</div>";
        return;
    }

    data.response.forEach(match => {

        box.innerHTML += `
        <div class="match-card">

            <h3>${match.teams.home.name}</h3>

            <div class="score">
                ${match.goals.home ?? "-"} :
                ${match.goals.away ?? "-"}
            </div>

            <h3>${match.teams.away.name}</h3>

            <p>${match.fixture.status.long}</p>

        </div>
        `;
    });

})
.catch(error => {

    box.innerHTML = `
    <div class="match-card">
        ❌ خطا در دریافت اطلاعات
    </div>
    `;

    console.log(error);

});
