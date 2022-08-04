import { defineStore } from 'pinia';
import { ref } from 'vue';
import defaultSections from '../mocks/sections';
import { SectionInterface } from '../types';

export const useSections = defineStore('sections', () => {
  const sections = ref<SectionInterface[]>(defaultSections);

  const addSection = (section: SectionInterface) => {
    sections.value.push(section);
  };
  const removeSection = (section: SectionInterface) => {
    sections.value = sections.value.filter((s) => s !== section);
  };
  const updateSection = (
    section: SectionInterface,
    updatedSection: SectionInterface
  ) => {
    sections.value = sections.value.map((s) => {
      if (s !== section) return s;
      return updatedSection;
    });
  };
  const moveSectionDown = (section: SectionInterface) => {
    if (sections.value[sections.value.length - 1] === section) return;
    sections.value = sections.value.map((s, i) => {
      if (s === section) return sections.value[i + 1];
      if (sections.value[i - 1] === section) return section;
      return s;
    });
  };
  const moveSectionUp = (section: SectionInterface) => {
    if (sections.value[0] === section) return;
    sections.value = sections.value.map((s, i) => {
      if (s === section) return sections.value[i - 1];
      if (sections.value[i + 1] === section) return section;
      return s;
    });
  };
  return {
    sections,
    addSection,
    moveSectionDown,
    moveSectionUp,
    removeSection,
    updateSection,
  };
});


export const useSelectedSection = defineStore('selectedSection', () => {
  const selectedSection = ref<SectionInterface>();

  const deselectSection = () => {
    console.log('deselect');

    selectedSection.value = undefined;
  };
  const selectSection = (section: SectionInterface) => {
    selectedSection.value = section;
  };

  return { selectedSection, deselectSection, selectSection };
});
