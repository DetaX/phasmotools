<script setup>
import ConfigEditor from './components/ConfigEditor.vue'

</script>

<template>
  <header>
    <router-link to="/configurateur">Configurateur</router-link>
    <router-link to="/preuves">Preuves</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
