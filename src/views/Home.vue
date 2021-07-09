<template>
  <div id="home-content">
    <div class="container">
      <div class="header">
        <FinancialSummary/>
      </div>
      <div class="main">
        <div class="main-center">
          <Investiments/>
          <Spending/>
        </div>
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
