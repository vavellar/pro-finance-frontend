<template>
  <div class="investiments card">
    <h2 class="investiments-card__title title-1">
     {{ chart.title }}
    </h2>
    <div class="investments__graph">
     <canvas class="investiments__pie-chart" :ref="chart.refId"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Chart } from 'chart.js'
@Component({
  components: {
  }
})
export default class Investiments extends Vue {
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({
    default: () => {
      return Chart.defaults.lineChart
    }
  })
  chart = {
    title: 'Investimentos por categoria', refId: 'chartIncomes'
  }

  mounted () {
    this.createChart({
      datasets: [
        {
          data: this.data
        }
      ],
      labels: this.labels
    })
  }

  createChart (chartData: Record<string, unknown>): void {
    const ctxInvestiments = document.getElementsByClassName('investiments__pie-chart') as HTMLCanvasElement

    const chartGraphInvestiments = new Chart(ctxInvestiments, {
      type: 'pie',
      data: {
        labels: [
          'Other',
          'Bills',
          'Entertainment',
          'Health',
          'Education',
          'Clothes'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 200, 400, 500],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 300, 86)',
            'rgb(200, 100, 132)',
            'rgb(523, 162, 235)',
            'rgb(44, 205, 86)'
          ]
        }]
      }
    })
  }
}

</script>
