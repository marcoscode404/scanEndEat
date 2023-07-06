<script setup lang="ts">

interface Props{
    icon?: string | null
    type?: string | keyof {}
}

const props = withDefaults(
    defineProps<Props>(),
    {type: 'success', icon: null}
)

const typesStyles: {[index: string]: string} = {
    'danger': 'py-1  bg-msRed600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75',
    'success': 'py-1 px-1 bg-msGreen500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75',
    'attention': 'py-1 px-1 bg-msOrange500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75',
    'disabled': 'py-1  bg-msGray300 text-white font-semibold rounded-lg shadow-md focus:outline-none  cursor-not-allowed',
    'default': 'text-black',
    'defaultSecondary': 'py-1 px-1 text-black font-semibold rounded-lg shadow-md focus:outline-none',
    'iconButton': 'rounded-full text-msRed500 border hover:bg-red-500 hover:text-white font-semibold hover:border-red-600'
}

</script>

<template>
    <button type="button" :class="typesStyles[props.type]">
        <slot></slot>
        <icon v-if="props.icon != null" :name="props.icon" class="ml-2 w-5 h-5" />
    </button>
</template>