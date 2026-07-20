const BIN_ID = "6a5e1738da38895dfe760a71";
const API_KEY = "$2a$10$P22HFqWIle4Ax2r6HiUizuIGDtuqvM1Br2IdccDoJs7u924m60Y/W";

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
