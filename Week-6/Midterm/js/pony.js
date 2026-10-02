const apiUrl = "http://ponyapi.net/v1/";

async function fetchPonies() {
    try {
        const response = await fetch(apiUrl + "character/all");
        const jsonResponse = await response.json();
        const ponies = jsonResponse.data;
        console.log(ponies);
        
        for (let i = 0; i < 10; i++) {
            const pony = ponies[i];
            const ponyName = document.createElement("p");
            ponyName.textContent = pony.name;
            document.querySelector(".ponyDisplay").appendChild(ponyName);
        }

    } catch (error) {
        console.error("Error fetching ponies:", error);
    }
}

fetchPonies();