<template>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture :pokemonId="6" :showPokemon="true"/>
  <PokemonOptions :pokemonOptions="pokemonOptions"/>
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
      pokemonOptions: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>