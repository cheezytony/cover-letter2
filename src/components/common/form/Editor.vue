<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

defineProps<{
  options?: string[];
  modelValue?: string;
}>();

const handleChange: EventListener = (event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
};
</script>

<template>
  <textarea
    v-bind="$attrs"
    class="bg-white bg-opacity-50 resize-none ring ring-transparent min-h-[16rem] px-8 py-4 rounded-lg w-full dark:bg-black dark:bg-opacity-25 focus:ring-blue-700 focus:outline-none"
    contenteditable
    :value="modelValue"
    @input="handleChange"
  />
</template>
