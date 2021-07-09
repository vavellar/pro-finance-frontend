<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
          <a>Resumo finânceiro</a>
      </router-link>
      <router-link to="/transacoes" tag="li" active-class="active">
          <a>Transacoes</a>
      </router-link>
          <a>Investimentos</a>
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
