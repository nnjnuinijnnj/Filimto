
const API_KEY = "400ae25d8aee49bd93e10efb65b5046";

fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: {
        "X-Master-Key": API_KEY
    }
})
.then(res => res.json())
.then(data => {

    let box = document.getElementById("matches");

    data.record.forEach(match => {

        box.innerHTML += `

        <div class="match-card">

            <h3>⚽ ${match.home}</h3>

            <div class="score">
            ${match.score}
            </div>

            <h3>${match.away}</h3>

            <p>${match.status}</p>

        </div>

        `;

    });

});
