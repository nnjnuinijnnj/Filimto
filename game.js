fetch("games.json")
.then(response => response.json())
.then(games => {

const box = document.getElementById("games");

games.forEach(game => {

box.innerHTML += `

<div class="game-card">

<h3>${game.title}</h3>

<p>${game.type}</p>

<button onclick="window.location.href='${game.watch}?id=${game.id}'">
▶ تماشا
</button>

</div>

`;

});

});
