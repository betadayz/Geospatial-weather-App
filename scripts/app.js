const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const ddetails = document.querySelector('.details');

const updateUI = (data) => {
 
    const cityDets = data.cityDets

    // update details tempalte
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">Weather condition</div>
                <div class="display-4 my-4">
                    <span>temp</span>
                    <span>&deg;C</span>
                </div>`;
};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city).then(data => updateUI(data)).catch(err => console.log(err));

})