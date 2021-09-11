import pokemonApi from "../api/pokemonApi";

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650));
    return pokemonsArray.map((_, index) => index + 1);

}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    return await getPokemonsNames(mixedPokemons.slice(0, 4));
}

const getPokemonsNames = async ([p1, p2, p3, p4]) => {
    let arrPromises;
    arrPromises = [
        pokemonApi.get(`/${p1}`),
        pokemonApi.get(`/${p2}`),
        pokemonApi.get(`/${p3}`),
        pokemonApi.get(`/${p4}`),
    ];

    const [r1, r2, r3, r4] = await Promise.all(arrPromises);
    return [
        {
            name: r1.data.name, id: r1.data.id
        },
        {
            name: r2.data.name, id: r2.data.id
        },
        {
            name: r3.data.name, id: r3.data.id
        },
        {
            name: r4.data.name, id: r4.data.id
        },
    ]
}

export default getPokemonOptions;