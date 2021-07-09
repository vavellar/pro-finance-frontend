<template>
  <div style="height: 220px; width: 95%; margin-left: 50px">
    <canvas id="lineChart"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Chart from 'chart.js'

@Component({
  components: {
  }
})
export default class lineChart extends Vue {
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({
    default: () => {
      return Chart.defaults.lineChart
    }
  })
  readonly options: Record<string, unknown> | undefined

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

  createChart (chartData: Record<string, unknown>) {
    const graph = document.getElementById('lineChart') as HTMLCanvasElement
    graph.height = 45
    console.log(graph)
    const options = {
      reponsive: true,
      type: 'line',
      data: chartData,
      options: this.options
    }
    new Chart(graph, options)
  }
}

</script>
