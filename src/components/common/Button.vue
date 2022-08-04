<script lang="ts" setup>
import { computed } from 'vue';
import { ButtonHTMLAttributes } from 'vue';

const props = defineProps<{
  colorScheme?: 'black' | 'blue' | 'purple' | 'white';
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
  type?: ButtonHTMLAttributes['type'];
}>();

const theme = computed(() => {
  switch (props.colorScheme) {
    case 'black':
      return 'bg-black bg-opacity-25 text-white';
    case 'blue':
      return 'bg-blue-700 text-white hover:bg-blue-600 active:bg-blue-700';
    case 'purple':
      return 'bg-purple-700 text-white hover:bg-purple-600 active:bg-purple-700';
    case 'white':
      return 'bg-white bg-opacity-5 text-white';
    default:
      return '';
  }
});

const shape = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-5 py-3 rounded-md text-[0.75rem]';
    case 'md':
    default:
      return 'px-10 py-4 rounded-lg text-[0.875rem]';
  }
});
</script>

<template>
  <button
    v-bind="{ ...$attrs, type }"
    class="appearance-none duration-200 font-bold inline-flex items-center justify-center transform hover:-translate-y-1 active:scale-95"
    :class="[theme, shape]"
  >
    <slot />
  </button>
</template>
