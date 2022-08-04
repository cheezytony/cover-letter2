<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'change', event: Event): void
}>();

const handleClick: EventListener = (event) => {
  event.preventDefault();
  emit('change', event)
};
</script>

<template>
  <form @submit="handleClick">
    <slot />
  </form>
</template>
