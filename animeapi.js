function enterKey(event) {
  if (event.keyCode === 13) {
    getAnime();
  }
}

function getRandomAnime() {
  for (let i = 0; i < 24; i++) {
    let url = "https://api.jikan.moe/v4/random/anime";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let anime = data.data;
        let animeTitle = anime.title;
        let animeType = anime.type;
        let animeImage = anime.images.jpg.large_image_url;
        let animeStatus = anime.status;
        let animeEpisodes = anime.episodes;

        let animeRow = document.getElementsByClassName("row anime")[0];
        let animeCardMd4 = document.createElement("div");
        animeCardMd4.className = "col-xl-3 col-lg-4 col-md-6 col-sm-12";
        let animeCard = document.createElement("div");
        animeCard.className = "card";
        let animeCardImg = document.createElement("img");
        animeCardImg.className = "card-img-top";
        animeCardImg.src = animeImage;
        let animeCardBody = document.createElement("div");
        animeCardBody.className = "card-body";
        let animeCardTitle = document.createElement("h5");
        animeCardTitle.className = "card-title";
        animeCardTitle.innerHTML = animeTitle;
        let animeCardType = document.createElement("p");
        animeCardType.className = "card-text";
        animeCardType.innerHTML = "Type: " + animeType;
        let animeCardStatus = document.createElement("p");
        animeCardStatus.className = "card-text";
        animeCardStatus.innerHTML = "Status: " + animeStatus;
        let animeCardEpisodes = document.createElement("p");
        animeCardEpisodes.className = "card-text";
        animeCardEpisodes.innerHTML = "Episodes: " + animeEpisodes;
        let moreInfo = document.createElement("a");
        moreInfo.className = "btn btn-outline-primary";
        moreInfo.href = "anime.html?id=" + anime.mal_id;
        moreInfo.innerHTML = "More Info";

        animeCardBody.appendChild(animeCardTitle);
        animeCardBody.appendChild(animeCardType);
        animeCardBody.appendChild(animeCardStatus);
        animeCardBody.appendChild(animeCardEpisodes);
        animeCardBody.appendChild(moreInfo);
        animeCard.appendChild(animeCardImg);
        animeCard.appendChild(animeCardBody);
        animeCardMd4.appendChild(animeCard);
        animeRow.appendChild(animeCardMd4);
      });
  }
}

function getAnime() {
  let search = document.getElementById("search").value;
  let url = "https://api.jikan.moe/v4/anime?q=" + search + "&sort=asc";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let animeinfo = data.data;
      let animeRow = document.getElementsByClassName("row anime")[0];
      animeRow.innerHTML = "";

      for (let i = 0; i < animeinfo.length; i++) {
        let anime = animeinfo[i];
        let animeTitle = anime.title;
        let animeType = anime.type;
        let animeImage = anime.images.jpg.large_image_url;
        let animeStatus = anime.status;
        let animeEpisodes = anime.episodes;

        animeRow = document.getElementsByClassName("row anime")[0];
        let animeCardMd4 = document.createElement("div");
        animeCardMd4.className = "col-xl-3 col-lg-4 col-md-6 col-sm-12";
        let animeCard = document.createElement("div");
        animeCard.className = "card";
        let animeCardImg = document.createElement("img");
        animeCardImg.className = "card-img-top";
        animeCardImg.src = animeImage;
        let animeCardBody = document.createElement("div");
        animeCardBody.className = "card-body";
        let animeCardTitle = document.createElement("h5");
        animeCardTitle.className = "card-title";
        animeCardTitle.innerHTML = animeTitle;
        let animeCardType = document.createElement("p");
        animeCardType.className = "card-text";
        animeCardType.innerHTML = "Type: " + animeType;
        let animeCardStatus = document.createElement("p");
        animeCardStatus.className = "card-text";
        animeCardStatus.innerHTML = "Status: " + animeStatus;
        let animeCardEpisodes = document.createElement("p");
        animeCardEpisodes.className = "card-text";
        animeCardEpisodes.innerHTML = "Episodes: " + animeEpisodes;
        let moreInfo = document.createElement("a");
        moreInfo.className = "btn btn-outline-primary";
        moreInfo.href = "anime.html?id=" + anime.mal_id;
        moreInfo.innerHTML = "More Info";

        animeCardBody.appendChild(animeCardTitle);
        animeCardBody.appendChild(animeCardType);
        animeCardBody.appendChild(animeCardStatus);
        animeCardBody.appendChild(animeCardEpisodes);
        animeCardBody.appendChild(moreInfo);
        animeCard.appendChild(animeCardImg);
        animeCard.appendChild(animeCardBody);
        animeCardMd4.appendChild(animeCard);
        animeRow.appendChild(animeCardMd4);
      }
    });
}

function getAnimeInfo() {
  let urlParams = new URLSearchParams(window.location.search);
  let animeId = urlParams.get("id");
  let url = "https://api.jikan.moe/v4/anime/" + animeId;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let anime = data;
      console.log(data);
      let animeTitle = anime.data.title;
      let animeType = anime.data.type;
      let animeImage = anime.data.images.jpg.large_image_url;
      let animeSynopsis = anime.data.synopsis;
      let animeStatus = anime.data.status;
      let animeEpisodes = anime.data.episodes;
      let animeScore = anime.data.score;
      let animeGenres = anime.data.genres.map((genre) => genre.name).join(", ");
      let animeStudios = anime.data.studios
        .map((studio) => studio.name)
        .join(", ");
      let animeTrailer = anime.data.trailer.embed_url;

      let animeContainer = document.createElement("div");
      animeContainer.className = "container anime";
      let animeCard = document.createElement("div");
      animeCard.className = "card mb-3 info";
      let animeRow = document.createElement("div");
      animeRow.className = "row no-gutters info";
      let animeColMd4 = document.createElement("div");
      animeColMd4.className = "col-md-4 info";
      let animeCardImg = document.createElement("img");
      animeCardImg.className = "card-img info";
      animeCardImg.src = animeImage;
      let animeColMd8 = document.createElement("div");
      animeColMd8.className = "col-md-8 info";
      let animeCardBody = document.createElement("div");
      animeCardBody.className = "card-body info";
      let animeCardTitle = document.createElement("h5");
      animeCardTitle.className = "card-title info";
      animeCardTitle.innerHTML = animeTitle;
      let animeCardType = document.createElement("p");
      animeCardType.className = "card-text info";
      animeCardType.innerHTML = "Type: " + animeType;
      let animeCardStatus = document.createElement("p");
      animeCardStatus.className = "card-text info";
      animeCardStatus.innerHTML = "Status: " + animeStatus;
      let animeCardEpisodes = document.createElement("p");
      animeCardEpisodes.className = "card-text info";
      animeCardEpisodes.innerHTML = "Episodes: " + animeEpisodes;
      let animeCardScore = document.createElement("p");
      animeCardScore.className = "card-text info";
      animeCardScore.innerHTML = "Score: " + animeScore;
      let animeCardGenres = document.createElement("p");
      animeCardGenres.className = "card-text info";
      animeCardGenres.innerHTML = "Genres: " + animeGenres;
      let animeCardStudios = document.createElement("p");
      animeCardStudios.className = "card-text info";
      animeCardStudios.innerHTML = "Studios: " + animeStudios;
      let animeCardSynopsis = document.createElement("p");
      animeCardSynopsis.className = "card-text info";
      animeCardSynopsis.innerHTML = "Synopsis: " + animeSynopsis;
      let animeCardTrailer = document.createElement("iframe");
      animeCardTrailer.setAttribute("allowfullscreen", "");
      animeCardTrailer.className = "card-text";
      animeCardTrailer.src = animeTrailer;

      animeCardBody.appendChild(animeCardTitle);
      animeCardBody.appendChild(animeCardType);
      animeCardBody.appendChild(animeCardStatus);
      animeCardBody.appendChild(animeCardEpisodes);
      animeCardBody.appendChild(animeCardScore);
      animeCardBody.appendChild(animeCardGenres);
      animeCardBody.appendChild(animeCardStudios);
      animeColMd8.appendChild(animeCardBody);
      animeColMd4.appendChild(animeCardImg);
      animeRow.appendChild(animeColMd4);
      animeRow.appendChild(animeColMd8);
      animeRow.appendChild(animeCardSynopsis);
      animeRow.appendChild(animeCardTrailer);
      animeCard.appendChild(animeRow);
      animeContainer.appendChild(animeCard);
      document.body.appendChild(animeContainer);
    });
}
