<template>
  <div class="financial-summary card">
      <div class="financial-summary__item">
        <h2 class="financial-summary__title title-1">Resumo finânceiro</h2>
      </div>
      <div class="financial-summary__item py-20 ">
          <div class="financial-summary__revenues">
            <p class="financial-summary__value">
                {{ value | formatMoney}}
            </p>
            <p class="financial-summary__text">
                Resultado mensal
            </p>
          </div>
          <div class="financial-summary__expense">
            <p class="financial-summary__value">
                {{ value | formatMoney}}
            </p>
            <p class="financial-summary__text">
                Despesa mensal
            </p>
          </div>
          <div class="financial-summary__result">
            <p class="financial-summary__value">
                {{ value | formatMoney}}
            </p>
            <p class="financial-summary__text">
                Faturamento mensal
            </p>
            </div>
          </div>
      </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
  data () {
    return {
      value: 20
    }
  }
})
export default class FinacialSummary extends Vue {}
</script>
