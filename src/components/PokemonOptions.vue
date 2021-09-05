<template>
    <div class="buttons-container">
      <button>Option 1</button>
      <button>Option 2</button>
      <button>Option 3</button>
      <button>Option 4</button>
    </div>
</template>

<script>
export default {
  name: "PokemonOptions"
}
</script>

<style scoped>
.buttons-container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
  button{
    margin: .2rem 0;
    height: 30px;
    width: 250px;
  }
</style>