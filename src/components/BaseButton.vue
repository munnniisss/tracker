<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_PRIMARY } from '../constants.js';

const typeClasses = {
    [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
    [BUTTON_TYPE_DANGER]: 'bg-red-400 enabled:hover:bg-red-600 text-white',
    [BUTTON_TYPE_PRIMARY]: 'bg-purple-400 enabled:hover:bg-purple-600 text-white'
};
</script>

<script setup>
import { isButtonTypeValid } from '../validators.js';

defineProps({
    type: {
        default: BUTTON_TYPE_PRIMARY,
        type: String,
        validator: isButtonTypeValid
    }
});

</script>

<template>
    <button
        :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`">
        <slot></slot>

    </button>
</template>

<style scoped>

</style>