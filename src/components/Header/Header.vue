<template>
  <header class="flex-none relative z-49 leading-6 font-medium py-5 bg-blue-200	">
    <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center space-x-4 text-xl flex-wrap sm:flex-nowrap
                  lg:justify-start md:justify-start sm:justify-start xl:justify-start 2xl:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-12 w-auto" src="@/assets/dog.svg" alt="dogIcon" />
          </div>
        <router-link class="hover:text-yellow-500" exact-active-class="text-yellow-500" :to="{name: 'Home'}">
          Home
        </router-link>
        <router-link class="hover:text-yellow-500" exact-active-class="text-yellow-500" :to="{name: 'Favorite'}">
          Favorites
        </router-link>
        <div class="lg:w-2/5 md:w-2/5 sm:w-2/5 xl:w-2/5 2xl:w-2/5 w-full pt-3
                    lg:pt-0 md:pt-0 sm:pt-0 xl:pt-0 2xl:pt-0">
        <select v-model="selectedDog" name="chooseDogBreed " id="chooseDogBreed"
                 class=" focus:placeholder-gray-600 block w-full px-3 py-2 rounded-lg shadow-sm
                 focus:border-yellow-500 focus:outline-none focus:ring-1
                 focus:ring-yellow-500 "
                :class="selectedDog ? 'border-yellow-500 ring-yellow-500 ring-1' : ''">
          <option disabled value="">Choose one of the options</option>
          <option v-for="(value,key) in breeds" v-bind:value="key">
            {{ key }}
          </option>
        </select>
        </div>
        </div>
      </div>
  </header>
</template>

<script lang="ts" src="./Header.component.ts">
</script>

<style scoped>

</style>
