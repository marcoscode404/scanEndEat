<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';

const isOpen = ref(false)
function setIsOpenDropdown(value) {
    isOpen.value = value
}

const isOpenn = ref(false)

</script>

<template>
    <div class="h-screen max-h-screen overflow-hidden">
        <header class="fixed w-full border-b-2  bg-black h-10 z-[999] rounded-br-lg rounded-bl-lg
                           p-2 px-4  select-none text-white
                            flex items-center justify-between">

            <div class="flex gap-4 items-center">
                <slot name="headerNavigation"></slot>
            </div>

            <div class="font-bold">
                <slot name="navigation">Marcos Vinicius Marques Gomes</slot>
            </div>

            <slot name="header">
                <div>
                    <GlobalButton @click="isOpenn = true" type="default"
                        class="flex items-center  rounded-full border-2 w-7 bg-white">
                        <Icon class="text-lg text-black w-7 h-6" name="solar:hamburger-menu-broken" />
                    </GlobalButton>

                    <USlideover v-model="isOpenn" :overlay="false">
                        <div class="p-4 flex-1 bg-black">
                            <button @click="isOpenn = false" class="mt-10 text-white w-10 h-10 bg-red-600">X</button>
                            <Placeholder class="h-full" />
                        </div>
                    </USlideover>
                </div>
            </slot>
            <!-- button Profile -->
        </header>

        <main class="pt-10 h-full w-screen">
            <slot></slot>

            <slot name="footer">
                <div class="w-full h-10 rounded-t-3xl bg-[#212121] text-white font-semibold flex justify-center gap-20
                    absolute bottom-0 items-center">
                    <div class="h-5 select-none border-none">
                        <NuxtLink :href="'/home'" class="select-none">Home</NuxtLink>
                    </div>
                    <div class="h-5 select-none border-none">
                        <NuxtLink :href="'/home/history'" class="select-none">Histórico</NuxtLink>
                    </div>
                </div>
            </slot>
        </main>
    </div>
</template>

<style>
/* Track */
::-webkit-scrollbar-track {
    background: white;
}

::-webkit-scrollbar {
    width: 0.3em;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>