<script lang="ts" setup>
import { useAppState } from '../../store';
import Button from '../common/Button.vue';

const appState = useAppState();
const cards = [
  {
    icon: 'albums-outline',
    description: 'Add a new cover letter section.',
    title: 'Sections',
    button: {
      text: 'Create Section',
      onClick: () => appState.setState('create:section'),
    },
  },
  {
    icon: 'folder-outline',
    description: 'Manage the variables used in your sections.',
    title: 'Variables',
    button: {
      text: 'Edit Variables',
      onClick: () => appState.setState('variables'),
    },
  },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <h2 class="font-brand opacity-75 text-xl uppercase">Dashboard</h2>
    <div class="gap-4 grid grid-cols-1 xl:grid-cols-2">
      <template :key="index" v-for="({ description, icon, title, button }, index) in cards">
        <div
          class="bg-black bg-opacity-10 flex flex-col gap-4 px-8 py-6 rounded-xl md:h-full dark:bg-white dark:bg-opacity-5"
        >
          <div class="flex flex-row gap-2 items-center opacity-50">
            <ion-icon :name="icon" />
            <div class="text-sm uppercase">{{ title }}</div>
          </div>
          <div class="flex flex-col gap-8">
            <div class="font-medium opacity-75 text-lg">
              {{ description }}
            </div>
            <div>
              <Button color-scheme="black" size="sm" @click="button.onClick">
                {{ button.text }}
              </Button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
