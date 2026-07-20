const matches = [
    {
        home: "🇪🇸 اسپانیا",
        away: "🇦🇷 آرژانتین",
        score: "1 - 0",
        status: "پایان بازی"
    },

    {
        home: "🇬🇧 منچستر یونایتد",
        away: "🇬🇧 چلسی",
        score: "2 - 2",
        status: "زنده"
    },

    {
        home: "🇮🇹 اینتر",
        away: "🇮🇹 میلان",
        score: "-",
        status: "فردا"
    }
];


const box = document.getElementById("matches");


matches.forEach(match => {

box.innerHTML += `

<div class="match-card">

<h3>
${match.status}
</h3>

<p>
${match.home}
</p>

<div class="score">
${match.score}
</div>

<p>
${match.away}
</p>

</div>

`;

});
