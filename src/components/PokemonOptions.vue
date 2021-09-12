<template>
    <div class="buttons-container">
        <button @click="$emit('pokemonSelected', option.id)" v-for="option in pokemonOptions" :key="option.id">
            {{ option.name }}
        </button>
    </div>
</template>

<script>
export default {
    name: "PokemonOptions",
    props: {
        pokemonOptions: {
            type: Array,
            required: true
        },
    },
}
</script>

<style scoped>
.buttons-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}

button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: .2rem 0;
    height: 35px;
    width: 250px;
    font-size: 16px;
}
</style>