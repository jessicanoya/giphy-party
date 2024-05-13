console.log("Let's get this party started!");

const API_BASE_URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const container = document.querySelector("#gif-container");

async function getGif(input) {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { q: input, api_key: API_KEY },
    });
    const randomIndex = Math.floor(Math.random() * response.data.data.length);
    const gifUrl = response.data.data[randomIndex].images.original.url;
    showGif(gifUrl);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

function showGif(gifUrl) {
  const gifContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = gifUrl;
  img.classList.add("w-100");
  gifContainer.classList.add("col-md-4", "col-12", "mb-4");
  gifContainer.append(img);
  container.appendChild(gifContainer);
}

const form = document.querySelector("#search");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelector("#gif");
  getGif(input.value);
  input.value = "";
});

const removeAllGifs = document.querySelector("#remove");
removeAllGifs.addEventListener("click", function () {
  container.innerHTML = "";
});
