<template>
  <div class="spending card">
    <h2 class="speding-card__title title-1">
      {{ chart.title}}
    </h2>
    <div class="spending__graph">
     <canvas class="spending__pie-chart" :ref="chart.refId"></canvas>
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
export default class Spending extends Vue {
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({
    default: () => {
      return Chart.defaults.lineChart
    }
  })
  chart = {
    title: 'Gastos por categoria', refId: 'chartSpending'
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
    const ctxSpending = document.getElementsByClassName('spending__pie-chart') as HTMLCanvasElement

    const chartGraphSpending = new Chart(ctxSpending, {
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
