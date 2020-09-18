var button = document.getElementById("random_ep");
var target = document.getElementById("result");
var season = 0;
var episode = 0;

button.onclick = function(event){
    season = Math.floor(Math.random() * 10) + 1;
    if(season == 3 || season == 6){
        episode = Math.floor(Math.random() * 25) + 1;
    }else if(season == 10){
        episode = Math.floor(Math.random() * 18) + 1;
    }else{
        episode = Math.floor(Math.random() * 24) + 1;
    }
    console.log(season + ", " + episode);
    target.innerHTML = `Temporada: ${season} <br> Episódio: ${episode}`
};