<template>
  <div class="monthly-summary">
    <h2 class="monthly-summary__title">Resumo mês a mês</h2>
    <div class="graph">
      <LineChart
      :data="lancamentos"
      :labels="meses"
    />
    </div>
  </div>
</template>

<script lang="ts">
import LineChart from '../components/LineChart.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LineChart
  }
})
export default class MonthlySummary extends Vue {
  name: 'MonthlySummary';

  lancamentos = [25, 10, 30, 40, 50, 60, 70, 80, 90, 100, 110, 40]
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
}

</script>
