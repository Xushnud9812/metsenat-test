<script setup lang="ts">

defineProps<{
  placeholder: string;
  type: string;
}>();

defineEmits(["update:modelValue"]);
</script>


<template>
  <input :placeholder="placeholder" :type="type"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-[#E0E7FF33] focus:border-[#2E5BFF] focus:outline-none">
</template>