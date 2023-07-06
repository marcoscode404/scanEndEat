<script setup lang="ts">

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'enter'])

const inputRef = ref<HTMLInputElement>()
</script>

<template>
    <input ref="inputRef" :value="modelValue" @input="(e) => emit('update:modelValue', inputRef.value)"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500">
</template>