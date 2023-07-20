<script setup lang="tsx">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { useNow, useDateFormat } from '@vueuse/core';

import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'

const formatted = useDateFormat(useNow(), 'DD-MM-YYYY HH:mm:ss')
const selectedTab = ref(0)

let dataFake = reactive([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

const greetings = ['😋', '🍲', '🍠', '🍚', '🍉', '🍊', '🍘', '🍳', '🍞', '🥗']
const word = ref('🧑🏻‍🍳')
const interval = ref(500)

const { pause, resume, isActive } = useIntervalFn(() => {
    word.value = greetings[rand(0, greetings.length - 1)]
}, interval)

setInterval(() => {
    pause()
    word.value = '🧑🏻‍🍳'
}, 200000)

</script>

<template>
    <h1 class="text-center mt-2">
        {{ formatted }}
    </h1>

    <TabGroup>
        <TabList :selectedIndex="selectedTab" class="w-full h-10 rounded-t-3xl bg-[#212121] text-white font-semibold flex justify-center gap-20
        absolute bottom-0 items-center
        ">
            <Tab v-slot="{ selected }" class="h-5">
                <button class="select-none" :class="selected ? 'text-slate-100 font-bold' : 'text-white'">Home</button>
            </Tab>
            <Tab v-slot="{ selected }" class="h-5 select-none border-none">
                <button class="select-none" :class="selected ? 'text-slate-100 font-bold' : 'text-white'">Histórico</button>
            </Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
                <div class="h-[70vh] flex justify-center items-center">
                    <div>
                        <div class="container m-auto mt-2 relative">
                            <div class=" w-40 h-40 border-2 border-black m-auto select-none bg-black
                                 rounded-lg px-2 relative flex justify-center items-center">
                                <p class=" border-2 border-white rounded-full text-center select-none absolute">
                                <figure class="bg-black w-7 h-7 flex items-center justify-center m-auto rounded-full">
                                    {{ word }}
                                </figure>
                                </p>
                                <img src="../../assets/img3.svg" class="w-full h-full" />
                            </div>

                            <GlobalButton type="defaultSecondary"
                                class="flex justify-center gap-1 select-none bg-black text-white w-52 py-2 mt-10">
                                Camera
                                <Icon name="jam:camera" class="text-2xl" />
                            </GlobalButton>

                        </div>
                    </div>
                </div>
            </TabPanel>


            <TabPanel class="h-[100vh]">
                <div class="container rounded-lg m-auto mt-2 ">
                    <h1 class="text-center font-semibold">Histórico Mes Atual</h1>
                    <div class=" w-full h-[70vh] rounded-md m-auto overflow-y-auto">
                        <ul class="w-full flex gap-5 justify-center" v-for="item in dataFake">
                            <li class="py-2 w-full h-full text-white text-center border bg-[#4B5563]">Dia: 18-07-2023
                                13:23:47</li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>

<style>
.heightCalcManager {
    height: calc(100vh - 20rem);
    font-family: Arial, Helvetica, sans-serif, Roboto;
}

::-webkit-scrollbar {
    height: 4px;
    width: 5px;
}


::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3); */
    background: white !important;
    width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: white !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555 !important;
}
</style>