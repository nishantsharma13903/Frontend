const ul_cont = document.getElementById("dpd-cont");
const link_eff = document.querySelectorAll(".nb-ul-link");
const cont = document.getElementById("search-cont-id");
var movie_data = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c740d91ad4msh719035e439bdfc8p178e04jsn988117758333',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        createMovieCard(response);
        response.forEach((val) => {
            movie_data.push(val);
        })
    })
	.catch(err => console.error(err));




function createMovieCard(data){
    
    const trending_movie = data.filter((val) => {
        return (val.rating > 8.5);
    })
    const drama_movie = data.filter((val) => {
        return val.genre.includes("Drama");
    })
    const crime_movie = data.filter((val) => {
        return val.genre.includes("Crime");
    })
    const action_movie = data.filter((val) => {
        return val.genre.includes("Action");
    })
    const adventure_movie = data.filter((val) => {
        return val.genre.includes("Adventure");
    })
    const romance_movie = data.filter((val) => {
        return val.genre.includes("Romance");
    })
    const comedy_movie = data.filter((val) => {
        return val.genre.includes("Comedy");
    })
    const mystery_movie = data.filter((val) => {
        return val.genre.includes("Mystery");
    })
    const scifi_movie = data.filter((val) => {
        return val.genre.includes("Sci-Fi");
    })
    const western_movie = data.filter((val) => {
        return val.genre.includes("Western");
    })
    const history_movie = data.filter((val) => {
        return val.genre.includes("History");
    })
    const biography_movie = data.filter((val) => {
        return val.genre.includes("Biography");
    })
    const musical_movie = data.filter((val) => {
        return val.genre.includes("Musical");
    })
    const animation_movie = data.filter((val) => {
        return val.genre.includes("Animation");
    })
    const war_movie = data.filter((val) => {
        return val.genre.includes("War");
    })
    const thriller_movie = data.filter((val) => {
        return val.genre.includes("Thriller");
    })
    const family_movie = data.filter((val) => {
        return val.genre.includes("Family");
    })
    const horror_movie = data.filter((val) => {
        return val.genre.includes("Horror");
    })
    const film_noir_movie = data.filter((val) => {
        return val.genre.includes("Film-Noir");
    })
    const music_movie = data.filter((val) => {
        return val.genre.includes("Music");
    })
    
    trending_movie.forEach((val) => {
        const cont = document.getElementById("trending-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {
            showTrailer(val);
        }
        cont.appendChild(img);

    })

    drama_movie.forEach((val) => {
        const cont = document.getElementById("drama-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    crime_movie.forEach((val) => {
        const cont = document.getElementById("crime-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    action_movie.forEach((val) => {
        const cont = document.getElementById("action-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    adventure_movie.forEach((val) => {
        const cont = document.getElementById("adventure-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    romance_movie.forEach((val) => {
        const cont = document.getElementById("romance-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    comedy_movie.forEach((val) => {
        const cont = document.getElementById("comedy-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    mystery_movie.forEach((val) => {
        const cont = document.getElementById("mystery-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    scifi_movie.forEach((val) => {
        const cont = document.getElementById("scifi-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    western_movie.forEach((val) => {
        const cont = document.getElementById("western-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    history_movie.forEach((val) => {
        const cont = document.getElementById("history-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    biography_movie.forEach((val) => {
        const cont = document.getElementById("biography-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    musical_movie.forEach((val) => {
        const cont = document.getElementById("musical-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    animation_movie.forEach((val) => {
        const cont = document.getElementById("animation-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    war_movie.forEach((val) => {
        const cont = document.getElementById("war-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    thriller_movie.forEach((val) => {
        const cont = document.getElementById("thriller-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    family_movie.forEach((val) => {
        const cont = document.getElementById("family-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    horror_movie.forEach((val) => {
        const cont = document.getElementById("horror-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    music_movie.forEach((val) => {
        const cont = document.getElementById("music-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    film_noir_movie.forEach((val) => {
        const cont = document.getElementById("film-noir-movie");
        const img = document.createElement('img');
        img.classList.add("movie-type-img");
        img.src = val.image;
        img.onclick = () => {showTrailer(val)};
        cont.appendChild(img);

    })

    const movie_type = [];
    data.forEach((val) => {
        val.genre.forEach((mov) => {
            if(!movie_type.includes(mov)){
                movie_type.push(mov);
            }
        }) 
    })

    movie_type.forEach((val) => {
        const list = document.createElement("li");
        list.classList.add("ul-list")
        const anchor = document.createElement('a');
        anchor.classList.add("ul-link")
        anchor.innerText = val;
        anchor.href = "#" + val;
        anchor.onclick = () => {gotoMovies(val)};
        list.appendChild(anchor);
        ul_cont.appendChild(list);
        
    })

}

function gotoMovies(movie){
    document.getElementById("home-cont").style.display = "block";
    link_eff[0].style.borderBottom = "1px solid white";
    link_eff[1].style.borderBottom = "1px solid transparent";
}

function showTrailer(movie_obj){
    console.log(movie_obj);
    let dir_txt = "";
    let wrt_txt = "";
    let genre_txt = "";
    movie_obj.director.forEach((val) => {
        dir_txt += val + " ";
    })
    movie_obj.writers.forEach((val) => {
        wrt_txt += val + " ";
    })
    movie_obj.genre.forEach((val) => {
        genre_txt += val + " ";
    })
    document.getElementById("home-cont").style.display = "none";
    document.getElementById("about-cont").style.display = "none";
    document.getElementById("video-cont").style.display = "block";
    document.getElementById("videoId").src = movie_obj.trailer + "?enablejsapi=1";
    document.getElementById("mov-title").innerText = movie_obj.title;
    document.getElementById("mov-desc").innerText = movie_obj.description;
    document.getElementById("mov-year").innerText = "Releasing Date : " + movie_obj.year;
    document.getElementById("mov-dir").innerText = "Movie Directors : " + dir_txt;
    document.getElementById("mov-wrt").innerText = "Movie Writers : " + wrt_txt;
    document.getElementById("mov-genre").innerText = "Movie Writers : " + genre_txt;
    document.getElementById("mov-rating").innerText = "Movie Rating : " + movie_obj.rating + " / 10";
}

function gotoHome(){
    let video = document.getElementById("videoId");
    video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
    document.getElementById("home-cont").style.display = "block";
    document.getElementById("video-cont").style.display = "none";
    document.getElementById("about-cont").style.display = "none";
    link_eff[0].style.borderBottom = "1px solid white";
    link_eff[1].style.borderBottom = "1px solid transparent";
}

function showAbout(){
    let video = document.getElementById("videoId");
    video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
    document.getElementById("about-cont").style.display = "block";
    document.getElementById("home-cont").style.display = "none";
    document.getElementById("video-cont").style.display = "none";
    link_eff[1].style.borderBottom = "1px solid white";
    link_eff[0].style.borderBottom = "1px solid transparent";
}

function inputFocus(){
    document.getElementById('input-movie').style.width = "70%";
    document.querySelector('.search-cont').style.display = "block";
    document.getElementById('search-icon').style.display = "none";
    document.getElementById('close-icon').style.display = "block";
}

function inputBlur(){
    document.getElementById('input-movie').style.width = "30%";
}

function focusSearch(){
    document.getElementById('input-movie').focus();
}

function closeSearch(){
    document.getElementById('input-movie').style.width = "30%";
    document.getElementById('input-movie').value = "";
    document.querySelector('.search-cont').style.display = "none";
    document.getElementById('search-icon').style.display = "block";
    document.getElementById('close-icon').style.display = "none";
    while(cont.hasChildNodes()){
        cont.removeChild(cont.firstChild);
    }
}

function showSearchData(){
    let input_txt = document.getElementById("input-movie").value;
    input_txt = input_txt.toLowerCase();
    while(cont.hasChildNodes()){
        cont.removeChild(cont.firstChild);
    }
    movie_data.forEach((val) => {
        if(val.title.toLowerCase().includes(input_txt)){
            const div = document.createElement('div');
            div.classList.add("search-mov-card");
            const movie = document.createElement('p');
            movie.innerText = val.title;
            movie.style = "padding: 10px;font-weight: bold;border-top: 1px solid black;";
            const img = document.createElement('img');
            img.classList.add("search-mov-card-img");
            img.src = val.image;
            div.onclick = () => {
                showTrailer(val);
                closeSearch();
            };
            div.appendChild(img);
            div.appendChild(movie);

            cont.appendChild(div);
        }
    })
}
