<script setup>

import BaseButton from './BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline/index.js';
import { isActivityValid } from '../validators.js';
import { ref } from 'vue';


const activity = ref('');

function submit() {
    emit('submit', activity.value);
    activity.value = '';
}


const emit = defineEmits({
    submit: isActivityValid
});


</script>

<template>
    <form
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit"
    >
        <input type="text"
               class="w-full rounded border px-4 text-xl"
               v-model="activity"
               placeholder="Activity Name">
        <BaseButton :disabled="activity.trim() === ''">
            <PlusIcon class="h-8"></PlusIcon>
        </BaseButton>
    </form>
</template>

<style scoped>

</style>