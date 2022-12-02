function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("Pokemon Tidak di temukan", ett);
        });
}
getPokemon();