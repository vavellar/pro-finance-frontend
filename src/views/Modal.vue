<template>
  <div class="modal-card">
    <div class="modal-header">
      <h2 class=modal-header__title>Adicione uma nova transação</h2>
      <button class="modal-header__button" @click="closeModal">X</button>
    </div>
    <div class="modal-body">
      <form action="">
        <div class="form-group">
          <label for="date">Insira a data:</label>
          <input name="nome" type="text">
        </div>
        <div class="form-group">
          <label for="value">Insira o valor:</label>
          <input name="value" type="number">
        </div>
        <div class="form-group">
          <label for="category">Insira a categoria:</label>
          <input name="category" type="text">
        </div>
        <div class="form-group">
          <label for="description">Insira a descrição:</label>
          <input name="description" type="text">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="modal-footer__confirm">Confirmar</button>
      <button class="modal-footer__cancel">Cancelar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Modal extends Vue {}
</script>
