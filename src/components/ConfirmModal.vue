<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { useModalStore } from '@/stores/modalManager'
const modalStore = useModalStore()
function closeModal() {
  modalStore.closeModal()
}
function openModal() {
  modalStore.openModal('alert')
}
</script>
<template>
  <ModalBase>
    <div class="modal">
      <div>
        <h2>Confirm</h2>
      </div>
      <div>
        <p>Are you sure you want to see new modal?</p>
      </div>
      <div class="modal-footer">
        <button class="confirm button" @click="openModal">OK</button>
        <button class="cancel button" @click="closeModal">Cancel</button>
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

.modal-footer {
  display: flex;
  gap: 8px;
}

.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel {
  background-color: #888;
  color: white;
}

.confirm {
  background-color: #0f0;
  color: white;
}
</style>
