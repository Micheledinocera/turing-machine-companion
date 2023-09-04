<template>
  <div :class="['layout-container']">
    <NuxtLayout>
      <NuxtScrollbar  id="layout-content">  
        <NuxtPage/>
      </NuxtScrollbar >
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

onMounted(()=> {
  window.addEventListener("beforeunload", (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  });
})
</script>

<style lang="sass">
body
  margin: 0
  font-family: Rajdhani
  font-weight: 500
.layout-container
  #layout-content
    height: calc(100vh - $base-height)
    background-color: $primary-color-light
</style>