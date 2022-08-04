<script lang="ts" setup>
import { Variable } from '../../../types';
import { useAppState } from '../../../store';
import Button from '../../common/Button.vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useVariables } from '../../../store/variables';

const { variables } = storeToRefs(useVariables());
const { removeVariable } = useVariables();
const { setState } = useAppState();

const form = ref<Variable[]>([]);

const addVariable = () => {
  variables.value.push({ key: '', value: '' });
};

onMounted(() => {
  form.value = variables.value;
});
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex justify-between">
      <h2 class="font-brand opacity-75 text-xl uppercase">Variables</h2>
      <button type="button" @click="setState()">
        <ion-icon name="caret-back-outline" />
      </button>
    </div>

    <table
      class="bg-black bg-opacity-10 border-collapse rounded-lg text-left w-full dark:bg-white dark:bg-opacity-10"
    >
      <thead>
        <tr>
          <template v-for="(th, index) in ['Key', 'Value', '']">
            <th class="font-brand font-normal px-7 pt-5 pb-2 text-sm uppercase">
              {{ th }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="(variable, index) in variables">
          <tr
            class="focus-within:bg-black focus-within:bg-opacity-5 hover:bg-black hover:bg-opacity-5"
          >
            <td class="relative p-0">
              <span
                class="absolute left-5 opacity-50 text-sm top-1/2 transform -translate-y-1/2"
              >
                #
              </span>
              <input
                type="text"
                class="bg-transparent pl-7 pt-3 py-3 outline-none w-full hover:bg-black hover:bg-opacity-5 focus:bg-black focus:bg-opacity-[0.15]"
                placeholder="key"
                v-model="variable.key"
              />
            </td>
            <td class="p-0">
              <input
                type="text"
                class="bg-transparent pl-7 pt-3 py-3 outline-none w-full hover:bg-black hover:bg-opacity-5 focus:bg-black focus:bg-opacity-[0.15]"
                placeholder="value"
                v-model="variable.value"
              />
            </td>
            <td class="p-0">
              <button
                aria-label="Remove Variable"
                class="px-3 py-3 w-full hover:bg-black hover:bg-opacity-10"
                title="Remove Variable"
                @click="removeVariable(variable)"
              >
                <ion-icon name="trash-outline" />
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <div>
      <Button color-scheme="black" size="sm" @click="addVariable">
        Add new variable
      </Button>
    </div>
  </div>
</template>
