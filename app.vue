<template>
  <div :class="['layout-container']">
    <Modal v-if="showModal"/>
    <notifications classes="vue-notification custom-notification" width="auto" max="1" :duration="1000" speed="500" animation-type="css" animation-name="notification"/>
    <NuxtLayout>
      <NuxtScrollbar id="layout-content">  
        <NuxtPage/>
      </NuxtScrollbar >
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ORIENTATIONS } from './utils/Utils';

const showModal=useShowModal();
const orientation=useOrientation();
const { locale }= useI18n();

onMounted(()=> {

  if (LANGUAGES.map((item) => item.iso).includes(navigator.language))
    locale.value = navigator.language;
  else {
    var lan = navigator.language.substring(0, 2);
    var filteredLang = LANGUAGES.find((item) => item.iso.startsWith(lan) );
    locale.value = filteredLang ? filteredLang.iso : "en";
  }

  orientation.value=window.innerWidth>768?ORIENTATIONS.horizontal:ORIENTATIONS.vertical;

  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
  });
  window.addEventListener("resize", () => {
    orientation.value=window.innerWidth>768?ORIENTATIONS.horizontal:ORIENTATIONS.vertical;
  });
  window.addEventListener('popstate', (e) => {
      e.preventDefault();
      window.history.forward();
  });
})
</script>

<style lang="sass">
body
  margin: 0
  font-family: Rajdhani
  font-weight: 500
  .vue-notification-wrapper
    &.notification-leave-to
      animation: 0.5s notification-enter ease-in-out
    &.notification-enter-to
      animation: 0.5s notification-leave ease-in-out
    .vue-notification.custom-notification
      margin-top: 6px
      width: fit-content
      margin-left: auto
      margin-right: 0
      cursor: pointer
      border-top-left-radius: 8px
      border-bottom-left-radius: 8px
.layout-container
  #layout-content
    height: calc(100vh - $base-height)
    background-color: $primary-color-light
img
  &.loading
    @include loading-pulse
</style>