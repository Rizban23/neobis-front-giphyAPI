const URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const APIKEY = "Bv3lnQoO2rIGMAXsYMGIpSvPSyTcCS6t";


const buttonSearch = document.getElementById('button-search');
const inputSearch = document.getElementById('input-search');
const resultContainer = document.getElementById('giphy');


// поиск
document.addEventListener('DOMContentLoaded', async function () {
    inputSearch.value = "baby";
    searchGifs();
    buttonSearch.addEventListener('click', searchGifs);
});
async function searchGifs() {
    buttonSearch.disabled = true;

    try {
        const response = await fetch(`${URL}${APIKEY}&q=${inputSearch.value.trim()}&limit=24`);
        const data = await response.json();


        resultContainer.innerHTML = '';

        data.data.forEach(gif => {
            const gifImage = document.createElement('img');
            gifImage.src = gif.images.original.url;
            resultContainer.appendChild(gifImage);
        });

        inputSearch.value = '';
    } catch (e) {
        console.error(e);
    } finally {
        buttonSearch.disabled = false;
    }
}