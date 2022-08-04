import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Variable } from '../types';

export const useVariables = defineStore('variables', () => {
  const variables = ref<Variable[]>([
    { key: 'target_position', value: 'Target Position' },
    { key: 'current_position', value: 'Full Stack Developer' },
    { key: 'target_company', value: 'Target Company' },
    { key: 'current_company', value: 'CredPal' },
    { key: 'recipient', value: 'Hiring Manager' },
    { key: 'referrer', value: 'Job Listing' },
  ]);

  const addVariable = (variable: Variable) => {
    variables.value.push(variable);
  };
  const removeVariable = (variable: Variable) => {
    variables.value = variables.value.filter((s) => s !== variable);
  };
  const updateVariable = (variable: Variable, updatedVariable: Variable) => {
    variables.value = variables.value.map((s) => {
      if (s !== variable) return s;
      return updatedVariable;
    });
  };
  return { variables, addVariable, removeVariable, updateVariable };
});
