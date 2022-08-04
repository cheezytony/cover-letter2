import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useSelectedSection } from './sections';

type AppState = 'create:section' | 'edit:section' | 'variables';

export const useAppState = defineStore('appState', () => {
  const { deselectSection } = useSelectedSection();
  const state = ref<AppState>();
  const setState = (newState?: AppState, clearSelectedSection: boolean = true) => {
    console.log(clearSelectedSection);
    state.value = newState;
    clearSelectedSection && deselectSection();
  };

  return { state, setState };
});
