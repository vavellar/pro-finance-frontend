<template>
  <div id="app">
    <div class="menu">
      <Menu/>
    </div>
    <div class="main">
      <router-view/>
    </div>
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
