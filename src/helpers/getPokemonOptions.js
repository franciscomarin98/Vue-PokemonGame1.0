const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650));
    return pokemonsArray.map((_, index) => index + 1);

}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    getPokemonsNames(mixedPokemons.slice(0, 4));
}

const getPokemonsNames = ([p1, p2, p3, p4]) => {
    console.log(p1, p2, p3, p4);
}

export default getPokemonOptions;