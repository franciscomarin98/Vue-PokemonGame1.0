<template>
  <div v-if="!pokemon">
    Espere por favor...
  </div>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemonOptions="pokemonOptions" @pokemon-selected="checkAnswer"/>
    <template class="fade-in" v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">
        Nuevo juego
      </button>
    </template>
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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();
      const rndPokemon = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonOptions[rndPokemon];
    },
    checkAnswer(pokemonSelected) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonSelected === this.pokemon.id) {
        this.message = `Muy bien, ${this.pokemon.name} era el pokemon oculto.`
      } else {
        this.message = `Fallaste, el pokemon era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showAnswer = false
      this.showPokemon = false
      this.pokemon = null
      this.pokemonOptions = []
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>