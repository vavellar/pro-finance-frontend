<template>
  <div class="spending-card">
    <h2 class="speding-card__title">
      {{ chart.title}}
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Spending extends Vue {
  chart = {
    title: 'Gastos por categoria', refId: 'chartIncomes'
  }
}
</script>
