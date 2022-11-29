<script setup>
import ConfigEditor from './components/ConfigEditor.vue'

</script>

<template>
  <header>
    <router-link to="/configurateur">Configurateur</router-link>
    <router-link to="/preuves">Preuves</router-link>
  </header>
  <main>
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>

</style>
