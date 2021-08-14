<template>
  <div class="bg-white">
    <div  class="max-w-2xl mx-auto 10 px-4 py-6 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
           class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(dog, index) in dogs"
           :key="index"
           @click="$emit('editFavoriteDog',index)"
           class="group">
          <div @mouseover = "hover = index"
               @mouseleave = "hover = '' "
               class="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden
                      xl:aspect-w-7 xl:aspect-h-8">
            <img :src="dog.link"
                 :alt="dog.link"
                 :class="hover === index ? 'opacity-75' : 'opacity-100'"
                 class="w-full h-full object-center object-cover" />
            <button :class="[hover === index ? 'visible' : 'invisible',
                            dog.isFavorite ? 'text-red-500 bg-red-200' : 'text-white bg-blue-200' ]"
                    class="button__favorite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
              <span>Favorite</span>
            </button>
          </div>

        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DogGrid.component.ts">
</script>

<style scoped>

</style>
