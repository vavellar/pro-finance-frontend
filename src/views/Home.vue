<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard__indicators">
        <FinancialSummary/>
      </div>
      <div class="dashboard__categories">
          <Investiments/>
          <Spending/>
      </div>
      <div class="dashboard__summary">
        <MonthlySummary/>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from './Menu.vue'
import FinancialSummary from './FinancialSummary.vue'
import MonthlySummary from './MonthlySummary.vue'
import Spending from './Spending.vue'
import Investiments from './Investiments.vue'

@Component({
  components: {
    Menu, FinancialSummary, MonthlySummary, Spending, Investiments
  }
})
export default class Home extends Vue {}
</script>
