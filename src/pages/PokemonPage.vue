<template>
  <div v-if="!pokemon">
    Espere por favor...
  </div>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemonOptions="pokemonOptions"/>
  </div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture";
import PokemonOptions from "../components/PokemonOptions";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {PokemonOptions, PokemonPicture},
  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();
      const rndPokemon = Math.floor(Math.random()*4);
      this.pokemon = this.pokemonOptions[rndPokemon];
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>