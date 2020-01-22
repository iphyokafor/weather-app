window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/573f119426159b4db7d9e225c08e5a01/${lat}, ${long}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // console.log(data);
                    const { temperature, summary, icon } = data.currently;
                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                });
        });
    }

    function setIcons(icon, iconId) {
        const skycons = new skycons({ color: white });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentId]);
    }
});