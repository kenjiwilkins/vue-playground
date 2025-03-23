<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { useModalStore } from '@/stores/modalManager'
const modalStore = useModalStore()
function closeModal() {
  modalStore.closeAll()
}
</script>
<template>
  <ModalBase>
    <div class="modal">
      <div>
        <h2>Alert</h2>
      </div>
      <div>
        <p>Are you sure you want to close all modal?</p>
      </div>
      <div class="modal-footer">
        <button class="alert-button" @click="closeModal">Close</button>
      </div>
    </div>
  </ModalBase>
</template>
<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.alert-button {
  padding: 8px 16px;
  background-color: #f00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
