const apiUrl = "https://pokeapi.co/api/v2/";

async function fetchPokemon() {
    try {
        const response = await fetch(apiUrl + "pokemon/?limit=10");
        const jsonResponse = await response.json();
        const pokemonList = jsonResponse.results;
        console.log(pokemonList);

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            const pokemonName = document.createElement("p");
            pokemonName.textContent = pokemon.name;
            document.querySelector(".pokemonDisplay").appendChild(pokemonName);
        }
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
    }
}

fetchPokemon();