<script setup>
import BaseButton from './BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline/index.js';
import { isActivityValid } from '../validators.js';
import { nextTick, ref } from 'vue';
import { id } from '../functions.js';

const name = ref('');

function submit() {
    emit('submit', {
        id: id(),
        name: name.value,
        secondsToComplete: 0
    });

    name.value = '';

    nextTick(() => {
        window.scroll(0, document.body.scrollHeight);
    });
}

const emit = defineEmits({
    submit: isActivityValid
});
</script>

<template>
    <form
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit">
        <input
            type="text"
            class="w-full rounded border px-4 text-xl"
            v-model="name"
            placeholder="Activity Name" />
        <BaseButton :disabled="name.trim() === ''">
            <PlusIcon class="h-8"></PlusIcon>
        </BaseButton>
    </form>
</template>

<style scoped></style>
