<template>
  <div :class="['layout-container']">
    <NuxtLayout>
      <perfect-scrollbar id="layout-content">  
        <NuxtPage/>
      </perfect-scrollbar>
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
    background-color: lightblue
</style>