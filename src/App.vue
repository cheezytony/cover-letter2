<script lang="ts" setup>
import Header from './components/layout/Header.vue'
import Preview from './components/layout/Preview.vue';
import Crud from './components/layout/Crud.vue';

</script>

<template>
  <div class="bg-app bg-cover overflow-y-auto w-screen md:h-screen md:p-8 print:bg-none print:p-0">
    <div class="bg-yellow-50 bg-opacity-75 backdrop-blur-3xl flex flex-col overflow-hidden text-black w-full md:min-h-full md:rounded-2xl md:shadow-2xl dark:bg-blue-900 dark:bg-opacity-80 dark:text-white print:bg-white">
      <Header />
      <div class="flex flex-col flex-grow md:flex-row">
        <Preview />
        <Crud />
      </div>
    </div>
  </div>
</template>
