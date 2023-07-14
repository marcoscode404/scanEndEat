<script setup lang="tsx">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { useNow, useDateFormat } from '@vueuse/core';

const formatted = useDateFormat(useNow(), 'DD-MM-YYYY HH:mm:ss')
const selectedTab = ref(0)

let dataFake = reactive([
    '14-07-2023 13:56:33',
    '14-07-2023 13:56:33',
    '14-07-2023 13:56:33',

])


</script>

<template>
    <h1 class="text-center">
        {{ formatted }}
    </h1>


    <TabGroup>
        <TabList :selectedIndex="selectedTab" class="w-full h-10 rounded-t-3xl bg-red-500 text-white font-semibold flex justify-center gap-20
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
                        <div class="container m-auto mt-2">
                            <div class=" w-52  h-40 m-auto">
                                <img src="../../assets/imgQrCode.svg" class=" w-full h-full" />
                            </div>

                            <GlobalButton type="defaultSecondary"
                                class="flex justify-center gap-1 bg-black text-white w-full py-2 mt-10">
                                Camera
                                <Icon name="jam:camera" class="text-2xl" />
                            </GlobalButton>

                        </div>
                    </div>
                </div>
            </TabPanel>


            <TabPanel class="h-[100vh]">
                <div class="container  m-auto mt-2 ">
                    <h1 class="text-center font-semibold">Histórico Mes Atual</h1>
                    <div class=" w-52 h-[70vh] m-auto">
                        <div class="bg-gray-200 w-full" v-for="item in dataFake">
                        </div>
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