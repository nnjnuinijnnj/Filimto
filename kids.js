fetch("kids.json")
.then(response => response.json())
.then(kids => {

const box = document.getElementById("kids");

kids.forEach(kid => {

box.innerHTML += `

<div class="card">

<img src="${kid.poster}">

<h3>${kid.title}</h3>

<p>${kid.type}</p>

<button onclick="window.location.href='${kid.watch}'">
▶ تماشا
</button>

</div>

`;

});

});
