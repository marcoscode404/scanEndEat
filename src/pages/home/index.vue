<script setup lang="tsx">

</script>

<template>
    <div class="heightCalcManager">
        <div class="container m-auto mt-2">
            <h1 class="text-center">
                Data:22/06/23 as 14:25
            </h1>
        </div>
    </div>
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