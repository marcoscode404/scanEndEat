<script setup>
import { nextTick, ref } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";

const visible = ref(false);

const explode = async () => {
    visible.value = false;
    await nextTick();
    visible.value = true;
};
</script>

<template>
    <div class=" h-full flex justify-center">
        <div class="w-20 ">
            <button @click="explode">Show confetti</button>
            <ConfettiExplosion v-if="visible" :stageWidth="500" :stageHeight="500" :force="0.3" :duration="3000"
                :particleSize="10" :particleCount="200" />
        </div>
    </div>
</template>