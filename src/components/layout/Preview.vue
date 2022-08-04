<script lang="ts" setup>
import Section from '../common/Section.vue';
import { useSections, useSelectedSection } from '../../store/sections';
import { storeToRefs } from 'pinia';

const { sections } = storeToRefs(useSections());
const { selectedSection } = storeToRefs(useSelectedSection());
</script>

<template>
  <div class="bg-white bg-opacity-25 flex flex-col px-2 py-8 flex-grow md:px-8 dark:bg-black dark:bg-opacity-10">
    <TransitionGroup v-if="sections.length" class="flex flex-col gap-2 xl:pr-32" name="list" tag="ul">
      <template :key="section.id" v-for="(section, index) in sections">
        <Section
          :section="section"
          :isSelected="section === selectedSection"
        />
      </template>
    </TransitionGroup>
    <div v-else class="flex-grow grid place-items-center">
      <div class="flex flex-col gap-4 w-3/5">
        <div class="bg-white h-5 opacity-25 rounded w-full" />
        <div class="font-brand opacity-50 text-2xl uppercase">
          No sections yet. Add a section from the edit panel on the right.
        </div>
        <div class="bg-white h-5 opacity-25 rounded w-3/5" />
        <div class="bg-white h-5 opacity-25 rounded w-4/5" />
      </div>
    </div>
  </div>
</template>
