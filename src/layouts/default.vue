<script setup>

</script>

<template>
    <div class="h-screen max-h-screen overflow-hidden">
        <header class="fixed w-full bg-white h-10 z-[999] rounded-br-lg rounded-bl-lg
                           p-2 px-4  select-none
                            flex items-center justify-between">

            <div class="flex gap-4 items-center">
                <slot name="headerNavigation"></slot>
            </div>

            <div>
                <slot name="navigation">Marcos Vinicius Marques Gomes</slot>
            </div>

            <slot name="header">
                <Icon class="text-lg" name="simple-line-icons:menu" />
            </slot>
            <!-- button Profile -->
        </header>

        <!-- Dropdown menu -->
        <!-- <Dialog :open="isOpen" @close="setIsOpenDropdown" id="dropdown" class="absolute z-[9999999] top-12 h-full
                                     divide-gray-100 bg-[#1212122e] backdrop-blur-sm  w-screen  rounded-lg">

            <DialogPanel class="w-3/3 h-48 m-auto rounded-lg bg-white border-2 border-gray-200 shadow-xl">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    <li class="text-center text-lg border-b-2 pb-2 font-semibold">
                        {{ firstNameInitial.first_name }}
                    </li>

                    <li>
                        <button @click="useLogout" class="w-full flex justify-center gap-2 px-4 py-4 hover:bg-gray-100 
                                                                           text-base cursor-pointer border-b-2">
                            <Icon name="material-symbols:logout-rounded" class="h-6 w-6 text-red-600" />
                            Logout
                        </button>
                    </li>

                    <li class="px-4 py-3 flex justify-center text-base">
                        <div v-if="memory">{{ (((memory.totalJSHeapSize / 1024)) / 1024).toFixed(2) }} MB</div>
                    </li>
                    <li class="px-4 py-1 flex justify-center text-base">Versão 1.0.0</li>
                </ul>
            </DialogPanel>
        </Dialog> -->

        <main class="pt-10 h-full w-screen">
            <slot></slot>
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