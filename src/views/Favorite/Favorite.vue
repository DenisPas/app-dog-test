<template>
  <div>
    <h1 class="text-4xl text-center	pt-4 sm:pt-6">Your Favorites Dogs</h1>
    <h2 v-if="favoriteDogs.length === 0" class="text-2xl text-center	py-4">You don't have favorites dogs &#128577</h2>
    <dog-grid v-if="favoriteDogs.length" :dogs="favoriteDogs" @editFavoriteDog="editFavoriteDog" ></dog-grid>
  </div>
</template>

<script lang="ts" src="./Favorite.component.ts">
</script>

<style scoped>

</style>
