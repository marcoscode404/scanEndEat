<script setup lang="tsx">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { useNow, useDateFormat } from '@vueuse/core';

const formatted = useDateFormat(useNow(), 'DD-MM-YYYY HH:mm:ss')
const selectedTab = ref(0)

</script>

<template>
    <TabGroup>
        <TabList :selectedIndex="selectedTab" class="w-full h-10 rounded-t-3xl bg-black text-white font-semibold flex justify-center gap-20
        absolute bottom-0 items-center
        ">
            <Tab v-slot="{ selected }" class="h-5">
                <button :class="selected ? 'text-msGreen500 font-semibold' : 'text-white'">Home</button>
            </Tab>
            <Tab v-slot="{ selected }" class="h-5 select-none border-none">
                <button :class="selected ? 'text-msGreen500 font-semibold' : 'text-white'">Histórico</button>
            </Tab>
        </TabList>


        <TabPanels>
            <TabPanel>
                <div class="heightCalcManager">
                    <div class="container m-auto mt-2 ">
                        <h1 class="text-center">
                            {{ formatted }}
                        </h1>

                        <div class=" w-52 mt-40 h-40 m-auto">
                            <img src="../../assets/imgQrCode.svg" class=" w-full h-full" />

                            <GlobalButton type="defaultSecondary"
                                class="flex justify-center gap-1 bg-black text-white w-full py-2 mt-10">
                                Camera
                                <Icon name="jam:camera" class="text-2xl" />
                            </GlobalButton>
                        </div>

                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div class="heightCalcManager">
                    <div class="container m-auto mt-2 ">


                        <div class=" w-52 mt-40 h-40 m-auto">
                            asdsad
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