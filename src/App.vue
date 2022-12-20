<script>
import { useHead } from '@vueuse/head'

export default {
  name: "App",
  mounted() {
    useHead({
      titleTemplate: (title) => !title ? 'Phasmotools' : `${title} - Phasmotools`,
    });
  },
};
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
