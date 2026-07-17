fetch("movies.json")
.then(response => response.json())
.then(movies => {

const box = document.getElementById("movies");


movies.forEach(movie => {

box.innerHTML += `

<div class="card">

<img src="${movie.poster}">

<h3>${movie.title}</h3>

<button onclick="openMovie(${movie.id})">
مشاهده
</button>

</div>

`;

});


});


function openMovie(id){

window.location.href = "movie.html?id=" + id;

}function watchMovie(link){
    window.location.href = link;
}
