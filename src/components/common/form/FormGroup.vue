<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { Form, FormFieldNormalized, getFieldError } from 'vue3-form';
import Input from './Input.vue';
import Select from './Select.vue';
import Editor from './Editor.vue';
import { SelectOption } from '../../../types';

const props = defineProps<{
  id?: string;
  form: Form;
  label?: string;
  modelValue?: number | string;
  name: string;
  options?: SelectOption[];
  type?: 'editor' | 'select' | 'text';
}>();

const formField = computed<FormFieldNormalized>(() => {
  return props.form.fields[props.name];
});
const formFieldErrors = computed(() => formField ? getFieldError(formField.value) : []);
</script>

<template>
  <div class="flex flex-col gap-4">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <div>
      <div class="w-full">
        <Editor
          v-if="type === 'editor'"
          v-bind="{ ...$attrs, id, name }"
          v-model="(formField.value as string)"
        />
        <Select
          v-else-if="type === 'select'"
          v-bind="{ ...$attrs, id, name, options }"
          v-model="(formField.value as string)"
        />
        <Input
          v-else
          v-bind="{ ...$attrs, id, name, type }"
          v-model="(formField.value as string)"
        />
      </div>
      <div v-if="formFieldErrors" class="text-xs text-red-500 uppercase">
        {{ formFieldErrors[0] }}
      </div>
    </div>
  </div>
</template>
