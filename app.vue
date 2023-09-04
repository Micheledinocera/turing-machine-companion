<template>
  <div :class="['layout-container']">
    <NuxtLayout>
      <NuxtScrollbar  id="layout-content">  
      <div id="layout-content">  
        <NuxtPage/>
      </div>
      </NuxtScrollbar >
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
body
  margin: 0
  font-family: Rajdhani
  font-weight: 500
.layout-container
  #layout-content
    height: calc(100vh - 2*$base-height)
    background-color: $primary-color-light
</style>