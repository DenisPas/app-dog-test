<template>
  <dog-grid v-if="dogs.length" :dogs="dogs" @editFavoriteDog="editFavoriteDog" ></dog-grid>
</template>

<script lang="ts" src="./DogGridBreed.component.ts">
</script>

<style scoped>

</style>
