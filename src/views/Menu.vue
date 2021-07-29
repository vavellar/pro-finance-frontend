<template>
  <nav class="menu">
    <ul class="menu__list">
      <router-link to="/" tag="li" active-class="active" exact>
          <a class="menu__item">Resumo finânceiro</a>
      </router-link>
      <router-link to="/transacoes" tag="li" active-class="active">
          <a class="menu__item">Transacoes</a>
      </router-link>
          <a class="menu__item">Investimentos</a>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Menu extends Vue {

}
</script>
