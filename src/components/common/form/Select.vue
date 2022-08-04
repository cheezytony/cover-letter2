<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { SelectOption } from '../../../types';

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
const props = defineProps<{
  options?: SelectOption[];
  modelValue?: number | string;
}>();

const rootElementRef = ref<HTMLDivElement>();
const isFocused = ref<boolean>(false);
const selectedOption = computed<SelectOption | undefined>(() => {
  return props.options?.find((option) => option.value === props.modelValue);
});

const toggleIsFocused = () => (isFocused.value = !isFocused.value);
const selectOption = (option: SelectOption): void => {
  emit('update:modelValue', option.value);
};
const handleWindowInteraction = (event: MouseEvent) => {
  if (!rootElementRef.value || !isFocused.value) return;
  if (rootElementRef.value.contains(event.target as HTMLElement)) return;
  isFocused.value = false;
};

onMounted(() => {
  window.addEventListener('click', handleWindowInteraction);
});
onBeforeUnmount(() => {
  window.removeEventListener('click', handleWindowInteraction);
});
</script>

<template>
  <div ref="rootElementRef" class="relative" @click="toggleIsFocused">
    <div
      class="bg-white bg-opacity-50 ring ring-transparent cursor-pointer px-8 py-4 relative rounded-lg w-full dark:bg-black dark:bg-opacity-25"
      :class="[isFocused && 'ring-blue-700']"
    >
      <span>{{ selectedOption?.title || '&nbsp;' }}</span>
      <span
        class="absolute duration-100 inline-flex right-6 top-1/2 transform -translate-y-1/2"
        :class="[isFocused && '-rotate-180']"
      >
        <ion-icon name="chevron-down-outline" />
      </span>
    </div>
    <div
      class="absolute bg-white bg-opacity-75 backdrop-blur-[50rem] overflow-hidden rounded-lg top-full w-full z-dropdown dark:bg-black dark:bg-opacity-75"
      :class="[
        isFocused ? 'translate-y-2' : 'opacity-0 invisible translate-y-4',
      ]"
      role="menu"
    >
      <template :key="index" v-for="(option, index) in options">
        <div
          class="cursor-pointer font-bold px-8 py-3 text-xs"
          :class="[
            option.value === selectedOption?.value
              ? 'bg-blue-700 text-white dark:text-white'
              : 'hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10',
          ]"
          role="option"
          @click="() => selectOption(option)"
        >
          {{ option.title }}
        </div>
      </template>
    </div>
  </div>
</template>
