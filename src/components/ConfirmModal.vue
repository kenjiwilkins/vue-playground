<script setup lang="ts">
import { onMounted } from 'vue'
import ModalBase from './ModalBase.vue'
import { useModalStore } from '@/stores/modalManager'
const modalStore = useModalStore()
function closeModal() {
  modalStore.closeModal()
}
function openModal() {
  modalStore.openModal('alert')
}
onMounted(() => {
  setTimeout(() => {
    const confirmButton = document.getElementById('confirmButton') as HTMLButtonElement
    confirmButton?.focus()
  }, 1000)
})
</script>
<template>
  <ModalBase>
    <form class="modal" @submit.prevent="openModal">
      <div>
        <h2>Confirm</h2>
      </div>
      <div>
        <p>Are you sure you want to see new modal?</p>
      </div>
      <div class="modal-footer">
        <input class="cancel button" @click="closeModal" type="button" value="Cancel" />
        <input
          id="confirmButton"
          class="confirm button"
          @click="openModal"
          type="submit"
          autofocus
          value="OK"
        />
      </div>
    </form>
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
  font-weight: bold;
}
.button:focus {
  outline: blue auto 5px;
}

.cancel {
  background-color: #888;
  color: white;
}

.confirm {
  background-color: rgb(0, 201, 0);
  color: white;
}
</style>
