<template>
    <div class="fixed-row">
        <CombinationsTable :fixed="true"/>
        <VerificationsChecklist :fixed="true"/>
    </div>
</template>

<style scoped lang="sass">
.fixed-row
    position: fixed
    width: 100%
    height: $base-height*2
    z-index: 1
    top:0
    background-color: $primary-color-light
</style>