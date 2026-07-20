let box = document.getElementById("matches");


let matches = JSON.parse(localStorage.getItem("matches")) || [];


if(matches.length > 0){


matches.forEach(match => {


box.innerHTML += `

<div class="match-card">

<h3>
⚽ ${match.home}
</h3>


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


});


}

else{


box.innerHTML = `

<div class="match-card">

⚽ هنوز بازی‌ای ثبت نشده

</div>

`;


}
