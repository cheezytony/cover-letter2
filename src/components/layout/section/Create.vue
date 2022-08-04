<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import { useAppState } from '../../../store';
import Form from '../../common/form/Form.vue';
import FormGroup from '../../common/form/FormGroup.vue';
import Button from '../../common/Button.vue';
import { useSectionForm } from '../../../hooks';
import { storeToRefs } from 'pinia';
import { onMounted, onUpdated } from 'vue';
import { useSections } from '../../../store/sections';

const { addSection } = useSections();
const { form, sizes, types, getData, reset, validate } = useSectionForm();
const { setState } = useAppState();
const { sections } = storeToRefs(useSections());
onMounted(() => console.log(sections));
onUpdated(() => console.log(sections));

const submit = () => {
  if (!validate()) return;
  addSection({
    ...getData(),
    id: uuidv4()
  });
  setState();
  reset();
};
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex justify-between">
      <h2 class="font-brand opacity-75 text-xl uppercase">Add a new section</h2>
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
        <Button color-scheme="purple" type="submit">Add Section</Button>
      </div>
    </Form>
  </div>
</template>
