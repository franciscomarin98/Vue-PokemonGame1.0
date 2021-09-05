<template>
  <img class="invisible"
       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
       alt="pokemon-img">
</template>

<script>
export default {
  name: "PokemonPicture"
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

</style>