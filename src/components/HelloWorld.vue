<script setup lang="ts">
import { useModalStore } from '@/stores/modalManager'
defineProps<{
  msg: string
}>()
const modalStore = useModalStore()
const newModal = () => {
  modalStore.openModal('confirm')
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="newModal">Open Modal</button>
  </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
