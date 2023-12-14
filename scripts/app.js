const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDets = await getCity(city)
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city);

})