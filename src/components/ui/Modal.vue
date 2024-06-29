<template>
  <div v-if="isOpen" class="modal-mask" @click.self="closeModal">
    <div class="modal-wrapper">
      <div :class="['modal-container', modalSize]" ref="target">
        <div class="modal-header">
          <button class="close-btn" @click.stop="closeModal">x</button>
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="content">default content</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value),
    },
  },
  emits: ["modal-close"],
  setup(props, { emit }) {
    const target = ref(null);
    onClickOutside(target, () => emit('modal-close'));

    const closeModal = () => {
      emit('modal-close');
    };

    return {
      target,
      closeModal,
    };
  },
  computed: {
    modalSize() {
      return `modal-${this.size}`;
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.modal-small {
  width: 30%;
}

.modal-medium {
  width: 50%;
}

.modal-large {
  width: 90%;
}

.modal-header {
  position: relative;
  padding: 0.625rem;
  border-bottom: 1px solid #eee;
}

.close-btn {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  border: none;
  background-color: transparent;
}

.modal-body {
  padding: 1.25rem;
  overflow-y: auto;
  flex-grow: 1;
}

.modal-footer {
  padding: 0.625rem;
  border-top: 1px solid #eee;
  text-align: right;
}
</style>
