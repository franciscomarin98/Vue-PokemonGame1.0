<template>
  <img :class="[showPokemon ? 'fade-in visible ' : 'invisible']"
       :src="imgSrc"
       alt="pokemon-img">
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon:{
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  },
}
</script>

<style scoped>

img {
  height: 15rem;
  width: 15rem;
}

.invisible {
  filter: brightness(0);
}

.visible{
  filter: none;
}

</style>