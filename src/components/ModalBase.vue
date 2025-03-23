<script setup lang="ts">
import { getCurrentInstance } from 'vue'
defineEmits(['close'])
const instance = getCurrentInstance()
const propNumber = instance?.appContext?.app?._props?.modalNumber ?? 0
</script>
<template>
  <div class="modal-backdrop" :class="{ isBase: propNumber === 0 }" @click="$emit('close')">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
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
</style>
