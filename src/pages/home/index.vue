<script setup lang="tsx">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<template>
    <div class="heightCalcManager">
        <div class="container m-auto mt-2 ">
            <h1 class="text-center">
                Data:22/06/23 as 14:25
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















    <TabGroup>
        <TabList class="w-full bg-black text-white font-semibold flex justify-center gap-20
        absolute
        ">
            <Tab>Home</Tab>
            <Tab>Histórico</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
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