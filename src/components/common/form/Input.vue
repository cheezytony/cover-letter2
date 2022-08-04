<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const props = defineProps<{
  type?: 'text';
  modelValue?: number | string;
  modelModifiers?: Record<string, boolean>;
}>();

const handleChange: EventListener = (event) => {
  let value = (event.target as HTMLInputElement).value;
  if (props.modelModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit('update:modelValue', value);
};
</script>

<template>
  <input
    v-bind="$attrs"
    class="bg-black bg-opacity-25 px-8 py-4 rounded-lg w-full focus:bg-black focus:bg-opacity-25 focus:outline-none"
    :type="type"
    :value="modelValue"
    @input="handleChange"
  />
</template>
