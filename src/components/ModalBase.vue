<script setup lang="ts">
import { computed, getCurrentInstance, onMounted } from 'vue'
defineEmits(['close'])
const instance = getCurrentInstance()
const propNumber = instance?.appContext?.app?._props?.modalNumber ?? 0
const dialogId = computed(() => `modal-${propNumber}`)
onMounted(() => {
  const dialog = document.getElementById(dialogId.value) as HTMLDialogElement
  dialog?.showModal()
})
</script>
<template>
  <dialog :id="dialogId" class="modal" :class="{ isBase: propNumber === 0 }">
    <slot></slot>
  </dialog>
</template>
<style scoped>
.modal {
  min-width: 300px;
  max-width: 600px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.modal-backdrop.isBase {
  background-color: rgba(0, 0, 0, 0.5);
}

dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: white;
}
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
dialog:not(.isBase)::backdrop {
  background-color: transparent;
}
</style>
