<template>
  <div class="app">
    <nav class="menu">
      <Menu/>
    </nav>
    <main class="main-grid">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from './views/Menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class app extends Vue {}
</script>
