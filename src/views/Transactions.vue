<template>
  <div class="transactions-content">
    <h2 class="transactions-content__title title-1">Transações</h2>
    <h4 class="transactions-content__subtitle subtitle-1">Data da transação</h4>
    <div class="second-content">
      <div class="second-content__calendar">
        <Fullcalendar/>
      </div>
      <button class="second-content__btn" @click="newTransaction">Nova transação</button>
    </div>
    <table class="transactions-table">
      <thead class="transactions-table__head">
        <tr>
          <th class="transactions-table__date">Data</th>
          <th class="transactions-table__value">Valor</th>
          <th class="transactions-table__category">Categoria</th>
          <th class="transactions-table__description">Descrição</th>
        </tr>
      </thead>
      <ul class="teste">
        <li v-for="transaction in transactions" :key="transaction">
          {{ transaction.$data }}
        </li>
      </ul>
    </table>
    <!-- <Modal v-if="visible"/> -->
  </div>
</template>

<script lang="ts">
import Modal from './Modal.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Transactions',
  components: {
    Modal
  }
})

export default class Transactions extends Vue {
  visible = false
  transactions = []

  newTransaction (): void {
    console.log(this.transactions)
    this.transactions.push({
      categoria: 'Nao sei',
      data: '22',
      valor: 50,
      descricao: 'nao sei'
    })
  }
}

</script>
