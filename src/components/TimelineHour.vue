<script setup>

import { isHourValid } from '../validators.js';

const props = defineProps({
    hour: {
        type: Number,
        required: true,
        validator: isHourValid
    }
});

const classes = [
    'rounded px-2 font-mono text-lg absolute -top-4 left-1/2 -translate-x-1/2',
    props.hour === new Date().getHours()
        ? 'bg-purple-900 font-black text-white'
        : 'bg-gray-100 text-gray-500'
];


const formattedHour = `${props.hour.toString().padStart(2, "0")}:00`


</script>

<template>
    <a href="#"
       :class="classes">
        {{ formattedHour }}
    </a>
</template>

<style scoped>

</style>