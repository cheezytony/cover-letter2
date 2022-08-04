<script lang="ts" setup>
import Button from '../common/Button.vue';

const print = () => window.print();
</script>

<template>
  <header class="flex justify-between items-center p-8 print:hidden">
    <div class="font-brand tracking-widest text-2xl uppercase">
      Cover Letter
    </div>
    <div class="flex gap-24 items-center">
      <Button
        aria-label="Print"
        color-scheme="blue"
        type="button"
        @click="print"
      >
        Print
      </Button>
    </div>
  </header>
</template>
