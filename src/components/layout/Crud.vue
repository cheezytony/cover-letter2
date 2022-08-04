<script lang="ts" setup>
import { useAppState, } from '../../store';
import Create from './section/Create.vue';
import Edit from './section/Edit.vue';
import Dashboard from './Dashboard.vue';
import { storeToRefs } from 'pinia';
import Variables from './variable/Variables.vue';

const { state } = storeToRefs(useAppState());
</script>

<template>
  <div class="bg-white bg-opacity-40 flex-shrink-0 px-4 py-8 md:px-8 md:w-2/5 print:hidden  dark:bg-black dark:bg-opacity-25">
    <Create v-if="state === 'create:section'" />
    <Edit v-else-if="state === 'edit:section'" />
    <Variables v-else-if="state === 'variables'" />
    <Dashboard v-else />
  </div>
</template>
