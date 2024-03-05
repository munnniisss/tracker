<script setup>

import BaseButton from './BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline/index.js';
import { isActivityValid } from '../validators.js';


let activity = ''

function submit() {
    emit('submit', activity)
}


const emit = defineEmits({
    submit: isActivityValid
})


</script>

<template>
    <form
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit"
    >
        <input type="text"
               :value="activity"
               class="w-full rounded border px-4 text-xl"
               @input="activity = $event.target.value"
               placeholder="Activity Name">
        <BaseButton>
            <PlusIcon class="h-8"></PlusIcon>
        </BaseButton>
    </form>
</template>

<style scoped>

</style>