import { createApp, ref } from 'vue'
import type { App } from 'vue'
import { defineStore } from 'pinia'
import AlertModal from '@/components/AlertModal.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'

interface AppListItem {
  app: App<Element>
  modalContainer: HTMLElement
}

type ModalTypes = 'alert' | 'confirm'

function getModalComponent(type: ModalTypes) {
  switch (type) {
    case 'alert':
      return AlertModal
    case 'confirm':
      return ConfirmModal
    default:
      return AlertModal
  }
}

export const useModalStore = defineStore('modal', () => {
  const modalStack = ref<AppListItem[]>([])
  function openModal(type: ModalTypes) {
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')
    document.body.appendChild(modalContainer)
    const ModalComponent = getModalComponent(type)
    const app = createApp(ModalComponent, {
      modalNumber: modalStack.value.length,
    })
    app.config.globalProperties.$rootProps = app._component.props
    app.mount(modalContainer)

    modalStack.value.push({
      // @ts-ignore
      app,
      modalContainer,
    })
  }
  function closeModal() {
    const appListItem = modalStack.value.pop()
    if (appListItem?.app) {
      appListItem.app.unmount()
      document.body.removeChild(appListItem.modalContainer)
    }
  }
  function closeAll() {
    while (modalStack.value.length) {
      closeModal()
    }
  }
  return { openModal, closeModal, closeAll }
})
