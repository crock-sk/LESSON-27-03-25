const input = document.getElementById("inputQuery");
const searchBtn = document.querySelector(".btn");
const list = document.querySelector(".list");

searchBtn.addEventListener("click", onSearchClick);
let query = "";

function onSearchClick() {
  query = input.value.trim();
  if (query === "") {
    return;
  }

  getMoviesArr(query).then((data) => renderList(createMarkup(data)));

  input.value = "";
}

async function getMoviesArr(nameOfMovie) {
  const fetchData = fetch(
    `https://www.omdbapi.com/?apiKey=94e1e8f6&s=${query}`
  );

  return fetchData
    .then((response) => {
      return response.json().then((result) => result.Search);
    })
    .catch((e) => console.log("error", e));
}

function createMarkup(arr) {
  return arr
    .map((obj) => {
      obj.Poster === "N/A"
        ? (obj.Poster =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s")
        : obj.Poster;

      return `<li class="item">
          <img src=${obj.Poster} alt="movie poster" />
          <h1 class=${obj.Title}></h1>
        </li>`;
    })
    .join("");
}

function renderList(markup) {
  list.innerHTML = markup;
}

function onFetchError(error) {
  alert("Oooops, something went wrong, no results found!");
}
