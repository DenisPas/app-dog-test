<template>
  <div class="font-mono" id="app">
    <Header/>
    <div v-if="isLoading" class="overlay">
      <div class="overlay__inner">
        <div class="overlay__content"><span class="spinner"></span></div>
      </div>
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<script lang="ts" src="./App.component.ts"></script>

<style lang="scss">

  .overlay {
    left: 0;
    top: 0;
    z-index: 51;
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #2222229e;
  &__inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  &__content {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  }

  .spinner {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }


</style>
