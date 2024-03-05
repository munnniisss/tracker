<script setup>

import ActivityItem from './ActivityItem.vue';
import { isActivityValid, ValidateActivities } from '../../validators.js';
import BaseButton from '../BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    activities: {
        required: true,
        type: Array,
        validator: ValidateActivities
    }
});

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid
});

let newActivity = 'new';

</script>

<template>
    <div>
        <ul class="divide-y">
            <ActivityItem v-for="activity in activities" :key="activity" :activity="activity"
                          @delete="emit('deleteActivity', activity)" />
        </ul>
        <form
            class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
            @submit.prevent="emit('createActivity', newActivity)"
        >
            <input type="text"
                   :value="newActivity"
                   class="w-full rounded border px-4 text-xl"
                   @input="newActivity = $event.target.value"
                   placeholder="Activity Name">
            <BaseButton>
                <PlusIcon class="h-8"></PlusIcon>
            </BaseButton>
        </form>
    </div>
</template>

<style scoped>

</style>