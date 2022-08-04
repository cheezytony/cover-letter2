<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import {
  useAppState
} from '../../store';
import { useSections, useSelectedSection } from '../../store/sections';
import { useVariables } from '../../store/variables';
import { SectionInterface } from '../../types';

defineEmits<{
  (e: 'delete'): void;
  (e: 'select'): void;
  (e: 'add'): void;
}>();
const props = defineProps<{
  isSelected?: boolean;
  section: SectionInterface;
}>();

const { moveSectionDown, moveSectionUp, removeSection } = useSections();
const { selectSection } = useSelectedSection();
const { variables } = storeToRefs(useVariables());
const appState = useAppState();

const buttons = computed(() => [
  { title: 'Edit', icon: 'pencil-outline', action: select },
  { title: 'Add Section Below', icon: 'add', action: add },
  { title: 'Delete', icon: 'trash-outline', action: remove },
  {
    title: 'Move Down',
    icon: 'caret-down-outline',
    action: () => moveSectionDown(props.section),
  },
  {
    title: 'Move Up',
    icon: 'caret-up-outline',
    action: () => moveSectionUp(props.section),
  },
]);
const theme = computed(() => {
  switch (props.section.size) {
    case 'md':
    default:
      return 'font-text font-light text-lg';
  }
});
const content = computed(() => {
  return props.section.content.replace(/#\w+/g, (key) => {
    const variableName = key.replace('#', '');
    const variable = variables.value.find((v) => v.key === variableName);
    if (variable) return `<span class="font-bold">${variable.value}</span>`;
    return key;
  });
});

const add = () => appState.setState('create:section');
const remove = () => removeSection(props.section);
const select = () => {
  selectSection(props.section);
  appState.setState('edit:section', false);
};
</script>

<template>
  <div class="duration-150 transition-transform">
    <div
    class="border border-transparent duration-100 group relative rounded-md"
    :class="[
      isSelected
        ? 'bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-25'
        : 'hover:border-white dark:hover:border-black hover:border-opacity-25 dark:/hover:border-opacity-25',
    ]"
  >
    <div
      class="pb-8 pt-3 px-5 whitespace-pre-line w-full focus:outline-none"
      :class="[theme]"
      v-html="content"
    />
    <div class="absolute bottom-3 flex flex-row-reverse gap-2 right-3">
      <template
        :key="index"
        v-for="({ action, icon, title }, index) in buttons"
      >
        <button
          class="bg-white bg-opacity-50 duration-150 grid h-8 opacity-0 place-items-center rounded-full text-sm transform translate-y-full w-8 dark:bg-black dark:bg-opacity-25 group-hover:opacity-100 group-hover:translate-y-0"
          :aria-label="title"
          :title="title"
          :style="{ transitionDelay: `${50 * index}ms` }"
          @click="action"
        >
          <ion-icon :name="icon" />
        </button>
      </template>
    </div>
  </div>
  </div>
</template>
