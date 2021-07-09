<template>
  <div class="investiments-card">
    <h2 class="investiments-card__title">
     {{ chart.title }}
     <canvas :ref="chart.refId"></canvas>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Investiments extends Vue {
  chart = {
    title: 'Investimentos por categoria', refId: 'chartIncomes'
  }

  setChart (): void {
    console.log('e')
  }
}

</script>
