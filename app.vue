<template>
  <div :class="['layout-container']">
    <Modal v-if="showModal"/>
    <NuxtLayout>
      <NuxtScrollbar  id="layout-content">  
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
  window.addEventListener("beforeunload", (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  });

  orientation.value=window.outerWidth>768?ORIENTATIONS.horizontal:ORIENTATIONS.vertical;
  window.addEventListener("resize", () => {
    orientation.value=window.outerWidth>768?ORIENTATIONS.horizontal:ORIENTATIONS.vertical;
  });

  // window.addEventListener('load', function() {
  //   window.history.pushState({ noBackExitsApp: true }, '')
  // });

  window.addEventListener('popstate', (e) => {
      e.preventDefault();
      // if (e.state && e.state.noBackExitsApp) window.history.pushState({ noBackExitsApp: true }, '')
      window.history.forward();
  });

  if (Utils.LANGUAGES.map((item) => item.value).includes(navigator.language))
    locale.value = navigator.language;
  else {
    var lan = navigator.language.substring(0, 2);
    var filteredLang = Utils.LANGUAGES.filter((item) =>
      item.value.startsWith(lan)
    );
    locale.value =
      filteredLang.length > 0 ? filteredLang[0].value : "en";
  }
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