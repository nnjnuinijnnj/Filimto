let box = document.getElementById("matches");

let saved = localStorage.getItem("match");


if(saved){

let match = JSON.parse(saved);


box.innerHTML = `

<div class="match-card">

<h3>⚽ ${match.home}</h3>

<div class="score">
${match.score}
</div>

<h3>
${match.away}
</h3>

<p>
${match.status}
</p>

</div>

`;

}

else{

box.innerHTML = `

<div class="match-card">

<p>
⚽ هنوز بازی‌ای ثبت نشده است
</p>

</div>

`;

}
