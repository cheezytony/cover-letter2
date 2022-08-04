<script lang="ts" setup>
import { useSectionForm } from '../../../hooks';
import { useAppState } from '../../../store';
import FormGroup from '../../common/form/FormGroup.vue';
import Form from '../../common/form/Form.vue';
import Button from '../../common/Button.vue';
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSections, useSelectedSection } from '../../../store/sections';

const { updateSection } = useSections();
const { selectedSection } = storeToRefs(useSelectedSection());
const { form, sizes, types, getData, reset, updateFields, validate } = useSectionForm();
const { setState } = useAppState();

const submit = () => {
  if (!validate() || !selectedSection.value) return;
  updateSection(selectedSection.value, {
    ...getData(),
    id: selectedSection.value.id
  });
  setState();
  reset();
};

const updateForm = () => {
  selectedSection.value && updateFields(selectedSection.value);
};
watch(() => selectedSection.value, updateForm);
onMounted(updateForm);
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex justify-between">
      <h2 class="font-brand opacity-75 text-xl uppercase">Edit section</h2>
      <button type="button" @click="setState()">
        <ion-icon name="caret-back-outline" />
      </button>
    </div>

    <Form class="flex flex-col gap-8" @submit="submit">
      <FormGroup
        :form="form"
        name="type"
        label="Section Type"
        placeholder="e.g. greeting, opener, body, salutation"
        type="select"
        :options="types"
      />
      <FormGroup
        :form="form"
        name="size"
        label="Font size"
        placeholder="e.g. md: 18px"
        type="select"
        :options="sizes"
      />
      <FormGroup
        :form="form"
        name="content"
        label="Content"
        placeholder="e.g. Commodi inventore reiciendis, maxime itaque exercitationem ex architecto eum dignissimos."
        type="editor"
      />
      <div class="flex justify-end">
        <Button color-scheme="blue" type="submit">Update Section</Button>
      </div>
    </Form>
  </div>
</template>
