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
    <div>
        <button @click="explode">Show confetti</button>
        <ConfettiExplosion v-if="visible"  :stageWidth="5000" :stageHeight="1000" 
        :force="0.3" :duration="5000" :particleSize="10"  :particleCount="30"
        />
    </div>
</template>