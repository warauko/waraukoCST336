async function loadCityValues() {
    let zip = document.getElementById("zipcode");
    let zipNew = 0;
    zip.addEventListener('keydown', async function (event) {
        if (event.key === 'Enter') {
            console.log("Key pressed")
            let url = "https://csumb.space/api/cityInfoAPI.php?zip="

            let cityResults = await fetch(url + zip.value);
            let cityData = await cityResults.json();
            console.log(cityData)

            let cityName = document.createTextNode(cityData.city);
            let cityDisplay = document.getElementById("cityInfo");
            cityDisplay.appendChild(cityName);
            console.log(cityName);

            let latitudeValue = document.createTextNode(cityData.latitude);
            let latitudeDisplay = document.getElementById("latitudeInfo");
            latitudeDisplay.appendChild(latitudeValue);

            let longitudeValue = document.createTextNode(cityData.longitude);
            let longitudeDisplay = document.getElementById("longitudeInfo");
            longitudeDisplay.appendChild(longitudeValue);
        }
    });
}

async function suggestPassword() {
    let suggestions = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");
    console.log(suggestions);
    let passBox = document.getElementById("passClick");
    passBox.addEventListener('click', function(event) {
        console.log("Clicked")
        let suggest = document.createTextNode(suggestions.password);
        passBox.value = suggest
    });
}

loadCityValues()
suggestPassword()