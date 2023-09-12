<script setup>
let dataFake = reactive([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

</script>
<template>
    <NuxtLink :href="'/home'">
        Voltar
    </NuxtLink>

    <div class="container rounded-lg m-auto mt-2 ">
        <h1 class="text-center font-semibold">Histórico Mes Atual</h1>
        <div class=" w-full h-[70vh] rounded-md m-auto overflow-y-auto">
            <ul class="w-full flex gap-5 justify-center" v-for="item in dataFake">
                <li class="py-2 w-full h-full text-white text-center border bg-[#4B5563]">Dia: 18-07-2023
                    13:23:47</li>
            </ul>
        </div>
    </div>
</template>